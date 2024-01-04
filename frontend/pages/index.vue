<template>
  <div id="main">
    <div class="header">
      <h1>예매 좌석 현황</h1>
      <a href="guide">좌석 등록 방법</a>
      <a href="https://github.com/kewool-project/kanna_concert_ticket_check">깃허브</a>
    </div>
    <div class="cinema_list">
      <button
        v-for="cinema in cinemaList"
        :key="cinema.id"
        @click="selectCinema(cinema.name, cinema.id)"
      >
        {{ cinema.name }}
      </button>
    </div>
    <h2>선택된 지점: {{ currentCinemaName }}</h2>
    <div class="seats_table" v-if="cinemaDetail">
      <div class="seats_row" v-for="row in cinemaDetail.seats_row">
        <div class="seats_col" v-for="col in row.max_column" :id="`${row.row}${col}`"></div>
      </div>
    </div>
    <div class="info">
      <p>데이터의 고유함을 증명하기 위해 사용자의 이름과 좌석 정보를 수집합니다.</p>
      <p>사용자의 개인정보는 경우에 따라 스텔라이브 측과 아이리 칸나님께 전달될 수 있으며 이외에는 사용되지 않습니다.</p>
      <p>수집한 데이터는 1월 28일에 일괄 파기될 예정입니다.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TicketList } from "~/interfaces/ticket";
import type { CinemaList, CinemaDetail } from "@/interfaces/cinema";

const cinemaList = await getCinemaList() as CinemaList[];
const ticketList = ref() as Ref<TicketList[]>;
const cinemaDetail = ref() as Ref<CinemaDetail>;

const currentCinemaName = ref("");

const selectCinema = async (cinemaName: string, id: number) => {
  // set seat color
  const seats = document.getElementsByClassName("seats_col");
  for (let i = 0; i < seats.length; i++) {
    const seats = document.getElementsByClassName("seats_col") as HTMLCollectionOf<HTMLElement>;
    seats[i].style.backgroundColor = "#e6e6e6";
  }
  currentCinemaName.value = cinemaName;
  cinemaDetail.value = await getCinemaDetail(id) as CinemaDetail;
  ticketList.value = await getTicketList(id) as TicketList[];
  ticketList.value.forEach((ticket: any) => {
    const seat = document.getElementById(`${ticket.seats_row}${ticket.seats_column}`);
    if (seat) {
      seat.style.backgroundColor = `#${ticket.color}`;
    }
  });
};
</script>

<style lang="scss" scoped>
@import "@/styles/pages/index/styles.scss";
</style>
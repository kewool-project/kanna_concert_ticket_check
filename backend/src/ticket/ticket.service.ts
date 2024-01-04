import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity, TicketEntity } from "./ticket.entity";
import { CinemaEntity } from "../cinema/cinema.entity";
import { SuccessResponse } from "src/types";
import { TicketList } from "./ticket.interface";

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(TicketEntity)
    private ticketRepository: Repository<TicketEntity>,
    @InjectRepository(CinemaEntity)
    private cinemaRepository: Repository<CinemaEntity>,
  ) {}

  async getTickets(cinema_id: number): Promise<TicketList[]> {
    const users = await this.userRepository.find({
      select: ["color"],
      relations: ["tickets", "tickets.cinema"],
    });

    const result: TicketList[] = [];
    for (const user of users) {
      for (const ticket of user.tickets) {
        if (ticket.cinema.id !== cinema_id) {
          continue;
        }
        result.push({
          color: user.color,
          seats_row: ticket.seats_row,
          seats_column: ticket.seats_column,
        });
      }
    }

    return result;
  }

  async createUser(data: string[], ip: string): Promise<SuccessResponse> {
    let temp = "";
    for (const i of data) {
      temp += String.fromCharCode(i.charCodeAt(0) ^ 110);
    }
    let result = null;
    try {
      result = JSON.parse(temp) as {
        a: string;
        b: { s: string[]; c: number; p: string }[];
        checksum: string;
      };
    } catch (e) {
      return { success: false, message: "잘못된 데이터입니다." };
    }

    if (
      result.checksum !==
      "b38094d1a794cd6b58679b4377cff2bfda927a5fb595a4361b8c1ec0188033df"
    ) {
      return { success: false, message: "Checksum이 올바르지 않습니다." };
    } // 귀찮음

    if (await this.userRepository.findOne({ where: { ip } })) {
      return { success: false, message: "오류" };
    }

    if (await this.userRepository.findOne({ where: { name: result.a } })) {
      return { success: false, message: "이미 등록된 이름입니다." };
    }

    let color = Math.floor(Math.random() * 16777215).toString(16);
    while (await this.userRepository.findOne({ where: { color } })) {
      color = Math.floor(Math.random() * 16777215).toString(16);
    }

    const user = await this.userRepository.save({
      name: result.a,
      color,
      ip,
    });

    for (const i of result.b) {
      if (
        !(await this.cinemaRepository.findOne({
          where: { name: `${i.p}${i.c}` },
        }))
      ) {
        await this.cinemaRepository.save({
          name: `${i.p}${i.c}`,
        });
      }
      const cinema = await this.cinemaRepository.findOne({
        where: { name: `${i.p}${i.c}` },
      });
      for (const j of i.s) {
        const tempTicket = j.split(" ");
        const row = tempTicket[1].replace(/[^A-Z]/g, "");
        const column = parseInt(tempTicket[2]);
        if (isNaN(column)) {
          return { success: false, message: "좌석 정보가 올바르지 않습니다." };
        }
        if (
          await this.ticketRepository.findOne({
            where: { cinema: cinema, seats_row: row, seats_column: column },
          })
        ) {
          return { success: false, message: "이미 등록된 좌석입니다." };
        }
        await this.ticketRepository.save({
          seats_row: row,
          seats_column: column,
          user: user,
          cinema: cinema,
        });
      }
    }

    return { success: true, message: "등록이 완료되었습니다." };
  }

  async getCinemas(): Promise<string[]> {
    const cinemas = await this.cinemaRepository.find();
    return cinemas.map((cinema) => cinema.name);
  }
}

import type { TicketList } from "~/interfaces/ticket";

export const getTicketList = async (id: number) => {
  try {
    const { data } = await getAPI<TicketList>(`/ticket/${id}`);
    return data.value ?? [];
  } catch (e) {
    return [];
  }
};

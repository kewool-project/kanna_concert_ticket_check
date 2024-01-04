import type { CinemaDetail } from "~/interfaces/cinema";

export const getCinemaDetail = async (id: number) => {
  try {
    const { data } = await getAPI<CinemaDetail>(`/cinema/${id}`);
    return data.value ?? {};
  } catch (e) {
    return {};
  }
};

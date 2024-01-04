import type { CinemaList } from "~/interfaces/cinema";

export const getCinemaList = async () => {
  try {
    const { data } = await getAPI<CinemaList>("/cinema");
    return data.value ?? [];
  } catch (e) {
    return [];
  }
};

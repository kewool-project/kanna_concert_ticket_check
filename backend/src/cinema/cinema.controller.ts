import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CinemaService } from "./cinema.service";
import { CinemaEntity } from "./cinema.entity";
import { SuccessResponse } from "src/types";

@Controller("cinema")
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Get()
  async getCinemas(): Promise<CinemaEntity[]> {
    return await this.cinemaService.getCinemas();
  }

  @Post()
  async createCinema(
    @Body() body: { name: string; password: string },
  ): Promise<SuccessResponse> {
    return await this.cinemaService.createCinema(body.name, body.password);
  }

  @Post("row")
  async addRowToCinema(
    @Body()
    body: {
      cinemaId: number;
      row: string;
      max_column: number;
      password: string;
    },
  ): Promise<SuccessResponse> {
    return await this.cinemaService.addRowToCinema(
      body.cinemaId,
      body.row,
      body.max_column,
      body.password,
    );
  }

  @Get(":cinema_id")
  async getCinemaDetail(
    @Param("cinema_id") cinema_id: number,
  ): Promise<CinemaEntity> {
    return await this.cinemaService.getCinemaDetail(cinema_id);
  }
}

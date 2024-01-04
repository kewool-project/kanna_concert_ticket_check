import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { CinemaEntity, SeatsRowEntity } from "../cinema/cinema.entity";
import { SuccessResponse } from "src/types";

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(CinemaEntity)
    private cinemaRepository: Repository<CinemaEntity>,
    @InjectRepository(SeatsRowEntity)
    private seatsRowRepository: Repository<SeatsRowEntity>,
    private readonly config: ConfigService,
  ) {}

  async getCinemas(): Promise<CinemaEntity[]> {
    return await this.cinemaRepository.find({
      select: ["id", "name"],
    });
  }

  async getCinemaDetail(cinemaId: number): Promise<CinemaEntity> {
    const cinema = await this.cinemaRepository.findOne({
      where: {
        id: cinemaId,
      },
      select: ["id", "name"],
      relations: ["seats_row"],
    });
    if (!cinema) {
      throw new Error("영화관이 존재하지 않습니다.");
    }
    return cinema;
  }

  async createCinema(name: string, password: string): Promise<SuccessResponse> {
    if (password !== this.config.get("ADMIN_PASSWORD")) {
      throw new Error("잘못된 비밀번호입니다.");
    }
    await this.cinemaRepository.save({
      name,
    });
    return {
      success: true,
    };
  }

  async addRowToCinema(
    cinemaId: number,
    row: string,
    max_column: number,
    password: string,
  ): Promise<SuccessResponse> {
    if (password !== this.config.get("ADMIN_PASSWORD")) {
      throw new Error("잘못된 비밀번호입니다.");
    }
    const cinema = await this.cinemaRepository.findOne({
      where: {
        id: cinemaId,
      },
    });
    if (!cinema) {
      throw new Error("영화관이 존재하지 않습니다.");
    }

    await this.seatsRowRepository.save({
      row,
      max_column,
      cinema,
    });

    return {
      success: true,
    };
  }
}

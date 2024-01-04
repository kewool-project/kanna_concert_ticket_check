import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CinemaController } from "./cinema.controller";
import { CinemaService } from "./cinema.service";
import { CinemaEntity, SeatsRowEntity } from "./cinema.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CinemaEntity, SeatsRowEntity])],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}

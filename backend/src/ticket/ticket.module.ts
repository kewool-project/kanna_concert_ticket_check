import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TicketController } from "./ticket.controller";
import { TicketService } from "./ticket.service";
import { UserEntity, TicketEntity } from "./ticket.entity";
import { CinemaEntity } from "../cinema/cinema.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, TicketEntity, CinemaEntity])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}

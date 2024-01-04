import { Body, Controller, Get, Post, Req, Param } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { SuccessResponse } from "src/types";
import { Request } from "express";
import { TicketList } from "./ticket.interface";

@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get(":cinema_id")
  async getTickets(
    @Param("cinema_id") cinema_id: number,
  ): Promise<TicketList[]> {
    return await this.ticketService.getTickets(cinema_id);
  }

  @Post()
  async createTicket(
    @Body() body: string[],
    @Req() req: Request,
  ): Promise<SuccessResponse> {
    return await this.ticketService.createUser(
      body,
      req.headers["cf-connecting-ip"][0],
    );
  }
}

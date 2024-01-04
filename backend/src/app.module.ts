import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database.module";
import { TicketModule } from "./ticket/ticket.module";
import { CinemaModule } from "./cinema/cinema.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
    }),
    DatabaseModule,
    TicketModule,
    CinemaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

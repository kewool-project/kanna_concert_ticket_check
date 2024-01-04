import { NestFactory } from "@nestjs/core";
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import cookieParser from "cookie-parser";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.use(cookieParser());

  app.enableCors({
    origin: [
      config.get<string>("FRONTEND_URL"),
      "https://www.ticketlink.co.kr",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type, Authorization, Accept",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      disableErrorMessages: config.get<string>("NODE_ENV") !== "development",
      transform: true,
    }),
  );

  await app.listen(config.get<number>("PORT"));

  Logger.log(
    `Server running on ${config.get<string>("NODE_ENV")} mode`,
    "Bootstrap",
  );
  Logger.log(
    `Server running on http://localhost:${config.get<number>("PORT")}`,
    "Bootstrap",
  );
}
bootstrap();

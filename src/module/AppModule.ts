import { Module } from "@nestjs/common";
import { AppController } from "../controller/AppController";
import { AppService } from "../service/AppService";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

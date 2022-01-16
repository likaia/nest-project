import { Body, Controller, Get, Query, Post, Param } from "@nestjs/common";
import { AppService } from "../service/AppService";
import { AppDto, GetNameDto } from "../dto/AppDto";
import { VOUtils } from "../utils/VOUtils";

@Controller("home")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post("setTitle")
  setTitle(@Body() data: AppDto): VOUtils {
    // 客户端传入的数据
    console.log(data);
    return this.appService.setTitle();
  }

  @Get("getName")
  getName(@Body() data: GetNameDto): VOUtils {
    // 客户端传入的数据
    console.log(data);
    return this.appService.getName();
  }

  @Get("getTitle")
  getTitle(@Query("id") id: number): VOUtils {
    console.log("客户端传入的数据", id);
    return this.appService.getTitle();
  }
}

import { Body, Controller, Get, Query, Post } from "@nestjs/common";
import { AppService } from "../service/AppService";
import { AppDto, GetNameDto } from "../dto/AppDto";
import { VOUtils } from "../utils/VOUtils";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiDataResponse } from "../decorators/ApiDataResponse";
import { DraftConfigVO } from "../VO/DraftConfigVO";

@ApiTags("项目主接口")
@Controller("home")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({ summary: "设置网站名" })
  @Post("setTitle")
  @ApiDataResponse(DraftConfigVO)
  setTitle(@Body() data: AppDto): VOUtils {
    // 客户端传入的数据
    console.log(data);
    return this.appService.setTitle();
  }

  @Get("getTitle")
  @ApiDataResponse(DraftConfigVO)
  @ApiOperation({ summary: "获取网站名" })
  getTitle(@Query("id") id: number): VOUtils {
    console.log("客户端传入的数据", id);
    return this.appService.getTitle();
  }

  @Get("getName")
  @ApiDataResponse(DraftConfigVO)
  @ApiOperation({ summary: "获取用户名" })
  getName(@Body() data: GetNameDto): VOUtils {
    // 客户端传入的数据
    console.log(data);
    return this.appService.getName();
  }
}

import { Body, Controller, Get, Query, Post } from "@nestjs/common";
import { AppService } from "../service/AppService";
import { AppDto, GetNameDto } from "../dto/AppDto";
import { VOUtils } from "../utils/VOUtils";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResultVO } from "../VO/ResultVO";

@ApiTags("项目主接口")
@Controller("home")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({ summary: "设置网站名" })
  @Post("setTitle")
  @ApiResponse({ description: "返回值描述", type: ResultVO, status: 200 })
  setTitle(@Body() data: AppDto): VOUtils {
    // 客户端传入的数据
    console.log(data);
    return this.appService.setTitle();
  }

  @Get("getName")
  @ApiOperation({ summary: "获取用户名" })
  @ApiResponse({ description: "返回值描述", type: ResultVO, status: 200 })
  getName(@Body() data: GetNameDto): VOUtils {
    // 客户端传入的数据
    console.log(data);
    return this.appService.getName();
  }

  @Get("getTitle")
  @ApiOperation({ summary: "获取网站名" })
  @ApiResponse({ description: "返回值描述", type: ResultVO, status: 200 })
  getTitle(@Query("id") id: number): VOUtils {
    console.log("客户端传入的数据", id);
    return this.appService.getTitle();
  }
}

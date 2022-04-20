import { IsBoolean, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class TextObjDto {
  @ApiProperty({ example: "修复了一些bug", description: "内容" })
  @IsString()
  content!: string;
  @ApiProperty({ example: "2022-04-20 07:52", description: "创建时间" })
  @IsString()
  createTime?: string;
  @ApiProperty({ example: true, description: "是否为新功能标识" })
  @IsBoolean()
  mark?: boolean;
}

import { IsOptional, IsString, MinLength } from "class-validator";
import { IsConfig } from "../decorators/ConfigDecor";
import { ApiProperty } from "@nestjs/swagger";

import { Transform } from "class-transformer";
import { TextObjType } from "../type/TextObjType";
import { checkTitleKey } from "../utils/JsonDataVerifyUtilas";

export class AppDto {
  @ApiProperty({ example: "1024", description: "网站ID", type: "string" })
  @MinLength(5)
  @IsString()
  public id!: string;
  @ApiProperty({ example: "新网站", description: "网站名字" })
  @IsString()
  public title!: string;
  @ApiProperty({ example: "admin", description: "用户名" })
  @IsString()
  public name!: string;
  @ApiProperty({
    example: "{'design':'', 'author':''}",
    description: "网站配置"
  })
  @IsString()
  @IsConfig({ message: "" })
  public config!: string;

  @ApiProperty({ example: "2022年4月20日修改", description: "备注" })
  @IsOptional()
  @Transform(({ value }) => checkTitleKey(value))
  public text!: string | Array<TextObjType>;
}

export class GetNameDto extends AppDto {
  @ApiProperty({ example: "shop", description: "网站类型" })
  @IsString()
  public type!: string;
}

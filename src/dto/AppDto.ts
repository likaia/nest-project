import { IsString, MinLength } from "class-validator";
import { IsConfig } from "../decorators/ConfigDecor";

export class AppDto {
  @MinLength(5)
  @IsString()
  public id!: string;
  @IsString()
  public title!: string;
  @IsString()
  public name!: string;
  @IsString()
  @IsConfig({ message: "" })
  public config!: string;
}

export class GetNameDto extends AppDto {
  @IsString()
  public type!: string;
}

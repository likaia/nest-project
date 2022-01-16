import { IsString, MinLength } from "class-validator";

export class AppDto {
  @MinLength(5)
  @IsString()
  public id!: string;
  @IsString()
  public title!: string;
  @IsString()
  public name!: string;
}

export class GetNameDto extends AppDto {
  @IsString()
  public type!: string;
}

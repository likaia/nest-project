import { ApiProperty } from "@nestjs/swagger";

export class ResultVO<T> {
  @ApiProperty({ example: "0", description: "接口状态码", type: "number" })
  private code!: number;
  @ApiProperty({ example: "接口调用成功", description: "调用状态" })
  private msg!: string;
  @ApiProperty({ example: "{}", description: "成功时返回的数据" })
  private data!: T | null;

  public getCode(): number {
    return this.code;
  }

  public setCode(value: number): void {
    this.code = value;
  }

  public getMsg(): string {
    return this.msg;
  }

  public setMsg(value: string): void {
    this.msg = value;
  }

  public getData(): T | null {
    return this.data;
  }

  public setData(value: T | null): void {
    this.data = value;
  }
}

import { ApiProperty } from "@nestjs/swagger";

export class DraftConfigVO {
  @ApiProperty({ example: "var config = {}", description: "配置数据" })
  private draftConfig!: string;

  public setDraftConfig(draftConfig: string): void {
    this.draftConfig = "var config = " + draftConfig;
  }

  public getDraftConfig(): string {
    return this.draftConfig;
  }
}

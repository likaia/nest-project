export class DraftConfigVO {
  private draftConfig!: string;

  public setDraftConfig(draftConfig: string): void {
    this.draftConfig = "var config = " + draftConfig;
  }

  public getDraftConfig(): string {
    return this.draftConfig;
  }
}

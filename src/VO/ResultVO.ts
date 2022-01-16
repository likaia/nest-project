export class ResultVO<T> {
  private code!: number;
  private msg!: string;
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

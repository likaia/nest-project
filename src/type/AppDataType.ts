export type book = {
  title: string;
  author: string;
  time: string;
  updateTime: string;
};

export interface specialBook extends book {
  id: number;
  createTime: string;
}

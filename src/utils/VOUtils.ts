// 返回给调用者的视图结构
import { ResultVO } from "../VO/ResultVO";

export class VOUtils {
  public static success<T>(data?: T): ResultVO<T> {
    const resultVo = new ResultVO<T>();
    resultVo.setCode(0);
    resultVo.setMsg("接口调用成功");
    resultVo.setData(data || null);
    return resultVo;
  }

  public static error(code: number, msg: string): ResultVO<null> {
    const resultVo = new ResultVO<null>();
    resultVo.setCode(code);
    resultVo.setMsg(msg);
    return resultVo;
  }
}

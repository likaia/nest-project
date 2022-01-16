import { Injectable } from "@nestjs/common";
import { AppInterface } from "../interface/AppInterface";
import { VOUtils } from "../utils/VOUtils";
import { AppEnum } from "../enum/AppEnum";

@Injectable()
export class AppService implements AppInterface {
  getAge(): VOUtils {
    return "年龄获取成功";
  }

  getName(): VOUtils {
    return VOUtils.error(AppEnum.NOTFOUND, AppEnum.NOTFOUND_DESCRIPTION);
  }

  getTitle(): VOUtils {
    return VOUtils.success("标题获取成功");
  }

  setName(): VOUtils {
    return VOUtils.success("名字设置成功");
  }

  setTitle(): VOUtils {
    return VOUtils.success("标题设置成功");
  }
}

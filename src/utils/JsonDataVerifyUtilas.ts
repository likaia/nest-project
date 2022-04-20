// 验证配置字符串是否符合规范
import { TextObjType } from "../type/TextObjType";
import { BadRequestException } from "@nestjs/common";

export function verifyConfig(
  draftConfig?: string
): boolean | Record<string, any> {
  // 去除多余字符
  if (draftConfig && draftConfig.length >= 12) {
    draftConfig = draftConfig.substring(12, draftConfig.length);
  }
  let draftData = {};
  try {
    if (typeof draftConfig === "string") {
      draftData = JSON.parse(draftConfig);
    }
    // 草稿json字段不足
    if (Object.keys(draftData).length < 2) {
      return false;
    }
  } catch (e) {
    // 草稿配置数据格式错误
    return false;
  }
  return draftData;
}

export function checkTitleKey(
  value: string | number | Array<TextObjType> | undefined | null
): any {
  if (typeof value === "string") {
    // 不做更改，直接返回
    return value;
  } else if (value instanceof Array) {
    // 不能为空数组
    if (value.length <= 0) {
      throw new BadRequestException(
        "property text cannot be an empty array",
        "Bad Request"
      );
    }
    for (let i = 0; i < value.length; i++) {
      // 校验数组中的对象字段
      const objKeys = Object.keys(value[i]);
      if (objKeys.length <= 0) {
        throw new BadRequestException(
          "property text contains empty objects",
          "Bad Request"
        );
      }
      // 必须包含content字段
      if (!objKeys.includes("content")) {
        throw new BadRequestException(
          "property text objects in the array must contain 'content'",
          "Bad Request"
        );
      }
      // 对每个key进行校验
      for (let j = 0; j < objKeys.length; j++) {
        switch (objKeys[j]) {
          case "content":
            // content字段必须为string类型
            if (typeof value[i].content !== "string") {
              throw new BadRequestException(
                "property text 'content' of the objects in the array must be of type string",
                "Bad Request"
              );
            }
            break;
          case "duration":
            if (typeof value[i].createTime !== "string") {
              throw new BadRequestException(
                "property text 'createTime' of the objects in the array must be of type number",
                "Bad Request"
              );
            }
            break;
          case "delay":
            if (typeof value[i].mark !== "boolean") {
              throw new BadRequestException(
                "property text 'mark' of the objects in the array must be of type number",
                "Bad Request"
              );
            }
            break;
          default:
            break;
        }
      }
    }
    return value;
  } else {
    throw new BadRequestException(
      "text must be an array or string",
      "Bad Request"
    );
  }
}

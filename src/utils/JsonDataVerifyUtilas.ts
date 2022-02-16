// 验证配置字符串是否符合规范
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

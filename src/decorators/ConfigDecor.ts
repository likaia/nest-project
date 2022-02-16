import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraintInterface,
  ValidatorConstraint
} from "class-validator";
import { verifyConfig } from "../utils/JsonDataVerifyUtilas";

// 配置验证注解
export function IsConfig(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string): void {
    // 注册一个装饰器
    registerDecorator({
      name: "IsConfig",
      target: object.constructor,
      options: validationOptions,
      propertyName: propertyName,
      validator: IsConfigConstraint
    });
  };
}

// 配置验证程序
@ValidatorConstraint({ async: true })
export class IsConfigConstraint implements ValidatorConstraintInterface {
  validate(value: string): Promise<boolean> | boolean {
    // 对草稿配置进行校验
    // 校验程序返回值为boolean类型则代数据格式错误
    return typeof verifyConfig(value) !== "boolean";
  }
  // 验证失败时的默认错误信息
  defaultMessage(args: ValidationArguments): string {
    return `property ${args.property} data format error`;
  }
}

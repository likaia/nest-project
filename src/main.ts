import { NestFactory } from "@nestjs/core";
import { AppModule } from "./module/AppModule";
import {
  BadRequestException,
  ValidationError,
  ValidationPipe
} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors: ValidationError[]) => {
        console.log(errors);
        const propertyNotExist = [];
        for (let i = 0; i < errors.length; i++) {
          const errorMessage = "属性" + errors[i].property + "未定义";
          propertyNotExist.push(errorMessage);
        }
        return new BadRequestException(propertyNotExist);
      }
    })
  );
  await app.listen(3000);
}
bootstrap();

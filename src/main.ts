import { NestFactory } from "@nestjs/core";
import { AppModule } from "./module/AppModule";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { DraftConfigVO } from "./VO/DraftConfigVO";
import { ResultVO } from "./VO/ResultVO";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("nest-demo")
    .setDescription("nest-demo项目的API使用文档")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    // 项目内未使用，但是要被swagger模块使用的类，需要在此处进行声明
    extraModels: [ResultVO, DraftConfigVO]
  });
  SwaggerModule.setup("api", app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );
  await app.listen(3000);
}
bootstrap();

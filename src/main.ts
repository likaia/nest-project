import { NestFactory } from "@nestjs/core";
import { AppModule } from "./module/AppModule";
import { ValidationPipe } from "@nestjs/common";
import { writeFileSync } from "fs";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("nest-demo")
    .setDescription("nest-demo项目的API使用文档")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // 将json格式的swagger数据写入dist目录下，项目启动后通过 /api/swagger-data.json 来访问
  writeFileSync("./dist/swagger-data.json", JSON.stringify(document));
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

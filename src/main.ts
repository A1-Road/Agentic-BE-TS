import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // localhost:3000からのアクセスを許可
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  app.setGlobalPrefix('api');
  // Swagger の設定
  const config = new DocumentBuilder()
    .setTitle('My API') // APIのタイトル
    .setDescription('API documentation') // 説明
    .setVersion('1.0') // バージョン
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();

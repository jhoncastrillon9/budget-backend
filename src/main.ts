import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Budget Application')
                      .setDescription("Budget API Application")
                      .setVersion('v1')
                      .addTag('users')
                      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({

    origin:'http://localhost:4200',
    
    });
  await app.listen(3000);
}
bootstrap();
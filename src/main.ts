import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { setupSwagger } from './setup-swagger';
import { SeedService } from './seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //设置HTTP标头，保护应用避免漏洞
  app.use(
    helmet({
      contentSecurityPolicy: false, //取消https强制转换
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );

  //配置静态资源目录

  setupSwagger(app);

  await app.get(SeedService).seed();

  //设置请求实体大小
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

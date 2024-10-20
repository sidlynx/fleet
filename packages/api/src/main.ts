import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './trpc/router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = await import('config');

  app.setGlobalPrefix('api');

  app.use(
    '/rpc',
    createExpressMiddleware({
      router: appRouter,
    }),
  );

  await app.listen(config.get('PORT'));

  const appUrl = await app.getUrl();

  console.log(`Application is running on ${appUrl}`);
}
bootstrap();

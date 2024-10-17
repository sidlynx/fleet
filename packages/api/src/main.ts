import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './trpc/router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/rpc',
    createExpressMiddleware({
      router: appRouter,
    }),
  );

  await app.listen(3000);


}
bootstrap();

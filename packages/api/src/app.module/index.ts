import { join, } from "path";

import { Module, } from "@nestjs/common";
import { ServeStaticModule, } from "@nestjs/serve-static";

import { AppController, } from "./controllers/app";
import { AppService, } from "./services/app";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "spa",),
    },),
  ],
  controllers: [AppController,],
  providers: [AppService,],
},)
export class AppModule {}

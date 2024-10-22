import type { AppStates, TApiResponse, } from "@/types";

import { Controller, Get, } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  index(): TApiResponse<{ app: { state: (typeof AppStates)[number] } }> {
    return {
      payload: {
        app: {
          state: "COMING_SOON",
        },
      },
    };
  }
}

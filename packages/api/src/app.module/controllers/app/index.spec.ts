import type { TestingModule, } from "@nestjs/testing";

import { Test, } from "@nestjs/testing";

import { AppService, } from "../../services/app";

import { AppController, } from "./";

describe("AppController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController,],
      providers: [AppService,],
    },).compile();
  },);

  describe("index", () => {
    it("should return \"state\"", () => {
      const appController = app.get(AppController,);
      expect(appController.index(),).toEqual({
        payload: { app: { state: "COMING_SOON", }, },
      },);
    },);
  },);
},);

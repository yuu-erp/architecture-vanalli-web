import { BaseModule } from "@src/core/container";
import { interfaces } from "inversify";
import { DataManagerController } from "./data-manager.controller";
import { DATA_MANAGER_MODULE } from "../data-manager.symbols";
import { IDataManagerController } from "../interfaces";

export class DataManagerModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideDataManagerController(bind);
  }

  private provideDataManagerController(bind: interfaces.Bind): void {
    bind<IDataManagerController>(
      DATA_MANAGER_MODULE.DATA_MANAGER_CONTROLLER
    ).to(DataManagerController);
  }
}

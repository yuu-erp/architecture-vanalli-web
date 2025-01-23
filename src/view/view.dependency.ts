import { BaseModule } from "@src/core/container";
import { interfaces } from "inversify";
import { StatusBarController } from "./status-bar/status-bar.controller";
import { VIEW_LAYER } from "./infrastructure.symbols";

export class ViewDependencyModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideStatusBarController(bind);
  }

  private provideStatusBarController(bind: interfaces.Bind): void {
    bind<StatusBarController>(VIEW_LAYER.STATUS_BAR_CONTROLLER).to(
      StatusBarController
    );
  }
}

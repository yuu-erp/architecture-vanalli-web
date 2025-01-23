import { BaseModule } from "@src/core/container";
import { interfaces } from "inversify";
import { ICalculateLayoutController } from "../interfaces/calculate-layout.interface";
import { CALCULATE_LAYOUT_MODULE } from "../calculate-layouad.symbols";
import { CalculateLayoutController } from "./calculate-layout.controller";
import { CalculateLayoutInteractor } from "../domain/use-case/interactors/calculate-layout.interactor";
import { CalculateLayoutInPort } from "../domain/use-case/port/calculate-layout.in-port";
import { CalculateLayoutRepository } from "../infrastructure";
import { ICalculateLayoutRepository } from "../domain";

export class CalculateLayoutModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideCalculateLayoutController(bind);
    this.provideCalculateLayoutInteractor(bind);
    this.provideCalculateLayoutRepository(bind);
  }

  private provideCalculateLayoutController(bind: interfaces.Bind): void {
    bind<ICalculateLayoutController>(
      CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_CONTROLLER
    ).to(CalculateLayoutController);
  }
  private provideCalculateLayoutInteractor(bind: interfaces.Bind): void {
    bind<CalculateLayoutInPort>(
      CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_INTERACTOR
    ).to(CalculateLayoutInteractor);
  }

  private provideCalculateLayoutRepository(bind: interfaces.Bind): void {
    bind<ICalculateLayoutRepository>(
      CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_REPOSITORY
    ).to(CalculateLayoutRepository);
  }
}

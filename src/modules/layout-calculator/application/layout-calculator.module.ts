import { BaseModule } from "@src/core/container";
import { interfaces } from "inversify";
import { ILayoutCalculatorController } from "../interface/layout-calculator.controller.interface";
import { LAYOUT_CALCULATE_SYMBOLS } from "../layouad-calculate.symbols";
import { LayoutCalculateController } from "./layout-calculator.controller";
import { LayoutCalculatorInPort } from "../domain/use-case/port/layout-calculator.in-port";
import {
  ILayoutCalculateRepository,
  LayoutCalculatorInteractor,
  LayoutCalculatorService,
} from "../domain";
import { ILayoutCalculateStorageRepository } from "../domain/repository/layout-calculate-storage.repository";
import { LayoutCalculateStorageRepository } from "../infrastructure/storages/layout-calculate-storage.repository";

export class LayoutCalculatorModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }
  public init(bind: interfaces.Bind): void {
    this.provideController(bind);
    this.provideInteractor(bind);
    this.provideRepository(bind);
    this.provideService(bind);
  }

  private provideController(bind: interfaces.Bind): void {
    bind<ILayoutCalculatorController>(
      LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_CONTROLLER
    ).to(LayoutCalculateController);
  }
  private provideInteractor(bind: interfaces.Bind): void {
    bind<LayoutCalculatorInPort>(
      LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_INTERACTOR
    ).to(LayoutCalculatorInteractor);
  }
  private provideRepository(bind: interfaces.Bind): void {
    bind<ILayoutCalculateStorageRepository>(
      LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_STORAGE_REPOSITORY
    ).to(LayoutCalculateStorageRepository);
  }
  private provideService(bind: interfaces.Bind): void {
    bind<ILayoutCalculateRepository>(
      LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_SERVICE
    ).to(LayoutCalculatorService);
  }
}

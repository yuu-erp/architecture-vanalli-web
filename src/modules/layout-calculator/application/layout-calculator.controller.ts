import { injectable, inject } from "inversify";
import { ILayoutCalculatorController } from "../interface/layout-calculator.controller.interface";
import { LAYOUT_CALCULATE_SYMBOLS } from "../layouad-calculate.symbols";
import { LayoutCalculatorInPort } from "../domain/use-case/port/layout-calculator.in-port";

@injectable()
export class LayoutCalculateController implements ILayoutCalculatorController {
  constructor(
    @inject(LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_INTERACTOR)
    private readonly layoutCalculateUseCase: LayoutCalculatorInPort
  ) {}

  execute(): void {
    this.layoutCalculateUseCase.execute();
  }
}

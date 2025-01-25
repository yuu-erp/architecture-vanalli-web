import { injectable, inject } from "inversify";
import { LayoutCalculatorInPort } from "../port/layout-calculator.in-port";
import { LayoutCalculatorOutPort } from "../port/layout-calculator.out-port";
import { type ILayoutCalculateRepository } from "../../repository/layout-calculate.repository";
import { LAYOUT_CALCULATE_SYMBOLS } from "@src/modules/layout-calculator/layouad-calculate.symbols";

@injectable()
export class LayoutCalculatorInteractor implements LayoutCalculatorInPort {
  constructor(
    @inject(LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_STORAGE_REPOSITORY)
    private readonly layoutCalculatorOutPort: LayoutCalculatorOutPort,
    @inject(LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_SERVICE)
    private readonly layoutCalculatorService: ILayoutCalculateRepository
  ) {}

  execute(): void {
    const payload = this.layoutCalculatorService.getAll();
    this.layoutCalculatorOutPort.insert(payload);
  }
}

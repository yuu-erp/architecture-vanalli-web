import { inject, injectable } from "inversify";
import { ICalculateLayoutController } from "../interfaces/calculate-layout.interface";
import { CALCULATE_LAYOUT_MODULE } from "../calculate-layouad.symbols";
import { CalculateLayoutInPort } from "../domain/use-case/port/calculate-layout.in-port";

@injectable()
export class CalculateLayoutController implements ICalculateLayoutController {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_INTERACTOR)
    private readonly calculateLayoutUseCase: CalculateLayoutInPort
  ) {}
  init(): void {
    return this.calculateLayoutUseCase.execute();
  }
}

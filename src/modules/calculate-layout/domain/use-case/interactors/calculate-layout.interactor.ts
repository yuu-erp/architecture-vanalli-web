import { injectable, inject } from "inversify";
import { CalculateLayoutInPort, CalculateLayoutOutPort } from "../port";
import { CALCULATE_LAYOUT_MODULE } from "@src/modules/calculate-layout/calculate-layouad.symbols";

@injectable()
export class CalculateLayoutInteractor implements CalculateLayoutInPort {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_REPOSITORY)
    private readonly createUserPort: CalculateLayoutOutPort
  ) {}
  execute(): void {
    this.createUserPort.insert({ heightDock: 1 });
  }
}

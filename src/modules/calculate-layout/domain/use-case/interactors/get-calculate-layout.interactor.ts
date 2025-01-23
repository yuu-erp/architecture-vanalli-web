import { CALCULATE_LAYOUT_MODULE } from "@src/modules/calculate-layout/calculate-layouad.symbols";
import { inject, injectable } from "inversify";
import { GetCalculateLayoutInPort } from "../port/get-calculate-layout.in-port";
import { GetCalculateLayoutOutPort } from "../port/get-calculate-layout.out-port";
import { ICalculateLayout } from "../../entities";

@injectable()
export class GetCalculateLayoutInteractor implements GetCalculateLayoutInPort {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_REPOSITORY)
    private readonly createUserPort: GetCalculateLayoutOutPort
  ) {}
  execute(): ICalculateLayout {
    return this.createUserPort.getCalculateLayout();
  }
}

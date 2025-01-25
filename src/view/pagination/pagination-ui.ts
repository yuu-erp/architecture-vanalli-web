import { styleElement } from "@src/core/helpers";
import { CALCULATE_LAYOUT_MODULE } from "@src/modules/calculate-layout/calculate-layouad.symbols";
import { type ICalculateLayoutController } from "@src/modules/calculate-layout/interfaces/calculate-layout.interface";
import { inject, injectable } from "inversify";

@injectable()
export class PaginationUI {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_CONTROLLER)
    private readonly calculateLayoutController: ICalculateLayoutController
  ) {}

  render(): HTMLElement {
    const { heightDock } = this.calculateLayoutController.getCalculateLayout();
    const paginationElement = document.createElement("div");
    paginationElement.className = "pagination";
    paginationElement.textContent = "Pagination UI";
    styleElement(paginationElement.style, {
      bottom: heightDock + "px",
    });
    return paginationElement;
  }
}

import { styleElement } from "@src/core/helpers";
import {
  LAYOUT_CALCULATE_SYMBOLS,
  type ILayoutCalculatorController,
} from "@src/modules/layout-calculator";
import { inject, injectable } from "inversify";

@injectable()
export class PaginationUI {
  constructor(
    @inject(LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_CONTROLLER)
    private readonly calculateLayoutController: ILayoutCalculatorController
  ) {}

  render(): HTMLElement {
    // @ts-ignore
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

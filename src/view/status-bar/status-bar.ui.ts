import { styleElement } from "@src/core/helpers";
import {
  LAYOUT_CALCULATE_SYMBOLS,
  type ILayoutCalculatorController,
} from "@src/modules/layout-calculator";
import { inject, injectable } from "inversify";

@injectable()
export class StatusBarUI {
  constructor(
    @inject(LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_CONTROLLER)
    private readonly calculateLayoutController: ILayoutCalculatorController
  ) {}

  render(): HTMLElement {
    const { heightStatusBar } =
    // @ts-ignore
      this.calculateLayoutController.getCalculateLayout();
    const statusBarElement = document.createElement("div");
    statusBarElement.className = "status-bar";
    statusBarElement.textContent = "Status bar";
    styleElement(statusBarElement.style, {
      height: heightStatusBar + "px",
    });
    return statusBarElement;
  }
}

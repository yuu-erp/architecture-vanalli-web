import { styleElement } from "@src/core/helpers";
import { CALCULATE_LAYOUT_MODULE } from "@src/modules/calculate-layout/calculate-layouad.symbols";
import { type ICalculateLayoutController } from "@src/modules/calculate-layout/interfaces/calculate-layout.interface";
import { inject, injectable } from "inversify";

@injectable()
export class StatusBarUI {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_CONTROLLER)
    private readonly calculateLayoutController: ICalculateLayoutController
  ) {}

  render(): HTMLElement {
    const { heightStatusBar } =
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

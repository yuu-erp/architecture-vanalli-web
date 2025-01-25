import { styleElement } from "@src/core/helpers";
import {
  LAYOUT_CALCULATE_SYMBOLS,
  type ILayoutCalculatorController,
} from "@src/modules/layout-calculator";
import { inject, injectable } from "inversify";

@injectable()
export class DockUI {
  constructor(
    @inject(LAYOUT_CALCULATE_SYMBOLS.LAYOUT_CALCULATE_CONTROLLER)
    private readonly calculateLayoutController: ILayoutCalculatorController
  ) {}

  render() {
    // @ts-ignore
    const { heightDock } = this.calculateLayoutController.getCalculateLayout();
    const dockElement = document.createElement("div");
    dockElement.className = "dock";
    dockElement.textContent = "Dock UI";
    styleElement(dockElement.style, {
      height: heightDock + "px",
    });
    return dockElement;
  }
}

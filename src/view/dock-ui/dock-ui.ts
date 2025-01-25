import { styleElement } from "@src/core/helpers";
import { CALCULATE_LAYOUT_MODULE } from "@src/modules/calculate-layout/calculate-layouad.symbols";
import { type ICalculateLayoutController } from "@src/modules/calculate-layout/interfaces/calculate-layout.interface";
import { inject, injectable } from "inversify";

@injectable()
export class DockUI {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_CONTROLLER)
    private readonly calculateLayoutController: ICalculateLayoutController
  ) {}

  render() {
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

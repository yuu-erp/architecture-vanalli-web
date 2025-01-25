import { injectable, inject } from "inversify";
import { VIEW_LAYER } from "./infrastructure.symbols";
import { StatusBarUI } from "./status-bar/status-bar.ui";
import { MainDappUI } from "./main-dapp/main-dapp.ui";
import { PaginationUI } from "./pagination/pagination-ui";
import { DockUI } from "./dock-ui/dock-ui";

@injectable()
export class LayoutUI {
  constructor(
    @inject(VIEW_LAYER.STATUS_BAR_UI) private readonly statusBarUI: StatusBarUI,
    @inject(VIEW_LAYER.MAIN_DAPP_UI) private readonly mainDappUI: MainDappUI,
    @inject(VIEW_LAYER.PAGINATION_UI)
    private readonly paginationUI: PaginationUI,
    @inject(VIEW_LAYER.DOCK_UI)
    private readonly dockUI: DockUI
  ) {}

  render(rootElement: HTMLElement) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.statusBarUI.render());
    fragment.appendChild(this.mainDappUI.render());
    fragment.appendChild(this.paginationUI.render());
    fragment.appendChild(this.dockUI.render());
    rootElement.appendChild(fragment);
  }
}

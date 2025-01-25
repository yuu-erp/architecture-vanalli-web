import { BaseModule } from "@src/core/container";
import { interfaces } from "inversify";
import { StatusBarUI } from "./status-bar/status-bar.ui";
import { VIEW_LAYER } from "./infrastructure.symbols";
import { MainDappUI } from "./main-dapp/main-dapp.ui";
import { LayoutUI } from "./layout-ui";
import { PaginationUI } from "./pagination/pagination-ui";
import { DockUI } from "./dock-ui/dock-ui";

export class ViewDependencyModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideStatusBarUI(bind);
    this.provideMainDappUI(bind);
    this.provideLayoutUI(bind);
    this.providePaginationUI(bind);
    this.provideDockUI(bind);
  }

  private provideLayoutUI(bind: interfaces.Bind): void {
    bind<LayoutUI>(VIEW_LAYER.LAYOUT_UI).to(LayoutUI);
  }

  private provideStatusBarUI(bind: interfaces.Bind): void {
    bind<StatusBarUI>(VIEW_LAYER.STATUS_BAR_UI).to(StatusBarUI);
  }

  private provideMainDappUI(bind: interfaces.Bind): void {
    bind<MainDappUI>(VIEW_LAYER.MAIN_DAPP_UI).to(MainDappUI);
  }

  private providePaginationUI(bind: interfaces.Bind): void {
    bind<PaginationUI>(VIEW_LAYER.PAGINATION_UI).to(PaginationUI);
  }

  private provideDockUI(bind: interfaces.Bind): void {
    bind<DockUI>(VIEW_LAYER.DOCK_UI).to(DockUI);
  }
}

import {
  CHECKPOINT_COLUMN,
  CHECKPOINT_COLUMN_DOCK,
  CHECKPOINT_HEIGHT_STATUS_BAR,
  CHECKPOINT_SCREEN,
  HEIGHT_DOCK,
} from "@src/constants";
import { useResponsiveValue } from "@src/core/helpers";
import { CALCULATE_LAYOUT_MODULE } from "@src/modules/calculate-layout/calculate-layouad.symbols";
import { inject, injectable } from "inversify";
import { CalculateLayoutInPort, CalculateLayoutOutPort } from "../port";

@injectable()
export class CalculateLayoutInteractor implements CalculateLayoutInPort {
  constructor(
    @inject(CALCULATE_LAYOUT_MODULE.CALCULATE_LAYOUT_REPOSITORY)
    private readonly createUserPort: CalculateLayoutOutPort
  ) {}

  execute(): void {
    this.createUserPort.insert({
      columnNumber: this.columnNumber(),
      columnDockNumber: this.columnDockNumber(),
      heightStatusBar: this.heightStatusBar(),
      screenCheckPoint: this.screenCheckPoint(),
      itemWidth: this.itemWidth(),
      itemHeight: this.itemHeight(),
      outerPadding: this.outerPadding(),
      sizeIcon: this.sizeIcon(),
      rowsNumber: this.rowsNumber(),
      widthDock: this.widthDock(),
      heightPagination: this.heightPagination(),
      heightDock: this.heightDock(),
      sizeLayout: this.sizeLayout(),
    });
  }
  private columnNumber(): number {
    return useResponsiveValue(CHECKPOINT_COLUMN, 4);
  }
  private columnDockNumber(): number {
    return useResponsiveValue(CHECKPOINT_COLUMN_DOCK, 4);
  }
  private heightStatusBar(): number {
    return useResponsiveValue(CHECKPOINT_HEIGHT_STATUS_BAR, 60);
  }
  private screenCheckPoint(): number {
    return useResponsiveValue(CHECKPOINT_SCREEN, window.innerWidth);
  }
  private itemWidth(): number {
    return 0;
  }
  private itemHeight(): number {
    return this.itemWidth() * 1.1;
  }
  private outerPadding(): number {
    return 0;
  }
  private sizeIcon(): number {
    return 0;
  }
  private rowsNumber(): number {
    return 0;
  }
  private widthDock(): number {
    return 0;
  }
  private heightPagination(): number {
    return 0;
  }
  private heightDock(): number {
    return HEIGHT_DOCK;
  }
  private sizeLayout(): string {
    return "";
  }
}

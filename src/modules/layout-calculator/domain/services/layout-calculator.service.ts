import { injectable } from "inversify";
import {
  HEIGHT_DOCK,
  HEIGHT_DOCK_CONTAINER,
  HEIGHT_PAGINATION,
  HEIGHT_STATUS_BAR,
} from "../../constants";
import { useResponsiveValue } from "../../helpers";
import { Device, LayoutParameters } from "../models/layout-parameters.models";
import { ILayoutCalculateRepository } from "../repository/layout-calculate.repository";

@injectable()
export class LayoutCalculatorService implements ILayoutCalculateRepository {
  constructor() {}
  private getDevice(): Device {
    return Device.MOBILE;
  }
  getAll(): LayoutParameters {
    // @ts-ignore
    return {
      heightStatusBar: this.getHeightStatusBar(),
      heightPagination: this.getHeightPagination(),
      heightDock: this.getHeightDock(),
      heightDockContainer: this.getHeightDockContainer(),
    };
  }
  getHeightStatusBar(): number {
    return useResponsiveValue(this.getDevice(), HEIGHT_STATUS_BAR);
  }
  getHeightPagination(): number {
    return useResponsiveValue(this.getDevice(), HEIGHT_PAGINATION);
  }
  getHeightDock(): number {
    return useResponsiveValue(this.getDevice(), HEIGHT_DOCK);
  }
  getHeightDockContainer(): number {
    return useResponsiveValue(this.getDevice(), HEIGHT_DOCK_CONTAINER);
  }
}

import { LayoutParameters } from "../models/layout-parameters.models";

export interface ILayoutCalculateRepository {
  getAll(): LayoutParameters;
  getHeightStatusBar(): number;
  getHeightPagination(): number;
  getHeightDock(): number;
  getHeightDockContainer(): number;
}

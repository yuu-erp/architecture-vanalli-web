export enum Device {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
}
export interface LayoutParameters {
  heightStatusBar: number;
  heightPagination: number;
  heightDock: number;
  heightDockContainer: number;

  widthDock: number;

  screenCheckPoint: number;

  columnNumber: number;
  rowsNumber: number;
  columnDockNumber: number;
  sizeIcon: number;
  itemWidth: number;
  itemHeight: number;
  outerPadding: number;
  sizeLayout: number;

  deviceType: Device;
}

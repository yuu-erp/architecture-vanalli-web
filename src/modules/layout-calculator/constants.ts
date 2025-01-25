import { Device } from "./domain";

export const HEIGHT_STATUS_BAR: Record<Device, number> = {
  [Device.MOBILE]: 60,
  [Device.TABLET]: 60,
  [Device.DESKTOP]: 40,
};

export const HEIGHT_PAGINATION: Record<Device, number> = {
  [Device.MOBILE]: 40,
  [Device.TABLET]: 40,
  [Device.DESKTOP]: 40,
};

export const HEIGHT_DOCK: Record<Device, number> = {
  [Device.MOBILE]: 120,
  [Device.TABLET]: 120,
  [Device.DESKTOP]: 120,
};

export const HEIGHT_DOCK_CONTAINER: Record<Device, number> = {
  [Device.MOBILE]: 98,
  [Device.TABLET]: 98,
  [Device.DESKTOP]: 98,
};

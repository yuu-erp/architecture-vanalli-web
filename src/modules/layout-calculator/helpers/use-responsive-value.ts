import { Device } from "../domain";

export function useResponsiveValue(
  device: Device,
  constant: Record<Device, number>
) {
  return constant[device];
}

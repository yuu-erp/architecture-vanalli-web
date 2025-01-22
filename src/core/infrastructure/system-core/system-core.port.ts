import { SystemCoreMetadata } from "./interfaces";
export interface SystemCorePort {
  send<T>(_payload: SystemCoreMetadata): Promise<T>;
}

import { injectable } from "inversify";
import { SystemCoreMetadata } from "./interfaces";
import { SystemCorePort } from "./system-core.port";

@injectable()
export class SystemCore implements SystemCorePort {
  async send<T>(_payload: SystemCoreMetadata): Promise<T> {
    const mockResponse: T = {} as T;
    return mockResponse;
  }
}

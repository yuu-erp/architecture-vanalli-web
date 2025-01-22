import { injectable } from "inversify";
import { SystemCoreMetadata } from "./interfaces";
import { SystemCorePort } from "./system-core.port";

@injectable()
export class SystemCore implements SystemCorePort {
  async send<T>(_payload: SystemCoreMetadata): Promise<T> {
    // Giả lập dữ liệu trả về, hãy thay đổi logic này theo nhu cầu thực tế.
    const mockResponse: T = {} as T;
    return mockResponse;
  }
}

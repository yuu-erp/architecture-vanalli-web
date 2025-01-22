import { interfaces } from "inversify";
import { BaseModule } from "../container";
import { SystemCorePort } from "./system-core";
import { INFRASTRUCTURE_MODULE } from "./infrastructure.symbols";
import { SystemCore } from "./system-core/system-core";
import { InMemoryStorage } from "./storage/in-memory-storage";
import { StoragePort } from "./storage";

export class InfrastructureDependencyModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }
  public init(bind: interfaces.Bind): void {
    this.provideSystemCore(bind);
    this.provideInMemoryStorage(bind);
  }

  private provideSystemCore(bind: interfaces.Bind) {
    bind<SystemCorePort>(INFRASTRUCTURE_MODULE.SYSTEM_CORE).to(SystemCore);
  }

  private provideInMemoryStorage(bind: interfaces.Bind) {
    bind<StoragePort>(INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE).to(
      InMemoryStorage
    );
  }
}

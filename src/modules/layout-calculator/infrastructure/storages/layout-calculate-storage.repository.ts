import { injectable, inject } from "inversify";
import { LayoutParameters } from "../../domain";
import { ILayoutCalculateStorageRepository } from "../../domain/repository/layout-calculate-storage.repository";
import {
  INFRASTRUCTURE_MODULE,
  type StoragePort,
} from "@src/core/infrastructure";

@injectable()
export class LayoutCalculateStorageRepository
  implements ILayoutCalculateStorageRepository
{
  constructor(
    @inject(INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort
  ) {}

  insert(payload: LayoutParameters): void {
    this.storage.set("layoutCalculate", payload);
  }
}

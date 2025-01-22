import { inject, injectable } from "inversify";
import { IFetchDataNativeRepository } from "../../domain";
import {
  INFRASTRUCTURE_MODULE,
  type StoragePort,
} from "@src/core/infrastructure";
import { DappEntity } from "@src/modules/dapp";

@injectable()
export class FetchDataNativeRepository implements IFetchDataNativeRepository {
  constructor(
    @inject(INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort<any>
  ) {}
  insert(entity: DappEntity[][]): void {
    this.storage.set("pages", entity);
  }
}

import { inject, injectable } from "inversify";
import { type ICalculateLayout } from "../../domain/entities";
import { ICalculateLayoutRepository } from "../../domain/repository/calculate-layout.repository";
import {
  INFRASTRUCTURE_MODULE,
  type StoragePort,
} from "@src/core/infrastructure";

@injectable()
export class CalculateLayoutRepository implements ICalculateLayoutRepository {
  constructor(
    @inject(INFRASTRUCTURE_MODULE.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort<ICalculateLayout>
  ) {}

  insert(data: ICalculateLayout): void {
    this.storage.set("calculateLayout", data);
  }

  getCalculateLayout(): ICalculateLayout {
    return this.storage.get("calculateLayout") as ICalculateLayout;
  }
}

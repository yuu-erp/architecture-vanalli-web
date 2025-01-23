import { ICalculateLayout } from "../entities";

export interface ICalculateLayoutRepository {
  insert(data: ICalculateLayout): void;
}

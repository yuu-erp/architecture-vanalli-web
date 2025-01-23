import { ICalculateLayout } from "../../entities";

export abstract class CalculateLayoutOutPort {
  abstract insert(
    payload: Partial<ICalculateLayout>
  ): Partial<ICalculateLayout>;
}

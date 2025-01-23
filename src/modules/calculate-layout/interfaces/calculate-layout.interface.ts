import { ICalculateLayout } from "../domain";

export interface ICalculateLayoutController {
  init(): void;
  getCalculateLayout(): ICalculateLayout;
}

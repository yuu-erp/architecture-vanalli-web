import { LayoutParameters } from "../../models/layout-parameters.models";

export abstract class LayoutCalculatorOutPort {
  abstract insert(payload: LayoutParameters): LayoutParameters;
}

import { LayoutParameters } from "../models/layout-parameters.models";

export interface ILayoutCalculateStorageRepository {
  insert(data: LayoutParameters): void;
}

import { UseCase } from "@src/core/domain";

export abstract class CalculateLayoutInPort implements UseCase<void, void> {
  abstract execute(): void;
}

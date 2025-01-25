import { UseCase } from "@src/core/domain";

export abstract class LayoutCalculatorInPort implements UseCase<void, void> {
  abstract execute(): void;
}

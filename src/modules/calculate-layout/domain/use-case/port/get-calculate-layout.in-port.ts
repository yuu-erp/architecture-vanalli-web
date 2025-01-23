import { UseCase } from "@src/core/domain";
import { ICalculateLayout } from "../../entities";

export abstract class GetCalculateLayoutInPort
  implements UseCase<void, ICalculateLayout>
{
  abstract execute(): ICalculateLayout;
}

import { UseCase } from "../../../../../core/domain/use-cases.port.base";
import { DappEntity } from "../../../../dapp/domain/entities/dapp.entity";

export abstract class FetchDataDappInPort
  implements UseCase<void, DappEntity[][]>
{
  abstract execute(): Promise<DappEntity[][]>;
}

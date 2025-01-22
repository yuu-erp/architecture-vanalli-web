import { DappEntity } from "../../../../dapp/domain/entities/dapp.entity";

export abstract class FetchDataDappOutPort {
  abstract insert(user: DappEntity[][]): Promise<DappEntity[][]>;
}

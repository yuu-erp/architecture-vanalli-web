import { DappEntity } from "../../dapp/domain/entities/dapp.entity";

export interface IFetchDataNativeController {
  fetchDataDapp(): Promise<DappEntity[][]>;
  fetchDockDapp(): Promise<DappEntity[]>;
}

import { DappEntity } from "@src/modules/dapp";

export interface IFetchDataNativeRepository {
  insert(data: DappEntity[][]): void;
}

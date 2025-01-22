import { inject, injectable } from "inversify";
import { FETCH_DATA_NATIVE_MODULE } from "../fetch-data-native.symbols";
import { DappEntity } from "@src/modules/dapp";
import { FetchDataDappInPort } from "../domain";
import { IFetchDataNativeController } from "../interfaces";
import { NotImplementedException } from "@src/core/exceptions";

@injectable()
export class FetchDataNativeController implements IFetchDataNativeController {
  constructor(
    @inject(FETCH_DATA_NATIVE_MODULE.FETCH_DATA_DAPP_INTERACTOR)
    private readonly fetchDataDappUseCase: FetchDataDappInPort
  ) {}

  async fetchDataDapp() {
    return this.fetchDataDappUseCase.execute();
  }

  fetchDockDapp(): Promise<DappEntity[]> {
    throw new NotImplementedException(
      "fetchDockDapp method is not implemented."
    );
  }
}

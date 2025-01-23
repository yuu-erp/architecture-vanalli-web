import {
  InternalServerErrorException,
  NotImplementedException,
} from "@src/core/exceptions";
import { inject, injectable } from "inversify";
import { FetchDataDappInPort } from "../domain";
import { FETCH_DATA_NATIVE_MODULE } from "../fetch-data-native.symbols";
import { IFetchDataNativeController } from "../interfaces";
import { fulfilledPromises } from "@src/core/helpers";

@injectable()
export class FetchDataNativeController implements IFetchDataNativeController {
  constructor(
    @inject(FETCH_DATA_NATIVE_MODULE.FETCH_DATA_DAPP_INTERACTOR)
    private readonly fetchDataDappUseCase: FetchDataDappInPort
  ) {}

  async fetchDataDapp(): Promise<void> {
    this.fetchDataDappUseCase.execute();
  }

  async fetchDockDapp(): Promise<void> {
    throw new NotImplementedException(
      "fetchDockDapp method is not implemented."
    );
  }

  async fetchAll(): Promise<void> {
    try {
      await fulfilledPromises([this.fetchDataDapp(), this.fetchDockDapp()]);
    } catch (error) {
      throw new InternalServerErrorException("Failed to fetch Dapp data.", {
        originalError: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

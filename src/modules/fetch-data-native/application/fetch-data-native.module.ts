import { interfaces } from "inversify";
import { BaseModule } from "../../../core/container";
import { FetchDataDappInteractor } from "../domain/use-case/interactors/fetch-data-dapp.interactor";
import { FETCH_DATA_NATIVE_MODULE } from "../fetch-data-native.symbols";
import { FetchDataNativeController } from "./fetch-data-native.controller";
import { IFetchDataNativeController } from "../interfaces";
import { IFetchDataNativeRepository } from "../domain";
import { FetchDataNativeRepository } from "../infrastructure/storage/fetch-data-native.repository";

export class FetchDataNativeModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }
  public init(bind: interfaces.Bind): void {
    this.provideFetchDataNativeRepository(bind);
    this.provideFetchDataDappInPort(bind);
    this.provideFetchDataNativeController(bind);
  }

  private provideFetchDataDappInPort(bind: interfaces.Bind): void {
    bind<FetchDataDappInteractor>(
      FETCH_DATA_NATIVE_MODULE.FETCH_DATA_DAPP_INTERACTOR
    ).to(FetchDataDappInteractor);
  }

  private provideFetchDataNativeRepository(bind: interfaces.Bind): void {
    bind<IFetchDataNativeRepository>(
      FETCH_DATA_NATIVE_MODULE.FETCH_DATA_DAPP_REPOSITORY
    ).to(FetchDataNativeRepository);
  }

  private provideFetchDataNativeController(bind: interfaces.Bind) {
    bind<IFetchDataNativeController>(
      FETCH_DATA_NATIVE_MODULE.FETCH_DATA_NATIVE_CONTROLLER
    ).to(FetchDataNativeController);
  }
}

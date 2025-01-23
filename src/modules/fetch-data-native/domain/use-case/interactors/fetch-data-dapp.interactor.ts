import { INFRASTRUCTURE_MODULE } from "@src/core/infrastructure";
import { FETCH_DATA_NATIVE_MODULE } from "@src/modules/fetch-data-native/fetch-data-native.symbols";
import { inject, injectable } from "inversify";
import {
  InternalServerErrorException,
  NotFoundException,
} from "../../../../../core/exceptions/exceptions";
import { type SystemCorePort } from "../../../../../core/infrastructure/system-core/system-core.port";
import { DappEntity } from "../../../../dapp/domain/entities/dapp.entity";
import { FetchDataDappInPort } from "../port/fetch-data-dapp.in-port";
import { FetchDataDappOutPort } from "../port/fetch-data-dapp.out-port";

@injectable()
export class FetchDataDappInteractor implements FetchDataDappInPort {
  constructor(
    @inject(FETCH_DATA_NATIVE_MODULE.FETCH_DATA_DAPP_REPOSITORY)
    private readonly fetchDataDappOutPort: FetchDataDappOutPort,
    @inject(INFRASTRUCTURE_MODULE.SYSTEM_CORE)
    private readonly systemCore: SystemCorePort
  ) {}

  async execute(): Promise<DappEntity[][]> {
    try {
      return this.fetchDataDappOutPort.insert([[], [], []]);
      const data = await this.systemCore.send<DappEntity[][]>({
        command: "command",
      });

      if (!data) {
        throw new NotFoundException("No data found for the provided command.");
      }
      return this.fetchDataDappOutPort.insert(data);
    } catch (error) {
      throw new InternalServerErrorException("Failed to fetch Dapp data.", {
        originalError: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

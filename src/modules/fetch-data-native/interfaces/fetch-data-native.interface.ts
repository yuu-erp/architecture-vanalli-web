export interface IFetchDataNativeController {
  fetchDataDapp(): Promise<void>;
  fetchDockDapp(): Promise<void>;
  fetchAll(): Promise<void>;
}

export enum DappType {
  DAPP = 1,
  SMART_CONTRACT = 2,
  FRAME = 3,
  APP_USER = 4,
  GROUP = 5,
}
export interface CreateDappProps {
  id: number;
  name: string;
  logo: string;
  type: DappType;
  url: string;
}
export interface IDappCreatedDE extends Omit<CreateDappProps, "id"> {}

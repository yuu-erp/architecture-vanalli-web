import { SnowflakeID } from "@src/core/infrastructure";
import { CreateDappProps } from "./dapp.type";
import { AggregateRoot, UniqueEntityID } from "@src/core/domain";

export class DappEntity extends AggregateRoot<CreateDappProps> {
  static create(createProps: CreateDappProps) {
    const snowflakeID = new SnowflakeID();
    const id = new UniqueEntityID(snowflakeID as any);
    const props = { ...createProps };
    const user = new DappEntity({ id, props });
    return user;
  }
  validate(): void {}
}

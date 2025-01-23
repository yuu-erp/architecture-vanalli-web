import { Emitter, LoggerPort, SnowflakeID } from "@src/core/infrastructure";
import { CreateDappProps } from "./dapp.type";
import { AggregateRoot, UniqueEntityID } from "@src/core/domain";
import { DappCreatedDomainEvent } from "../events/dapp-created.event";

export class DappEntity extends AggregateRoot<CreateDappProps> {
  static create(
    createProps: CreateDappProps,
    logger: LoggerPort,
    emitter: Emitter
  ) {
    const snowflakeID = new SnowflakeID();
    const id = new UniqueEntityID(createProps.id.toString(), snowflakeID);
    const props: CreateDappProps = { ...createProps };
    const dapp = new DappEntity({ id, props });

    // Đảm bảo rằng metadata có đầy đủ thông tin
    const metadata = {
      timestamp: Date.now(),
      correlationId: undefined, // Bạn có thể thêm correlationId nếu cần
      causationId: undefined, // Bạn có thể thêm causationId nếu cần
      userId: undefined, // Nếu có userId thì thêm vào đây
    };

    // Tạo và thêm sự kiện DappCreatedDomainEvent
    const event = new DappCreatedDomainEvent({
      aggregateId: id, // Đảm bảo rằng aggregateId được truyền vào
      ...props, // Bao gồm các thuộc tính của DappDomain
      _metadata: metadata, // Đảm bảo rằng metadata được truyền vào
    });

    dapp.addEvent(event); // Thêm sự kiện vào danh sách sự kiện của AggregateRoot

    // Phát hành sự kiện
    dapp.publishEvents(logger, emitter);
    return dapp;
  }
  validate(): void {}
}

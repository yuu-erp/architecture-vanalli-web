import { DomainEvent, IDomainEvent } from "@src/core/domain";
import { DappType, type IDappCreatedDE } from "../entities";
import { DappMetadata } from "../value-objects/dapp-metadata.value-object";

export class DappCreatedDomainEvent
  extends DomainEvent
  implements IDappCreatedDE
{
  name: string;
  logo: string;
  type: DappType;
  url: string;
  metadata?: DappMetadata;

  constructor(props: IDomainEvent<DappCreatedDomainEvent>) {
    super(props);
    this.name = props.name;
    this.logo = props.logo;
    this.type = props.type;
    this.url = props.url;
    this.metadata = props.metadata;
  }
}

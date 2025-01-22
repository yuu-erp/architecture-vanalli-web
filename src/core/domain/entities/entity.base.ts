import {
  ArgumentInvalidException,
  ArgumentNotProvidedException,
  ArgumentOutOfRangeException,
} from "../../exceptions/exceptions";
import { invariant, isEmpty } from "../../helpers";
import { UniqueEntityID } from "./unique-entity";

interface BaseEntityProps {
  id: UniqueEntityID;
  createdAt: Date;
  updatedAt: Date;
}

// Thay thế MarkOptional bằng Partial
export interface CreateEntityProps<T> {
  id: UniqueEntityID;
  props: T;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class Entity<Props> {
  #id: UniqueEntityID;
  readonly #createdAt: Date;
  readonly #props: Props;
  #updatedAt: Date;

  constructor({ id, props, createdAt, updatedAt }: CreateEntityProps<Props>) {
    this.#id = id;
    this.#validateProps(props);
    const now = new Date();
    this.#createdAt = createdAt || now;
    this.#updatedAt = updatedAt || now;
    this.#props = props;
    this.validate();
  }

  static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  get id(): UniqueEntityID {
    return this.#id;
  }

  get createdAt(): Date {
    return this.#createdAt;
  }

  get updatedAt(): Date {
    return this.#updatedAt;
  }

  getProps(): Props & BaseEntityProps {
    const clone = {
      id: this.id,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...this.#props,
    };
    return Object.freeze(clone);
  }

  /**
   * Convert an Entity and all sub-entities/Value Objects it
   * contains to a plain object with primitive types. Can be
   * useful when logging an entity during testing/debugging
   */
  toObject() {
    const clone = this.convertPropsToObject(this.getProps());

    const result = {
      id: this.id,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...clone,
    };
    return Object.freeze(result);
  }

  /**
   * Each entity must have some validate/business rules
   * This method is called every time before save this entity to the database
   */
  abstract validate(): void;

  #validateProps(props: Props) {
    const MAX_PROPS = 32;
    invariant(
      !isEmpty(props),
      new ArgumentNotProvidedException("Entity props should not be empty")
    );
    invariant(
      typeof props === "object",
      new ArgumentInvalidException("Entity props should be an object")
    );
    invariant(
      Object.keys(props as any).length <= MAX_PROPS,
      new ArgumentOutOfRangeException(
        `The entity props count must smaller than ${MAX_PROPS} properties`
      )
    );
  }

  // Thay thế convertPropsToObject
  convertPropsToObject(props: any): any {
    return props; // Hoặc bạn có thể thêm logic để chuyển đổi các thuộc tính phức tạp thành đối tượng thuần
  }
}

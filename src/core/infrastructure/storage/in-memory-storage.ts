import { StoragePort } from "./storage.port";

export class InMemoryStorage<T extends Record<string, any> = any>
  implements StoragePort<T>
{
  private variables: Map<keyof T, T[keyof T]>;

  constructor() {
    this.variables = new Map();
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this.variables.set(key, value);
  }

  setAll(data: T): void {
    Object.entries(data).forEach(([key, value]) => {
      this.variables.set(key as keyof T, value);
    });
  }

  get<K extends keyof T>(key: K): T[K] | null {
    return this.variables.get(key) as T[K] | null;
  }

  remove<K extends keyof T>(key: K): void {
    this.variables.delete(key);
  }

  clear(): void {
    this.variables.clear();
  }

  getAll(): T {
    const result = {} as T;
    this.variables.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
}

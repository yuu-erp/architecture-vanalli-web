export function invariant(condition: boolean, error: Error): void {
  if (!condition) {
    throw error;
  }
}
export function isEmpty(obj: unknown): boolean {
  if (obj == null) return true;
  if (typeof obj === "object") {
    return Object.keys(obj).length === 0;
  }
  return !obj;
}

export const fulfilledPromises = <T extends Promise<any>>(promises: T[]) =>
  Promise.allSettled(promises).then((results) =>
    results
      .filter((result) => result.status === "fulfilled")
      .map((result) => (result as PromiseFulfilledResult<Awaited<T>>).value)
  );

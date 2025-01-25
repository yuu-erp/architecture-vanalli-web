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

export const useResponsiveValue = <T extends number | string>(
  breakpoints: Record<number, T>,
  defaultValue: T
) => {
  const sortedBreakpoints = Object.keys(breakpoints)
    .map(Number)
    .sort((a, b) => b - a);

  for (const breakpoint of sortedBreakpoints) {
    if (innerWidth >= breakpoint) {
      return breakpoints[breakpoint];
    }
  }

  return defaultValue;
};

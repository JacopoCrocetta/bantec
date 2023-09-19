export namespace RepositoryCommons {
  export type SortOrder = "asc" | "desc";

  export interface DataWithTotalItems<T> {
    totalItems: number;
    data: T[];
  }

  type SortBy = `${string}:${SortOrder}`;
  export const buildOrderByCondition = (
    input: SortBy[]
  ): Record<string, SortOrder>[] =>
    input
      .map((item) => item.split(":"))
      .map((pair) => Object.fromEntries([pair]));
}

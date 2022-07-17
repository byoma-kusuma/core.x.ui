import { isObject, isPlainObject } from "lodash";
import React from "react";
import { DataSchema, FilterSchema } from ".";

export default class CoolTableFns {
  public static stringifyDatum(relatedDatum: unknown) {
    if (typeof relatedDatum === "string") {
      return (relatedDatum as string).toLowerCase();
    }
    if (typeof relatedDatum === "boolean" || typeof relatedDatum === "number") {
      return relatedDatum.toString().toLowerCase();
    }
    if (relatedDatum instanceof Date) {
      return relatedDatum.toISOString();
    }
    if (isPlainObject(relatedDatum)) {
      try {
        return JSON.stringify(relatedDatum);
      } catch (e) {
        return "";
      }
    }
    return "";
  }

  public static applyFilter<T>(
    data: Array<T>,
    filterSchema: Array<FilterSchema<T>> | undefined,
    tab: number | null
  ) {
    if (tab === null || !filterSchema) return data;
    try {
      return filterSchema[tab].filterFn(data);
    } catch (e) {
      console.error("Couldnt apply filter! Something went wrong.");
      return data;
    }
  }

  public static applyPagination<T>(
    data: Array<T>,
    page: number,
    pageSize: number
  ) {
    return data.slice(page * pageSize, pageSize + page * pageSize);
  }

  public static applySort<T>(
    data: Array<T>,
    orderBy: keyof T,
    order: "asc" | "desc"
  ) {
    return data.slice().sort((a, b) => {
      if (a[orderBy] > b[orderBy]) {
        if (order === "asc") return 1;
        if (order === "desc") return -1;
      }
      if (a[orderBy] < b[orderBy]) {
        if (order === "asc") return -1;
        if (order === "desc") return 1;
      }
      return 0;
    });
  }

  public static applySearch<T>(
    data: Array<T>,
    dataSchema: Array<DataSchema<T>>,
    searchQuery: string
  ) {
    if (!searchQuery) return data;

    // generates an array of data rows where all column values are concatenated
    // eg. if data = [{a: "1", c: false, d: "hi"}, {a: "2", c: true, d: "hello"}]
    // then result = ["1falsehi", "2truehello"]
    const createSearchIndexes = () =>
      data
        .flatMap((datum) =>
          dataSchema
            .map((schema) => schema.id)
            .filter((k): k is keyof T => k !== "opt1" && k !== "opt2")
            .map((key) => CoolTableFns.stringifyDatum(datum[key] as unknown))
            .join("")
        )
        .map((searchIndex, i) => ({ index: i, indexdValue: searchIndex }));

    // returns the row from data from which the searchquery matches
    return createSearchIndexes()
      .filter((el) => el.indexdValue.includes(searchQuery.toLowerCase()))
      .map((indexed) => data.at(indexed.index))
      .filter(Boolean) as Array<T>;
  }

  public static getHeaderCells<T>(
    dataSchema: Array<DataSchema<T>>
  ): Array<Omit<DataSchema<T>, "formatter">> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return dataSchema.map(({ formatter, ...rest }) => rest);
  }

  public static getRowCellContent<T>(
    dataSchema: Array<DataSchema<T>>,
    key: keyof T | "opt1" | "opt2",
    row: T,
    filteredDataRow: Partial<T>
  ) {
    // in case where formatter is given through dataSchema
    const contentFormatterContainer = dataSchema.find(
      (schemaItem) => schemaItem.id === key
    );
    if (contentFormatterContainer?.formatter) {
      try {
        return contentFormatterContainer.formatter(row);
      } catch (e) {
        return `Invalid formatter for ${key.toString()}`;
      }
    }
    // in case where formatter is not provided
    const content = filteredDataRow[key as keyof Partial<T>] as
      | null
      | Record<string, unknown>
      | undefined;
    if (!React.isValidElement(content) && isObject(content)) {
      console.error(`Cool table error on key ${key.toString()}`, {
        [key]: content
      });
      return (
        <>
          Invalid content detected for key -<b>{key.toString()}</b>. Received
          type
          {` ${typeof content}`}
        </>
      );
    }
    return content as React.ReactNode;
  }
}

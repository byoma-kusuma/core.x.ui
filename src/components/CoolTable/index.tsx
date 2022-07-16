import * as React from "react";
import {
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from "@mui/material";
import Scrollbar from "../Scrollbar";
import { isPlainObject, pick } from "lodash";
import DataNotFound from "../DataNotFound";
import Spinner from "../Spinner";

interface DataSchema<T> {
  id: keyof T | "opt1" | "opt2";
  headerLabel: string | JSX.Element;
  alignRight?: boolean;
  formatter?: (r: T) => React.ReactNode;
}

interface CoolTableProps<T> {
  data: Array<T>;
  dataSchema: Array<DataSchema<T>>;
  defaultOrderKey: keyof T;
  loading: boolean;
  defaultOrderDirection: "asc" | "desc";
  onRequestSort: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    prop: keyof T,
    dir: "asc" | "desc"
  ) => void;
  onRequestSelection: (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedIds: Array<string>
  ) => void;
}

function getHeaderCells<T>(
  dataSchema: Array<DataSchema<T>>
): Array<Omit<DataSchema<T>, "formatter">> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return dataSchema.map(({ formatter, ...rest }) => rest);
}

function getRowCellContent<T>(
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
      return `Invalid formatter for ${key as string}`;
    }
  }
  // in case where formatter is not provided
  const content = filteredDataRow[key as keyof Partial<T>] as
    | null
    | Record<string, unknown>
    | undefined;
  if (!React.isValidElement(content) && isPlainObject(content)) {
    console.error(content);
    return (
      <>
        Invalid content detected for key -<b>{key as string}</b>. Received type
        object.
      </>
    );
  }
  return content as React.ReactNode;
}

export default function CoolTable<T extends { id: string }>(
  props: CoolTableProps<T>
) {
  const {
    onRequestSort,
    onRequestSelection,
    defaultOrderDirection,
    defaultOrderKey,
    loading,
    data,
    dataSchema
  } = props;

  const headers = React.useMemo(() => getHeaderCells(dataSchema), [dataSchema]);

  const [orderBy, setOrderBy] = React.useState<keyof T>(defaultOrderKey);
  const [order, setOrder] = React.useState<"asc" | "desc">(
    defaultOrderDirection
  );
  const [selectedRows, setSelectedRows] = React.useState<Array<string>>([]);

  const createSortHandler =
    (property: keyof T | "opt1" | "opt2") =>
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (property === "opt1") return;
      if (property === "opt2") return;
      const isAsc = orderBy === property && order === "asc";
      const nextOrder = isAsc ? "desc" : "asc";
      setOrder(nextOrder);
      setOrderBy(property);
      onRequestSort(event, property, nextOrder);
    };

  const createSelectionHandler =
    (id: string | "_all") => (event: React.ChangeEvent<HTMLInputElement>) => {
      // executes when header checkbox is changed
      if (id === "_all") {
        if (event.target.checked) {
          const updatedSelection = data.map((datum) => datum.id);
          setSelectedRows(updatedSelection);
          onRequestSelection(event, updatedSelection);
        } else {
          setSelectedRows([]);
          onRequestSelection(event, []);
        }
        return;
      }
      // executes when other checkboxes are changed
      const isCurrentlySelected = selectedRows.includes(id);
      if (isCurrentlySelected) {
        const updatedSelection = selectedRows.filter((row) => row !== id);
        setSelectedRows(updatedSelection);
        onRequestSelection(event, updatedSelection);
      } else {
        const updatedSelection = [...selectedRows, id];
        setSelectedRows(updatedSelection);
        onRequestSelection(event, updatedSelection);
      }
    };

  return (
    <Card>
      <Scrollbar>
        <TableContainer sx={{ minWidth: 800, maxHeight: "400px" }}>
          <Table stickyHeader>
            {/* header section */}
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < data.length
                    }
                    checked={
                      selectedRows.length > 0 &&
                      selectedRows.length === data.length
                    }
                    onChange={createSelectionHandler("_all")}
                  />
                </TableCell>
                {headers.map((headerCell) => (
                  <TableCell
                    key={headerCell.id as string}
                    align={headerCell.alignRight ? "right" : "left"}
                    sortDirection={orderBy === headerCell.id ? order : false}
                  >
                    <TableSortLabel
                      hideSortIcon
                      active={orderBy === headerCell.id}
                      direction={orderBy === headerCell.id ? order : "asc"}
                      onClick={createSortHandler(headerCell.id)}
                    >
                      {headerCell.headerLabel}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* body section */}
            {loading ? (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={12} sx={{ py: 3 }}>
                    <Spinner
                      optionalNode={
                        <Typography variant="body2">
                          Data is being fetched from the server! Please wait!
                        </Typography>
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {data.map((row) => {
                  const { id } = row;
                  const isItemSelected = selectedRows.includes(id);
                  const headerKeysToRenderInOrder = headers.map(
                    (header) => header.id
                  );
                  const filteredDataRow = pick(row, headerKeysToRenderInOrder);
                  return (
                    <TableRow
                      hover
                      key={id}
                      tabIndex={-1}
                      role="checkbox"
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={createSelectionHandler(id)}
                        />
                      </TableCell>
                      {headerKeysToRenderInOrder.map((key) => {
                        const content = getRowCellContent<T>(
                          dataSchema,
                          key,
                          row,
                          filteredDataRow
                        );
                        return (
                          <TableCell key={key as string}>{content}</TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            )}

            {/* utilities section */}
            {!loading && data.length === 0 && (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={12} sx={{ py: 3 }}>
                    <DataNotFound />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}

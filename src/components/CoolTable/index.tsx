import * as React from "react";
import {
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
} from "@mui/material";
import Scrollbar from "../Scrollbar";
import { pick } from "lodash";
import DataNotFound from "../CoolTableNoData";
import CoolTableToolbar from "../CoolTableToolbar";
import CoolTableFns from "./CoolTableFns";

export interface DataSchema<T> {
  id: keyof T | "opt1" | "opt2";
  headerLabel: string | JSX.Element;
  alignRight?: boolean;
  formatter?: (r: T) => React.ReactNode;
  placeholder?: string | JSX.Element;
}

export interface FilterSchema<T> {
  id: number;
  label: string | JSX.Element;
  filterFn: (data: Array<T>) => Array<T>;
}

interface CoolTableProps<T> {
  data: Array<T>;
  dataSchema: Array<DataSchema<T>>;
  defaultOrderKey: keyof T;
  loading: boolean;
  error: string;
  defaultOrderDirection: "asc" | "desc";
  filterSchema?: Array<FilterSchema<T>>;
  onRequestSort?: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    prop: keyof T,
    dir: "asc" | "desc"
  ) => void;
  onRequestSelection?: (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedIds: Array<string>
  ) => void;
  onSelectActionButtonClick: (selectedDataIds: Array<string>) => void;
  onRequestSearch?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    v: string
  ) => void;
  tableHeight?: string;
}

export default function CoolTable<T extends { id: string }>(
  props: CoolTableProps<T>
) {
  const {
    onRequestSort = () => undefined,
    onRequestSelection = () => undefined,
    onRequestSearch = () => undefined,
    onSelectActionButtonClick,
    defaultOrderDirection,
    defaultOrderKey,
    loading,
    error,
    filterSchema,
    data,
    dataSchema,
    tableHeight
  } = props;

  const headers = React.useMemo(
    () => CoolTableFns.getHeaderCells(dataSchema),
    [dataSchema]
  );

  const [orderBy, setOrderBy] = React.useState<keyof T>(defaultOrderKey);
  const [order, setOrder] = React.useState<"asc" | "desc">(
    defaultOrderDirection
  );
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedRows, setSelectedRows] = React.useState<Array<string>>([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [page, setPage] = React.useState(0);
  const [filterTab, setFilterTab] = React.useState<number | null>(
    (filterSchema || []).length ? 0 : null
  );

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
    (
      id: string | "_all" | "_allFiltered",
      currentTableData: Array<T>,
      unpaginatedTableData: Array<T>
    ) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const handleUpdate = (updatedSelection: Array<string>) => {
        setSelectedRows(updatedSelection);
        onRequestSelection(event, updatedSelection);
      };
      // when select everything is checked
      if (id === "_allFiltered") {
        if (event.target.checked) {
          handleUpdate(unpaginatedTableData.map((datum) => datum.id));
        } else {
          handleUpdate([]);
        }
        return;
      }
      // executes when table header checkbox is changed
      if (id === "_all") {
        if (currentTableData.some((datum) => selectedRows.includes(datum.id))) {
          handleUpdate(
            selectedRows.filter(
              (row) => !currentTableData.find((datum) => datum.id === row)
            )
          );
        } else {
          handleUpdate([
            ...selectedRows,
            ...currentTableData.map((datum) => datum.id)
          ]);
        }
        return;
      }
      // executes when other checkboxes are changed
      if (selectedRows.includes(id)) {
        handleUpdate(selectedRows.filter((row) => row !== id));
      } else {
        handleUpdate([...selectedRows, id]);
      }
    };

  const unpaginatedTableData = React.useMemo(
    () =>
      CoolTableFns.applySort(
        CoolTableFns.applySearch(
          CoolTableFns.applyFilter(data, filterSchema, filterTab),
          dataSchema,
          searchQuery
        ),
        orderBy,
        order
      ),
    [data, dataSchema, searchQuery, order, orderBy, filterSchema, filterTab]
  );

  const tableData = React.useMemo(
    () => CoolTableFns.applyPagination(unpaginatedTableData, page, rowsPerPage),
    [unpaginatedTableData, page, rowsPerPage]
  );

  return (
    <Card
      sx={(theme) => ({
        border: `1px solid ${theme.palette.grey[500_16]}`
      })}
    >
      <CoolTableToolbar<T>
        selectedCount={selectedRows.length}
        totalCount={data.length}
        onSelectActionButtonClick={() =>
          onSelectActionButtonClick(selectedRows)
        }
        searchQuery={searchQuery}
        onSearch={(e, v) => {
          setSearchQuery(v);
          setPage(0);
          onRequestSearch(e, v);
        }}
        onSelectToggle={createSelectionHandler(
          "_allFiltered",
          tableData,
          unpaginatedTableData
        )}
        filterSchema={{
          onTabChange: (v) => setFilterTab(v),
          tab: filterTab,
          schema: filterSchema
        }}
      />
      <Scrollbar>
        <TableContainer
          sx={{ minWidth: 800, maxHeight: tableHeight || "360px" }}
        >
          <Table stickyHeader>
            {/* header section */}
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < data.length &&
                      tableData.some((datum) => selectedRows.includes(datum.id))
                    }
                    checked={
                      selectedRows.length > 0 &&
                      selectedRows.length === data.length
                    }
                    onChange={createSelectionHandler(
                      "_all",
                      tableData,
                      unpaginatedTableData
                    )}
                  />
                </TableCell>
                {headers.map((headerCell) => (
                  <TableCell
                    key={headerCell.id.toString()}
                    align={headerCell.alignRight ? "right" : "left"}
                    sortDirection={orderBy === headerCell.id ? order : false}
                    sx={(theme) => ({ padding: theme.spacing(1) })}
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
            {!loading && (
              <TableBody>
                {tableData.map((row) => {
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
                          onChange={createSelectionHandler(
                            id,
                            tableData,
                            unpaginatedTableData
                          )}
                        />
                      </TableCell>
                      {headerKeysToRenderInOrder.map((key) => {
                        const { content, align } =
                          CoolTableFns.getRowCellContent<T>(
                            dataSchema,
                            key,
                            row,
                            filteredDataRow
                          );
                        return (
                          <TableCell
                            key={key.toString()}
                            sx={(theme) => ({
                              padding: theme.spacing(1)
                            })}
                            align={align}
                          >
                            {content}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            )}

            {/* utilities section */}
            <DataNotFound
              searchQuery={searchQuery}
              noData={data.length === 0}
              noSearchData={tableData.length === 0}
              loading={loading}
              error={error}
            />
          </Table>
        </TableContainer>
      </Scrollbar>
      <TablePagination
        rowsPerPageOptions={[5, 25, 50]}
        component="div"
        count={unpaginatedTableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, v) => setPage(v)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </Card>
  );
}

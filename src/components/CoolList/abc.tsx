import * as React from "react";
import {
  Avatar,
  Card,
  Checkbox,
  Stack,
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
import Label from "../Label";

interface Header<T> {
  id: string;
  label?: string;
  alignRight?: boolean;
  formatter?: (h: Array<T>) => React.ReactNode;
}

interface CoolListProps<T> {
  headers: Array<Header<T>>;
  data: Array<T>;
  defaultOrderKey: string;
  defaultOrderDirection: "asc" | "desc";
  onRequestSort: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    prop: string,
    dir: "asc" | "desc"
  ) => void;
  onRequestSelection: (
    e: React.ChangeEvent<HTMLInputElement>,
    selectedIds: Array<string>
  ) => void;
}

export default function CoolListA<T extends { id: string }>(
  props: CoolListProps<T>
) {
  const {
    headers,
    onRequestSort,
    onRequestSelection,
    defaultOrderDirection,
    defaultOrderKey,
    data
  } = props;

  const [orderBy, setOrderBy] = React.useState<string>(defaultOrderKey);
  const [order, setOrder] = React.useState<"asc" | "desc">(
    defaultOrderDirection
  );
  const [selectedRows, setSelectedRows] = React.useState<Array<string>>([]);

  const createSortHandler =
    (property: string) =>
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const isAsc = orderBy === property && order === "asc";
      const nextOrder = isAsc ? "desc" : "asc";
      setOrder(nextOrder);
      setOrderBy(property);
      onRequestSort(event, property, nextOrder);
    };

  const createSelectionHandler =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                {headers.map((headerCell) => (
                  <TableCell
                    key={headerCell.id}
                    align={headerCell.alignRight ? "right" : "left"}
                    sortDirection={orderBy === headerCell.id ? order : false}
                  >
                    <TableSortLabel
                      hideSortIcon
                      active={orderBy === headerCell.id}
                      direction={orderBy === headerCell.id ? order : "asc"}
                      onClick={createSortHandler(headerCell.id)}
                    >
                      {headerCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row) => {
                const { id } = row;
                const isItemSelected = selectedRows.includes(id);
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
                    <TableCell component="th" scope="row" padding="none">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src="/static/mock-images/avatars/avatar_default.jpg" />
                        <Typography variant="subtitle2" noWrap>
                          Hello world
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="left">Random Data</TableCell>
                    <TableCell align="left">Random Data</TableCell>
                    <TableCell align="left">es</TableCell>
                    <TableCell align="left">
                      <Label type="rounded" label="hell" />
                    </TableCell>
                    <TableCell align="right">
                      w{/* <UserMoreMenu /> */}
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
    </Card>
  );
}

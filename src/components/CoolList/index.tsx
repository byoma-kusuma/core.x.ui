import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel
} from "@mui/material";
import * as React from "react";

interface ListHeaderProps {
  order: "asc" | "desc";
  orderBy: string;
  rowCount: number;
  headLabel: Array<any>;
  numSelected: number;
  onRequestSort: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    p: string | number
  ) => void;
  onSelectAllClick: () => void;
}

export function UserListHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onSelectAllClick
}: ListHeaderProps) {
  const createSortHandler =
    (property: string | number) =>
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function CoolList() {
  return <div></div>;
}

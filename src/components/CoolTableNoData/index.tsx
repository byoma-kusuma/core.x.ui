import * as React from "react";
import {
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from "@mui/material";
import Spinner from "../Spinner";

interface DataNotFoundProps {
  searchQuery: string;
  noData: boolean;
  noSearchData: boolean;
  loading: boolean;
}

export default function DataNotFound(props: DataNotFoundProps) {
  const { searchQuery, noData, noSearchData, loading } = props;
  if (!noData && !noSearchData && !loading) return null;
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={12} sx={{ py: 3 }}>
          {loading ? (
            <Spinner
              optionalNode={
                <Typography variant="body2">
                  Data is being fetched from the server! Please wait!
                </Typography>
              }
            />
          ) : (
            <Paper>
              <Typography gutterBottom align="center" variant="subtitle1">
                No data Found!
              </Typography>
              {noSearchData && !noData && (
                <Typography variant="body2" align="center">
                  No results found for &nbsp;
                  <strong>&quot;{searchQuery}&quot;</strong>. Try checking for
                  typos or using complete words.
                </Typography>
              )}
              {noData && (
                <Typography variant="body2" align="center">
                  No results found. Try adding data or reloading the page.
                </Typography>
              )}
            </Paper>
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

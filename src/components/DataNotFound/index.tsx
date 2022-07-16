import * as React from "react";
import { Paper, Typography } from "@mui/material";

interface DataNotFoundProps {
  searchQuery?: string;
}

export default function DataNotFound(props: DataNotFoundProps) {
  const { searchQuery } = props;
  return (
    <Paper>
      <Typography gutterBottom align="center" variant="subtitle1">
        No data Found!
      </Typography>
      {searchQuery ? (
        <Typography variant="body2" align="center">
          No results found for &nbsp;
          <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
          using complete words.
        </Typography>
      ) : (
        <Typography variant="body2" align="center">
          No results found. Try adding data or reloading the page.
        </Typography>
      )}
    </Paper>
  );
}

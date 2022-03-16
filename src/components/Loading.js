import { CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function Loading({ error }) {
  return (
    <div>
      <Typography color={"white"} variant="h5">
        {error ? `Error: ${error}` : "Content loading..."}
      </Typography>
      <CircularProgress />
    </div>
  );
}

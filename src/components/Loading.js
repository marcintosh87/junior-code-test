import { CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div>
      <Typography>Content loading...</Typography>
      <CircularProgress />
    </div>
  );
}

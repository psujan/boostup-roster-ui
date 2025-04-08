import React from "react";
import BaseLayout from "./BaseLayout";
import { Box, Pagination } from "@mui/material";
const Paginate = ({ count, page, onPageChange }) => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Pagination
        count={count}
        page={page}
        onChange={(event, value) => onPageChange(value)}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default Paginate;

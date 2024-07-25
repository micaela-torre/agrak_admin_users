import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ColumnDef,
  MRT_RowData,
} from "material-react-table";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@chakra-ui/react";
import { LOCALIZATION } from "../../constants/localization";
import { themeOptions } from "../../themeStyles/theme";

type TableData<T> = T[];

type TableProps<T extends MRT_RowData> = {
  columns: MRT_ColumnDef<T>[];
  data?: TableData<T>;
};

export const CustomTable = <T extends MRT_RowData>({
  columns,
  data = [],
}: TableProps<T>) => {
  const customTheme = createTheme(themeOptions);
  const customSelectStyle = {
    root: {
      color: "#b4aeae",
      border: "1px solid #b4aeae",
    },
  };

  const materialColumns: MRT_ColumnDef<T>[] = useMemo(
    () =>
      columns.map((column) => ({
        ...column,
        accessorKey: column.accessorKey as string,
        header: column.header,
        Cell: column.Cell,
        muiTableHeadCellProps: {
          sx: {
            maxWidth: "100px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            fontWeight: "400",
            p: "10px 30px",
          },
        },
        muiTableBodyCellProps: {
          sx: {
            backgroundColor: "#000",
            color: "#fff",
            borderBottom: "1px solid white",
            p: "10px 30px",
            maxWidth: "100px",
          },
        },
      })),
    [columns]
  );

  const table = useMaterialReactTable<any>({
    columns: materialColumns as MRT_ColumnDef<any, any>[],
    data,
    initialState: { showColumnFilters: true, density: "compact" },
    editDisplayMode: "modal",
    enableEditing: false,
    columnFilterDisplayMode: "popover",
    enableFacetedValues: true,
    enableTopToolbar: false,
    enableColumnActions: false,
    localization: LOCALIZATION,
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: "10px",
        maxWidth: "90%",
        margin: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        "& .MuiTablePagination-root": {
          display: "none",
        },
        "& .MuiBox-root.css-10gei56": {
          backgroundColor: "transparent",
        },
      },
    },
    muiPaginationProps: {
      rowsPerPageOptions: [],
      showRowsPerPage: false,
      showFirstButton: false,
      showLastButton: false,
    },
    renderBottomToolbarCustomActions: ({ table }) => (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        width="100%"
      >
        <Button
          bg="#000"
          color="white"
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          <ArrowBack />
        </Button>
        <Box
          mx={1}
          border="1px solid #000"
          px={3}
          color="#000"
          fontWeight="bold"
        >
          {table.getState().pagination.pageIndex + 1}
        </Box>
        <Button
          bg="#000"
          color="white"
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          <ArrowForward />
        </Button>
        <Box ml={2} px={2} bgcolor="#000" color="white">
          {table.getPageCount()}
        </Box>
      </Box>
    ),
  });

  return (
    <Box sx={{ width: "100%" }}>
      <ThemeProvider
        theme={{
          ...customTheme,
          components: {
            ...customTheme.components,
            MuiSelect: {
              styleOverrides: customSelectStyle,
            },
          },
        }}
      >
        <MaterialReactTable table={table} />
      </ThemeProvider>
    </Box>
  );
};

export default CustomTable;

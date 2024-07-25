// @ts-nocheck

import { Avatar } from "@mui/material";
import { TooltipCustom } from "../TooltipCustom/TooltipCustom";
import { Box, Button } from "@chakra-ui/react";
import { BiShow, BiSolidPencil, BiTrash } from "react-icons/bi";

export const getColumnsUsers = ({ handleClickRow }) => [
  {
    accessorKey: "avatar",
    header: "Avatar",
    enableSorting: false,
    enableColumnFilter: false,
    Cell: ({ cell }) => <Avatar size="xs" src={cell.getValue()} />,
  },

  {
    accessorKey: "first_name",
    header: "First Name",
  },
  { accessorKey: "second_name", header: "Second Name" },

  { accessorKey: "email", header: "Email" },

  {
    accessorKey: "actions",
    header: "",
    enableSorting: false,
    enableColumnFilter: false,
    Cell: ({ row }: { row: any }) => (
      <Box display="flex" alignItems="center" gap={2}>
        <TooltipCustom label="Delete user">
          <Button sx={{ minWidth: "15px" }}>
            <BiTrash onClick={() => handleClickRow(row.original, "delete")} />
          </Button>
        </TooltipCustom>
        <TooltipCustom label="Edit user">
          <Button sx={{ minWidth: "15px" }}>
            <BiSolidPencil
              onClick={() => handleClickRow(row.original, "edit")}
            />
          </Button>
        </TooltipCustom>
        <TooltipCustom label="Show user details">
          <Button sx={{ minWidth: "15px" }}>
            <BiShow onClick={() => handleClickRow(row.original, "show")} />
          </Button>
        </TooltipCustom>
      </Box>
    ),
  },
];

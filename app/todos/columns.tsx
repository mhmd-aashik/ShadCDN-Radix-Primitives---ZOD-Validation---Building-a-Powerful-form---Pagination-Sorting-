"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "userId",
    header: "user Id",
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: ({ row }) => <div>{row.getValue("completed") ? "✅" : "❌"} </div>,
  },
];

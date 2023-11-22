import next from "next";
import { Todo, columns } from "./columns";
import { DataTable } from "./data-table";

export default async function DemoPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 1 },
  });
  const json = await data.json();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={json} />
    </div>
  );
}

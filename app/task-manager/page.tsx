import AddTask from "@/components/addTask";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Manager for TaskT.",
};
export default function TaskManager() {
  return (
    <div className="mx-auto p-24">
      <Link href="/">
        <h1 className="mb-4 text-4xl font-bold">{">"} Add New Task! 🥙</h1>
      </Link>
      <div className="col-span-full">
        <AddTask />
      </div>
    </div>
  );
}

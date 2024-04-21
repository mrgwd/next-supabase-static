import Tasks from "@/components/tasks";
import Link from "next/link";

export default function Home() {
  return (
    // <TasksProvider>
    <main className="fleex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-4xl font-bold">Tasks 🍕</h1>
        <Link
          href="/task-manager"
          className="inline-block rounded-lg bg-slate-200 px-2 py-1 hover:bg-gray-300"
        >
          Add Task
        </Link>
      </div>
      <Tasks />
    </main>
    // </TasksProvider>
  );
}

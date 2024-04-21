"use client";
import { TaskInterface } from "@/interfaces/appInterfaces";
import { supabase } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<"low" | "med" | "high">("med");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title) return;
    const newTask: TaskInterface = {
      title,
      description,
      priority,
      is_completed: false,
    };
    const { data, error } = await supabase.from("tasks").insert(newTask);
    // handleAddTask(newTask);
    console.log("-> data", data, error);
    clearForm();
    router.push("/");
    router.refresh();
  };
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("med");
  };
  return (
    // <TasksProvider>
    <form className="flex flex-col gap-4 rounded-lg border-2 border-gray-600 p-4">
      <div>
        <label htmlFor="title">Task Name</label>
        <input
          type="text"
          name="title"
          id="new-task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg bg-gray-200 p-1"
        />
      </div>
      <div>
        <label htmlFor="description">Details</label>
        <textarea
          name="description"
          id="new-task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg bg-gray-200 p-1"
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="new-task-priority"
          className="w-full rounded-lg bg-gray-200 p-1"
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "low" | "med" | "high")
          }
        >
          <option value="low">Low</option>
          <option value="med">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        className="text-nowrap rounded-lg bg-gray-600 p-1 text-white"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </form>
    // </TasksProvider>
  );
}

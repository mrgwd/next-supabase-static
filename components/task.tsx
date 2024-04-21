"use client";
// import useTasksProvider from "@/hooks/useTasksProvider";
import { useState } from "react";

interface TaskProps {
  id: string | undefined;
  title: string;
  description?: string;
  priority?: "low" | "med" | "high";
  is_completed?: boolean;
  date?: string;
  // err: any;
  tasks: any;
}
export default function Task({
  id,
  title,
  description,
  priority = "med",
  is_completed = false,
  date,
  // err,
  tasks,
}: TaskProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(is_completed);
  // console.log("-> Error", err);
  console.log("-> Tasks", tasks);
  console.log(is_completed);
  // const handleDeleteTask = async () => {
  //   console.log("-> handleDeleteTask RAN");
  //   try {
  //     const res = await fetch(`http://localhost:3000/api/tasks/${_id}`, {
  //       method: "DELETE",
  //     });
  //     if (res.ok) {
  //       console.log("Task deleted");
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  return (
    <div
      className={`rounded-lg ${priority === "high" ? "bg-red-100 text-red-900" : priority === "med" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-900"} p-4`}
    >
      <div className="flex justify-between">
        <div>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted((prevState) => !prevState)}
            name="taskState"
            id={id}
          />
          <label
            htmlFor={id}
            className={`ml-2 cursor-pointer select-none text-xl font-medium ${isCompleted && "italic line-through"}`}
          >
            {title}
          </label>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </button>
          <button /*onClick={handleDeleteTask}*/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="mt-2 text-sm text-black/60">{description}</p>
      <p className="mt-2 text-sm italic">
        {new Date(date || new Date()).toLocaleString()}
      </p>
    </div>
  );
}

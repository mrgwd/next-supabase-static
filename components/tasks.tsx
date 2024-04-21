import { TaskInterface } from "@/interfaces/appInterfaces";
import Task from "./task";
import { supabase } from "@/utils/supabase/client";
export default async function Tasks() {
  const getTasks = async () => {
    try {
      const res = await fetch("http://taskitos.netlify.app/api/tasks", {
        cache: "no-store",
      });
      return await res.json();
    } catch (error) {
      console.log("error", error);
    }
  };
  supabase
    .channel("room1")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "tasks" },
      (payload) => {
        console.log("Change received!", payload);
      },
    )
    .subscribe();
  const { tasks, error } = await getTasks();
  console.log("-> Tasks", tasks, error);
  //sort tasks by priority
  tasks?.sort((a: TaskInterface, b: TaskInterface) => {
    if (a.priority === "high") return -1;
    if (a.priority === "med" && b.priority === "low") return -1;
    else return 1;
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!tasks ? (
        <p>Loading...</p>
      ) : (
        tasks.map((task: TaskInterface) => (
          <Task
            tasks={tasks}
            // err={error}
            date={task.created_at}
            id={task.id}
            key={task.id}
            title={task.title}
            description={task.description}
            is_completed={task.is_completed}
            priority={task.priority as "low" | "med" | "high"}
          />
        ))
      )}
    </div>
  );
}

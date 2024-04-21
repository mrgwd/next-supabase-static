export interface TaskInterface {
  id?: string | undefined;
  title: string;
  description?: string;
  priority: "low" | "med" | "high";
  is_completed?: boolean;
  created_at?: string;
}

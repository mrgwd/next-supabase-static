export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: string;
          title: string;
          description: string | null;
        };
        Insert: {
          // the data to be passed to .insert()
          id?: never; // generated columns must not be
          title: string;
          description?: string | null;
        };
        Update: {
          // the data to be passed to .update()
          id?: never;
          title?: string;
          description?: string | null;
          is_completed?: boolean;
        };
      };
    };
  };
}

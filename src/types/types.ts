import { Database } from "./database.types";

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"];
export type InsertTables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Insert"];
export type UpdateTables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Update"];
export type Enums<T extends keyof Database["public"]["Enums"]> = Database["public"]["Enums"][T];

export type Course = Tables<"courses"> | null;
export type Module = Tables<"course_modules"> | null;
export type StudentCourse = Tables<"student_courses"> | null;
export type Courses = Course[] | null;
export type Modules = Module[] | null;
export type StudentCourses = StudentCourse[] | null;

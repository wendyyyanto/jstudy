import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Student = Tables<"students"> | null;

type State = {
    student: Student;
};

type Action = {
    updateStudent: (student: Student) => void;
};

const useStudentContext = create<State & Action>((set) => ({
    student: null,
    updateStudent: (student: Student) => set({ student })
}));

export default useStudentContext;

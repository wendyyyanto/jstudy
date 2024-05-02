import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Student = Tables<"students"> | null;

type State = {
    student: Student;
};

type Action = {
    setStudent: (student: Student) => void;
    resetStudentState: () => void;
};

const initialState: State = {
    student: null
};

const useStudentContext = create<State & Action>((set) => ({
    ...initialState,
    setStudent: (student: Student) => set({ student }),
    resetStudentState: () => {
        set(initialState);
    }
}));

export default useStudentContext;

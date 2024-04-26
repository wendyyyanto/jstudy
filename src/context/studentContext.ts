import { Tables } from "@/types/database.types";
import { create } from "zustand";

type State = {
    student: Tables<"students"> | null;
};

type Action = {
    updateStudent: (student: Tables<"students">) => void;
};

const useStudentContext = create<State & Action>((set) => ({
    student: null,
    updateStudent: (student: Tables<"students">) => set({ student })
}));

export default useStudentContext;

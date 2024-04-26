import { Tables } from "@/types/database.types";
import { create } from "zustand";

type State = {
    student: Tables<"students"> | null;
};

type Action = {
    updateStudent: (user: Tables<"students">) => void;
};

const useStudentContext = create<State & Action>((set) => ({
    student: null,
    updateStudent: (user: Tables<"students">) => set({ student: user })
}));

export default useStudentContext;

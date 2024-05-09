import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Student = Tables<"students"> | null;

type State = {
    student: Student;
    isLeveledUp: boolean;
    isRankedUp: boolean;
};

type Action = {
    setStudent: (student: Student) => void;
    setIsLeveledUp: (isLeveledUp: boolean) => void;
    setIsRankedUp: (isRankedUp: boolean) => void;
    resetStudentState: () => void;
};

const initialState: State = {
    student: null,
    isLeveledUp: false,
    isRankedUp: false
};

const useStudentContext = create<State & Action>((set) => ({
    ...initialState,
    setStudent: (student: Student) => set({ student }),
    setIsLeveledUp: (isLeveledUp: boolean) => set({ isLeveledUp }),
    setIsRankedUp: (isRankedUp: boolean) => set({ isRankedUp }),
    resetStudentState: () => {
        set(initialState);
    }
}));

export default useStudentContext;

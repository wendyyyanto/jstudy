import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Achievement = Tables<"achievements"> | null;

type State = {
    achievement: Achievement;
    achievementModalShown: boolean;
};

type Action = {
    setAchievementModalShown: (achievementModalShown: boolean) => void;
    setAchievement: (achievement: Achievement) => void;
    resetAchievementState: () => void;
};

const initialState: State = {
    achievementModalShown: false,
    achievement: null
};

const useAchievementContext = create<State & Action>((set) => ({
    ...initialState,
    setAchievementModalShown: (achievementModalShown: boolean) => set({ achievementModalShown }),
    setAchievement: (achievement: Achievement) => set({ achievement }),
    resetAchievementState: () => {
        set(initialState);
    }
}));

export default useAchievementContext;

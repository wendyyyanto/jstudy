import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Achievement = Tables<"achievements"> | null;

type State = {
    achievement: Achievement;
    achievementsList: Achievement[] | null;
    achievementModalShown: boolean;
};

type Action = {
    setAchievementModalShown: (achievementModalShown: boolean) => void;
    setAchievementsList: (achievementsList: Achievement[]) => void;
    setAchievement: (achievement: Achievement) => void;
    resetAchievementState: () => void;
};

const initialState: State = {
    achievement: null,
    achievementsList: null,
    achievementModalShown: false
};

const useAchievementContext = create<State & Action>((set) => ({
    ...initialState,
    setAchievementModalShown: (achievementModalShown: boolean) => set({ achievementModalShown }),
    setAchievementsList: (achievementsList: Achievement[]) => set({ achievementsList }),
    setAchievement: (achievement: Achievement) => set({ achievement }),
    resetAchievementState: () => {
        set(initialState);
    }
}));

export default useAchievementContext;

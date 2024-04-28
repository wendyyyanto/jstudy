import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Challenge = Tables<"challenges"> | null;

type State = {
    isConfirmed: boolean;
    isOpened: boolean;
    isCompleted: boolean;
    challenge: Challenge;
};

type Action = {
    setIsConfirmed: (isConfirmed: boolean) => void;
    setIsOpened: (isOpened: boolean) => void;
    setIsCompleted: (isCompleted: boolean) => void;
    setChallenge: (challenge: Challenge) => void;
    resetChallengeState: () => void;
};

const initialState: State = {
    isConfirmed: false,
    isOpened: false,
    isCompleted: false,
    challenge: null
};

const useChallengeContext = create<State & Action>((set) => ({
    ...initialState,
    setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
    setIsOpened: (isOpened: boolean) => set({ isOpened }),
    setIsCompleted: (isCompleted: boolean) => set({ isCompleted }),
    setChallenge: (challenge: Challenge) => set({ challenge }),
    resetChallengeState: () => {
        set(initialState);
    }
}));

export default useChallengeContext;

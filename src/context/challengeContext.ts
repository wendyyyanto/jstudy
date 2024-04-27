import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Challenge = Tables<"challenges"> | null;

type State = {
    isConfirmed: boolean;
    isOpened: boolean;
    challenge: Challenge;
};

type Action = {
    updateIsConfirmed: (isConfirmed: boolean) => void;
    updateIsOpened: (isOpened: boolean) => void;
    updateChallenge: (challenge: Challenge) => void;
    resetChallengeState: () => void;
};

const initialState: State = {
    isConfirmed: false,
    isOpened: false,
    challenge: null
};

const useChallengeContext = create<State & Action>((set) => ({
    ...initialState,
    updateIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
    updateIsOpened: (isOpened: boolean) => set({ isOpened }),
    updateChallenge: (challenge: Challenge) => set({ challenge }),
    resetChallengeState: () => {
        set(initialState);
    }
}));

export default useChallengeContext;

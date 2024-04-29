import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Challenge = Tables<"challenges"> | null;

type State = {
    challenge: Challenge;
    isModalOpened: boolean;
    duration: number;
};

type Action = {
    setIsModalOpened: (isModalOpened: boolean) => void;
    setDuration: (duration: number) => void;
    setChallenge: (challenge: Challenge) => void;
    resetChallengeState: () => void;
};

const initialState: State = {
    isModalOpened: true,
    duration: 0,
    challenge: null
};

const useChallengeContext = create<State & Action>((set) => ({
    ...initialState,
    setIsModalOpened: (isModalOpened: boolean) => set({ isModalOpened }),
    setDuration: (duration: number) => set({ duration }),
    setChallenge: (challenge: Challenge) => set({ challenge }),
    resetChallengeState: () => {
        set(initialState);
    }
}));

export default useChallengeContext;

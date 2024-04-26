import { create } from "zustand";

type State = {
    isConfirmed: boolean;
    isOpened: boolean;
};

type Action = {
    updateIsConfirmed: (isConfirmed: boolean) => void;
    updateIsOpened: (isOpened: boolean) => void;
    resetChallengeState: () => void;
};

const initialState: State = {
    isConfirmed: false,
    isOpened: false
};

const useChallengeContext = create<State & Action>((set) => ({
    ...initialState,
    updateIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed }),
    updateIsOpened: (isOpened: boolean) => set({ isOpened }),
    resetChallengeState: () => {
        set(initialState);
    }
}));

export default useChallengeContext;

import { User } from "@supabase/supabase-js";
import { create } from "zustand";

type State = {
    authUser: User | null;
};

type Action = {
    setAuthUser: (user: User) => void;
};

const initialState: State = {
    authUser: null
};

const useAuthContext = create<State & Action>((set) => ({
    ...initialState,
    setAuthUser: (user: User) => set({ authUser: user })
}));

export default useAuthContext;

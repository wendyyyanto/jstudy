import { User } from "@supabase/supabase-js";
import { create } from "zustand";

type State = {
    authUser: User | null;
    isLoggedIn: boolean;
    token: unknown | null;
};

type Action = {
    setAuthUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setToken: (token: unknown) => void;
};

const initialState: State = {
    authUser: null,
    isLoggedIn: false,
    token: null
};

const useAuthContext = create<State & Action>((set) => ({
    ...initialState,
    setAuthUser: (user: User) => set({ authUser: user }),
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    setToken: (token: unknown) => set({ token })
}));

export default useAuthContext;

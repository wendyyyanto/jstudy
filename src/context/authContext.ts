import { User } from "@supabase/supabase-js";
import { create } from "zustand";

type State = {
    authUser: User | null;
    isLoggedIn: boolean;
};

type Action = {
    setAuthUser: (user: User) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const initialState: State = {
    authUser: null,
    isLoggedIn: false
};

const useAuthContext = create<State & Action>((set) => ({
    ...initialState,
    setAuthUser: (user: User) => set({ authUser: user }),
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn })
}));

export default useAuthContext;

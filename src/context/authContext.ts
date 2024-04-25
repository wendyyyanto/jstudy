import { Tables } from "@/types/database.types";
import { create } from "zustand";

type State = {
    authUser: Tables<"students"> | null;
};

type Action = {
    updateAuthUser: (user: Tables<"students">) => void;
};

const useAuthContext = create<State & Action>((set) => ({
    authUser: null,
    updateAuthUser: (user: Tables<"students">) => set({ authUser: user })
}));

export default useAuthContext;

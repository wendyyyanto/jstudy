import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Course = Tables<"courses"> | null;
type Module = Tables<"course_modules"> | null;
type Courses = Course[] | null;
type Modules = Module[] | null;

type State = {
    course: Course;
    courses: Courses;
    courseModules: Modules;
    currentModule: Module;
};

type Action = {
    setCourse: (couse: Course) => void;
    setCourses: (courses: Courses) => void;
    setCourseModules: (courseModules: Modules) => void;
    setCurrentModule: (currentModule: Module) => void;
    resetCoursesState: () => void;
};

const initialState: State = {
    course: null,
    courses: null,
    courseModules: null,
    currentModule: null
};

const useCoursesContext = create<State & Action>((set) => ({
    ...initialState,
    setCourse: (course: Course) => set({ course }),
    setCourses: (courses: Courses) => set({ courses }),
    setCourseModules: (courseModules: Modules) => set({ courseModules }),
    setCurrentModule: (currentModule: Module) => set({ currentModule }),
    resetCoursesState: () => {
        set(initialState);
    }
}));

export default useCoursesContext;

import { Tables } from "@/types/database.types";
import { create } from "zustand";

type Course = Tables<"courses"> | null;
type Module = Tables<"course_modules"> | null;
type StudentCourse = Tables<"student_courses"> | null;
type Courses = Course[] | null;
type Modules = Module[] | null;
type StudentCourses = StudentCourse[] | null;

type State = {
    course: Course;
    courses: Courses;
    courseModules: Modules;
    currentModule: Module;
    studentCourse: StudentCourse;
    studentCourses: StudentCourses;
    completedStudentCourses: StudentCourses;
    lastAccessedCourse: StudentCourse;
};

type Action = {
    setCourse: (couse: Course) => void;
    setCourses: (courses: Courses) => void;
    setCourseModules: (courseModules: Modules) => void;
    setCurrentModule: (currentModule: Module) => void;
    setStudentCourse: (studentCourse: StudentCourse) => void;
    setStudentCourses: (studentCourses: StudentCourses) => void;
    setCompletedStudentCourses: (completedStudentCourses: StudentCourses) => void;
    setLastAccessedCourse: (lastAccessedCourse: StudentCourse) => void;
    resetCoursesState: () => void;
};

const initialState: State = {
    course: null,
    courses: null,
    courseModules: null,
    currentModule: null,
    studentCourse: null,
    studentCourses: null,
    completedStudentCourses: null,
    lastAccessedCourse: null
};

const useCoursesContext = create<State & Action>((set) => ({
    ...initialState,
    setCourse: (course: Course) => set({ course }),
    setCourses: (courses: Courses) => set({ courses }),
    setCourseModules: (courseModules: Modules) => set({ courseModules }),
    setCurrentModule: (currentModule: Module) => set({ currentModule }),
    setStudentCourse: (studentCourse: StudentCourse) => set({ studentCourse }),
    setStudentCourses: (studentCourses: StudentCourses) => set({ studentCourses }),
    setCompletedStudentCourses: (completedStudentCourses: StudentCourses) => set({ completedStudentCourses }),
    setLastAccessedCourse: (lastAccessedCourse: StudentCourse) => set({ lastAccessedCourse }),
    resetCoursesState: () => {
        set(initialState);
    }
}));

export default useCoursesContext;

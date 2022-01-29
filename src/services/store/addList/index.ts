import create from 'zustand';

export const useStore = create((set: any) => ({
  tasks: [],
  setTasks: (task: any) =>
    set((state: any) => ({ ...state, tasks: [...state.tasks, task] })),
}));

import create from 'zustand';

export const useStore = create((set: any) => ({
  currentUser: [],
  setCurrentUser: (user: any) => {
    set((state: any) => ({ currentUser: user }));
  },
}));

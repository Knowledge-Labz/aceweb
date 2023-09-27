import { create } from 'zustand';
import { getActiveUsers } from './actions/get-active-users';
import { createUser } from './actions/create-user';

export const useAppStore = create(set => ({
    // visual state data, get and set
    //iFaceMode: "view", // "view" or "edit" or any other view you want to add to add sub-components to a section's view
    iFaceLang: "fr", // "en" or "fr"
    setIFaceLang: (lang) => set({ iFaceLang: lang }),
    currentPage: "/",
    setCurrentPage: (page) => set({ currentPage: page })
}))
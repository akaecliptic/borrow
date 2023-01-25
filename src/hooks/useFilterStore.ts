import { create } from "zustand";

export type FilterState = {
    search: string;
    tags: string[];
    setSearch: ( val: string ) => void;
    addTag: ( val: string ) => void;
    removeTag: ( val: string ) => void;
    clearTags: ( ) => void;
};

const useFilterStore = create<FilterState>()((set, get) => ({
    search: '',
    tags: [],
    setSearch: ( val ) => set({ search: val }),
    addTag: ( val ) => set({ tags: [...get().tags, val] }),
    removeTag: ( val ) => {
        const filtered: string[] = get().tags.filter( tag => tag !== val );
        set({ tags: filtered });
    },
    clearTags: ( ) => set({ tags: [] })
}));

export default useFilterStore;

import { create } from "zustand";

//TODO: Alias functions : Use IBook instead of string 
export type CartState = {
    books: string[];
    addBook: ( val: string ) => boolean;
    removeBook: ( val: string ) => void;
    clearCart: ( ) => void;
}

const useCartStore = create<CartState>()((set, get) => ({
    books: [],
    addBook: ( val ) => {
        if( get().books.length >= 2 )
            return false;
        
        const merged: string[] = [...get().books, val];
        set({ books: merged });
        return true;
    },
    removeBook: ( val: string ) => {
        const filtered: string[] = get().books.filter( book => book !== val);
        set({ books: filtered });
    },
    clearCart: ( ) => set({ books: [] })
}));

export default useCartStore;

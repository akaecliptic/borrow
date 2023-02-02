import IBook from "shapes/Book";
import { create } from "zustand";
import LocalStore from "hooks/util/LocalStore";

export type CartState = {
    books: IBook[]; //! WATCH: Might need to be careful with object equality.
    addBook: ( val: IBook ) => boolean;
    removeBook: ( val: IBook ) => void;
    carries: ( val: IBook ) => boolean;
    clearCart: ( ) => void;
};

const [getStore, setStore] = LocalStore();

const useCartStore = create<CartState>()((set, get) => ({
    books: ( getStore('cart') !== null ) ? getStore<IBook[]>('cart')! : [],
    addBook: ( val ) => {
        if( get().books.length >= 2 )
            return false;
        
        const merged: IBook[] = [...get().books, val];
        set({ books: merged });
        setStore('cart', get().books);
        return true;
    },
    removeBook: ( val: IBook ) => {
        const filtered: IBook[] = get().books.filter( book => book.id !== val.id);
        set({ books: filtered });
        setStore('cart', get().books);
    },
    carries: ( val: IBook) => { return get().books.findIndex( item => item.id === val.id) !== -1; },
    clearCart: ( ) => {
        set({ books: [] })
        setStore('cart');
    }
}));

export default useCartStore;

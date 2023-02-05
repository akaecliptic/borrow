import PocketBase, { RecordAuthResponse } from "pocketbase";
import IBook from "shapes/Book";

export default class Accessor {

    private static _pocketbase: PocketBase;
    private static _instance: Accessor | null = null;

    private constructor() {
        Accessor._pocketbase = new PocketBase(process.env.REACT_APP_POCKETBASE_URL);
    }

    static get instance(): Accessor {
        if ( !Accessor._instance ) Accessor._instance = new Accessor();
        
        return Accessor._instance;
    }

    get books(): Promise<IBook[]> {
        return Accessor._pocketbase.collection('books').getFullList().then( response => {
            const books: IBook[] = [];
            response.forEach( entry => {
                const book: IBook = entry.export() as IBook;
                book.authors = entry.export().authors.split(',');
                books.push( book )
            });
            return books;
        });
    }

    get isValid(): boolean {
        return Accessor._pocketbase.authStore.isValid;
    }

    login( email: string, password: string ): Promise<RecordAuthResponse> {
        return Accessor._pocketbase.collection('users').authWithPassword(
            email,
            password,
        );
    }

    register( email: string, password: string, passwordConfirm: string ): Promise<RecordAuthResponse> {
        const user = {
            username: email.split('@')[0],
            email: email,
            emailVisibility: true,
            password: password,
            passwordConfirm: passwordConfirm,
            avatar: (Math.floor(Math.random() * 7) + 1).toString()
        };
        
        return Accessor._pocketbase.collection('users').create(user);
    }
}

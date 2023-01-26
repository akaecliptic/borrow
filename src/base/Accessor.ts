import PocketBase from 'pocketbase';
import IBook from 'shapes/Book';

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
            response.forEach( book => books.push( book.export() as IBook ));
            return books;
        });
    }
}

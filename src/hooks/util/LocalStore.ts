import { StoreKey } from "types/alias";
import { StorageGetter, StorageSetter } from "types/functions";

//* CONSIDER: A set function that does not overwrite data completely
const LocalStore = (): [ StorageGetter, StorageSetter ] => {

    const getter: StorageGetter = <T>( key: StoreKey ) => {
        if ( typeof(Storage) === "undefined" || localStorage.getItem(key) === null ) return null;
        return JSON.parse(localStorage.getItem(key)!) as T;
    };

    const setter: StorageSetter = ( key: StoreKey, val?: object | string ) => {
        if ( typeof Storage === 'undefined' ) return false;

        if ( !val ) {
            localStorage.removeItem(key);
            return true;
        }

        let data: string = ( typeof val === 'object' ) ? JSON.stringify(val) : val;
        localStorage.setItem(key, data);

        return true;
    };

    return [ getter, setter ];
};

export default LocalStore;

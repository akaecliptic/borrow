import { StoreKey } from "types/alias";

export type OnClickListener = ( event: React.MouseEvent ) => void;
export type OnChangeListener = ( event: React.ChangeEvent<HTMLInputElement> ) => void;
export type VoidConsumer = ( ) => void;

export type StorageGetter = <T>( key: StoreKey ) => T | null; 
export type StorageSetter = ( key: StoreKey, val?: string | object ) => boolean; 

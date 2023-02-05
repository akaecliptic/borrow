export type ScreenSize = { width: number; height: number };
export type StoreKey = 'cart';
export type ToastyChannel = 'info' | 'error' | 'warn';
export type ToastyLength = 'temp' | 'perm';
export type ToastyState = { 
    message: string;
    channel: ToastyChannel;
    length: ToastyLength;
    show: boolean;
    callback: ( () => void ) | undefined;
};
export type ToastyActions = {
    update: (message: string, channel: ToastyChannel, length: ToastyLength, callback?: () => void ) => void;
    syn: () => void;
    ack: () => void;
}
export type ToastyController = [
    state: ToastyState,
    actions: ToastyActions
];

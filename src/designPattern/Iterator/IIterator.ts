export interface IIterator<T> {
    next(): boolean;
    current(): T;
}
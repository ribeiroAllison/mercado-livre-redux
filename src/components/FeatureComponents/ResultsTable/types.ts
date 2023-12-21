
export type SingleTypeFunction<T> = (args0: T, args1: T) => T;

export type OneArgTwoTypeFunction<T, X> = (arg: T) => X;

export type TwoTypeFunction<T, X> = (arg0: T, arg1: T) => X;


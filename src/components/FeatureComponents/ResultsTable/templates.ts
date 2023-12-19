// function getFilledArray<T>(value: T, n: number): T[] {
//     return Array(n).fill(value);
//   }
  
//   let stringArray: string[];
//   let numberArray: number[];
//   let personArray: {name: string, age: number}[];
//   let coordinateArray: [number, number][];
//   type objParam = {
//     name:string,
//     age:number
//   }
  
//   // Write your code below:
  
//   stringArray = getFilledArray<string>('hi', 7);
//   numberArray = getFilledArray<number>(9, 10);
//   personArray = getFilledArray<objParam>(
//     {name:'J. Dean', age: 24}, 10
//   )
//   coordinateArray = getFilledArray<[number, number]>([3,4], 10)

export type SingleTypeFunction<T> = (arg0: T, arg1: T) => T;

export type TwoTypesFunction<T, X> = (arg0: T, arg1: T) => X;

export type MultipleArgsFunction <T> = (...args: T[]) => T


// any, unknown, void, null, never, undefined 

let a;  //by default it is any
a = 12; // number

let b: unknown = 15;
let c: void = undefined;
let d: null = null;
let e: never; // This type can never occur normally
let f: undefined = undefined;

// always make sure do not use any

// Demo file to show some basic stuff
// _____________________________________
// Spread operator / destructuring
// Objects

const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

const myObj2 = {
  ...myObj,
  a: 4,
  d: 5,
};
// console.log(myObj2);

const { a, ...whatever } = myObj;

// console.log(myObj);

// console.log(a);
// console.log(whatever);

// Arrays

const myArray = [1, 2, 3, 4, 5];

const myArray2 = [...myArray, 6, 7, 8, 9, 10];
// console.log(myArray2);
// function useState() {
//   return [
//     1,
//     () => {
//       console.log("Hello");
//     },
//   ];
// }
// const [x, y] = useState();

// console.log(x);
// y();

// _____________________________________
// Ternaries
// const q: any = 0;
// if (q === 1) {
//   console.log("a");
// } else {
//   console.log("Not a");
// }

// q === 1 ? console.log("a") : q === 2 ? console.log("b") : console.log("Not a");

// Logical operators
// ||, &&

// const q: any = 0;
// let message = q || "Fisk";
// console.log(message);

// message = q && "Fisk";
// console.log(message);

// q === 1 && (
//     JSX
// )

// q ? JSX : null;

//______________________________________
// TS-Extended interfaces
interface MyFace {
  eyes: number;
  noseSize: number;
  hairColor: string;
}

interface BigFace extends MyFace {
  mouthSize: number;
}

const antonsFace: BigFace = {
  eyes: 2,
  noseSize: 42,
  hairColor: "blonde",
  mouthSize: 42,
};

// TS-Extended Types
type MyButt = {
  buttSize: number;
  buttColor: string;
  cheeks: number;
};

const antonsButt: MyButt = {
  buttSize: 42,
  buttColor: "brown",
  cheeks: 2,
};

// interface BigButt extends MyButt {
//   implants: number;
// }

type BigButt = MyButt & {
  implants: number;
};

const antonsBigButt: BigButt = {
  buttSize: 42,
  buttColor: "brown",
  cheeks: 2,
  implants: 2,
};

// TS Partials

type SligthlySmallerButt = Partial<BigButt>;

const antonsPartialButt: SligthlySmallerButt = {
  implants: 1,
};

type ButtSize = Pick<BigButt, "buttSize" | "buttColor">;

const antonsPickyButt: ButtSize = {
  buttSize: 42,
  buttColor: "brown",
};

type ButtSizeDown = Omit<BigButt, "buttSize" | "buttColor">;

const antonsSizelessButt: ButtSizeDown = {
  cheeks: 4,
  implants: 2,
};

// TS-generics

interface Hands<T, K> {
  fingers: T;
  size: number;
  color: string;
  vafan: K;
}

interface MyFingers {
  fingerCount: number;
}

const antonsHand: Hands<MyFingers, { fisk: string }> = {
  color: "brown",
  size: 42,
  fingers: {
    fingerCount: 10,
  },
  vafan: {
    fisk: "fisk",
  },
};

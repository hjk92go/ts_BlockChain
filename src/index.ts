// const hello = () => "hi";

// class Block {
//   constructor(private data: string) {}
//   static hello() {
//     return "hi";
//   }
// }

// localStorage.getItem(); //ts는 브라우저 API의 타입을 어떠한 방식으로든 알고있다.
// //tsconfig.json lib에서 정의했기때문.
// //lib.dom.d.ts에 정의되어있다.

// import { init, exit } from "myPackage";
// //정의 파일(Declaration Files)이 찾을수 없다는 에러가 발생하는데,
// //정의 파일은 myPackage.d.ts에서 정의함(우리가 정의하는 함수를 의미)

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

//#5.4
import { init, exit } from "./myPackage"; //TS파일에 마이패키지 파일을 불러온다는뜻
//tsconfig.json에서 "allowJs": true 설정해줘야함.

const hello = () => "hi";

class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}

localStorage.getItem(); //ts는 브라우저 API의 타입을 어떠한 방식으로든 알고있다.
//tsconfig.json lib에서 정의했기때문.

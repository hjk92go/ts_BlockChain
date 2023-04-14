import crypto from "crypto";
// "esModuleInterop": true 해주면 에러없어짐 / allowJS를 지워준다.

interface BlockShape {
  hash: string; //데이터 타입string
  prevHash: string; //이전값, 값은 string임
  height: number; //블록의 위치를 표시해주는 숫자, 타입 num
  data: string; //블록이 보호할 data
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
    //static 함수는 클래스 인스턴스가 없어도 부를 수 있는 함수
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
  }
}

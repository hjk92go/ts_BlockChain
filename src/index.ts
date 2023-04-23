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
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    //이전해쉬값을 불러오기
    if (this.blocks.length === 0) return ""; //길이값이 0이라면 첫번째 해쉬값이 존재하지않기떄문에 ""리턴
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    //새로운 블록을 추가할 때, 블록에 저장하고싶은 데이터를 보내줘야함 / 데이터 타입 string
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

console.log(blockchain.getBlocks());

{
  /**
DefinitelyTyped
TypeScript type 정의를 위한 리포지토리입니다.
https://github.com/DefinitelyTyped/DefinitelyTyped

@types/node
npm i @types/node -D

*/
}

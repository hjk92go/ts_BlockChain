//d.ts의 정의 파일에서 호출 시그니처, 즉 타입만 써주면 된다. / 구현X
//ts에게 타입을 설명하는것

interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}

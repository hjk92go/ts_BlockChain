export function init(config) {
  return true; //init은 config 오브젝트를 받고 true를 리턴함
}
export function exit(code) {
  return code + 1; //exit은 code 오브젝트를 받고 code+1을 리턴함.
}

//이제, index 파일로가서 myPackage가 node의 모듈인것처럼 행동

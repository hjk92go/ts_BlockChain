// @ts-check
//ts파일한테 js파일을 확인하라고 알리는것
//ts의 보호는 받고싶은데 고장날까봐 걱정중일때 사용함!

/**
 * // @ts-check를 적어주고
 * "allowJs": true 설정,
 * 코멘드만 열심히 달아주면 사용법 끝
 */

/**
 * Initializes the project(프로젝트를 초기화한다)
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 *
 * ts가 이러한 코멘드를 읽고 체크해줌
 * 당장 코드에 에러날 걱정을 하지 않아도 된다.
 */

export function init(config) {
  return true; //init은 config 오브젝트를 받고 true를 리턴함
}

/**
 * Exits theh program(프로그램을 종료한다)
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1; //exit은 code 오브젝트를 받고 code+1을 리턴함.
}

//이제, index 파일로가서 myPackage가 node의 모듈인것처럼 행동

import type { 타입_선언형식, 라디유_타입 } from './type.ts'

import {
  형식_모음,
  타입_모음,
  파일_유효성_검사,
  버근가,
  정규식_모음,
  이스터에그,
  콘솔디유,
} from './lib.ts'

const 전처리 = `
  window.console = {
    ...window.console,
    du: (...arg) => {
      console.log(...arg)
      
      return arg
    }
  }
`.trim()

const 코드변환 = (
  비교문: IterableIterator<RegExpMatchArray>[],
  콜백함수: ((비교값: string[]) => void)[]
) => 비교문
  .map((비교, 인덱스) => {
    const { value, done } = 비교.next()

    if (done) return ''

    value.shift()

    return 콜백함수[인덱스](value)
  })
  .join('')
const 코드파싱 = async (코드: string) => {
  const 코드_배열 = 코드
    .split('\n')
    .filter((줄) => !!줄)
  const 비교_배열 = (줄: string) => [
    줄.matchAll(정규식_모음.변수_상수_정규식),
    줄.matchAll(정규식_모음.출력_정규식),
    줄.matchAll(정규식_모음.함수_정규식),
    줄.matchAll(정규식_모음.함수_실행_정규식),
    줄.matchAll(정규식_모음.끝),
  ]
  const 변환 = {
    선언: ([형식, 이름, 값, 타입]: string[]) =>
      `${형식_모음[형식 as 타입_선언형식]} ${이름} = ${타입_모음[타입 as 라디유_타입](이스터에그(값))}`,
    출력: ([내용]: string[]) => {
      if (내용 !== 이스터에그(내용))
        return 콘솔디유(이스터에그(내용))
      if (정규식_모음.사칙연산.test(내용)) {
        const 출력할_수_있는_내용_배열 = ['"알게모에요"', '"뭐엉?"', '"허어?"', '"라디유!"', 내용]
        const 인덱스 = Math.floor(Math.random() * 출력할_수_있는_내용_배열.length)

        return 콘솔디유(출력할_수_있는_내용_배열[인덱스])
      }

      return 콘솔디유(내용)
    },
    함수_선언: ([이름, 매개변수들]: string[]) => {
      const 매개변수 = 매개변수들
        .split(',')
        .map(
          (매개변수) => 매개변수.replace(/(글자!|숫자!)$/, '').trim()
        )
        .join(', ')

      return `function ${이름} (${매개변수}) {`
    },
    함수_실행: ([이름, 매개변수들]: string[]) => {
      const 매개변수 = 매개변수들
        .split(',')
        .map(
          (매개변수) => {
            const 비교 = /^(.*)\s(글자!|숫자!)$/.exec(매개변수.trim())

            return 비교 ? 타입_모음[비교[2] as 라디유_타입](비교[1]) : ''
          }
        )
        .join(', ')

      return `${이름}(${매개변수})`
    },
    코드_닫기: ([]) => `}`,
  }

  const 변환된_코드 = 코드_배열
    .map(
      (줄) =>
        코드변환(
          비교_배열(줄),
          [
            변환.선언,
            변환.출력,
            변환.함수_선언,
            변환.함수_실행,
            변환.코드_닫기,
          ]
        )
    )
    .join('\n')
    .trim()

  try {
    (new Function(`
      ${전처리}
      ${변환된_코드}
    `))()

    return 변환된_코드
  } catch (error) {
    console.log(`${error.message} 이거 못써요!`)

    return Promise.reject(`
      뭔가가 뭔가해서, 그 뭔가가 무엇이냐면, 
    `)
  }
}
export const 가자 = async (코드: string) => {
  await 버근가(!정규식_모음.코드_정규식.test(코드.trim()), '이게 뭐지')

  try {
    return await 코드파싱(
      코드.replace(정규식_모음.코드_정규식, '$1')
    )
  } catch (error) {
    return Promise.reject(error)
  }
}

if (Deno.args[0]) {
  try {
    await 가자(
      await 파일_유효성_검사(Deno.args[0])
    )
  } catch (error) {
    throw new Error(error)
  }
}

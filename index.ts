import 라디유_컨텍스트 from './module/context.ts'

import type { 지원하는_타입 } from './type.ts'

let 입력중인_킹짱룡 = ''
let 조건문_실행중 = false
let 조건문_충족 = false

const 버근가_반환 = (조건: boolean, 내용: string | number) => {
  if (조건)
    throw new Error(`"${내용}"? 뭐지 버근가?`)
}
const 파일_유효성_검사 = async (파일: string) => {
  버근가_반환(!/.+(.du)$/g.test(파일), `${파일.split('.').pop()}`)

  if (!(await Deno.stat(파일)).isFile)
    throw new Error('이거 아차 싶더라구')

  return await Deno.readTextFile(파일)
}
const 코드_실행 = async (라인들: string[]) => {
  let 라인번호 = 0

  const 라디유 = new 라디유_컨텍스트()
  const 인코더 = new TextEncoder()

  const 수식변환 = (수식: string) => {
    return new Function(
      `return ${수식
        .replace(/\\s/g, '')
        .replace(
          /([^-+*/={3}]+)/gi,
          (조각) => 라디유.야옹(조각.trim()) ? 라디유.야옹(조각.trim()).값 : 조각.trim()
        )}`
    )
  }
  const 라인_분류 = async (라인: string): Promise<any | undefined> => {
    const 검사할_라인 = 라인.trim()

    if (!검사할_라인) return
    if (조건문_실행중 && !조건문_충족) return
    if (/^<{3}/.test(검사할_라인)) {
      입력중인_킹짱룡 = ''
      조건문_실행중 = false
      조건문_충족 = false
    }
    if (입력중인_킹짱룡) {
      const { 값, 타입 } = 라디유.야옹(입력중인_킹짱룡)

      라디유.허어 = {
        이름: 입력중인_킹짱룡,
        값: `${값}\n${검사할_라인}`,
        타입,
      }

      return
    }
    if (/^킹짱룡/.test(검사할_라인)) {
      const [선언문, 이름, 매개변수] = /^킹짱룡\s(\D\S+\s)(.*)/g.exec(검사할_라인) || []

      버근가_반환(선언문 === undefined, 검사할_라인)

      입력중인_킹짱룡 = 이름.trim()
      라디유.허어 = {
        이름: 이름.trim(),
        값: 매개변수
          .trim()
          .split(',')
          .map((변수, index) => `허어 ${변수.trim().replace(' ', ` = $${index} `)}`)
          .join('\n'),
        타입: '다이노소어!'
      }
    }
    if (/^어\?/.test(검사할_라인)) {
      조건문_실행중 = true

      const 출력할_조건 = 검사할_라인.replace('어?', '').trim()

      조건문_충족 = 수식변환(출력할_조건)()
    }
    if (/^야옹/.test(검사할_라인)) {
      const 출력할_내용 = 검사할_라인.replace('야옹', '').trim()

      if (출력할_내용 === '라디유')
        await Deno.stdout.write(
          인코더.encode('앙냥냥')
        )

      const 가져온_값 = 라디유.야옹(출력할_내용)

      if (가져온_값) {
        await Deno.stdout.write(
          인코더.encode(가져온_값.타입 === '글자!' ? `${가져온_값.값} 요!` : `${가져온_값.값}`)
        )
      } else {
        버근가_반환(!(!isNaN(Number(출력할_내용)) || /".+"/g.test(출력할_내용)), 출력할_내용)

        await Deno.stdout.write(
          인코더.encode(출력할_내용)
        )
      }

      await Deno.stdout.write(
        인코더.encode('\n')
      )
    }
    if (/^허어/.test(검사할_라인)) {
      const 담을_내용 = 검사할_라인.replace('허어', '').trim()
      const [선언문, 이름, 값, 선언된_타입]: string[] = /(^\D\S*)\s?=\s?(.*)\s(.+!)/g.exec(담을_내용) || []

      버근가_반환(선언문 === undefined, 검사할_라인)

      const 타입 = 선언된_타입 as 지원하는_타입

      라디유.허어 = { 이름, 값, 타입 }
    }
    if (/^웡!/.test(검사할_라인)) {
      const [선언문, 이름, 인자] = /^웡!\s(\D\S+)(.*)/g.exec(검사할_라인) || []

      버근가_반환(선언문 === undefined, 검사할_라인)

      const 함수 = 라디유.야옹(이름)

      버근가_반환(함수 === undefined, 이름)

      const 인자들 = 인자.trim().split(',').map((인자) => 라디유.야옹(인자.trim())?.값 || 인자.trim())
      const 라인들 = 함수.값.split('\n').map((라인: string) => {
        if (/\$\d/.test(라인)) {
          const [담을_곳, 인덱스] = 라인.match(/\$(\d)/) || []

          return 라인.replace(담을_곳, 인자들[Number(인덱스)])
        }

        return 라인
      })

      await 코드_실행(라인들)
    }

    const 변수_변환: string[] | null = /(^\D\S+)\s?=\s?(.+)/g.exec(검사할_라인)

    if (변수_변환 !== null) {
      const [선언문, 이름, 바꿀_값] = 변수_변환
      const { 값, 타입 } = 라디유.야옹(이름)

      버근가_반환(값 === undefined, 검사할_라인)

      라디유.허어 = {
        이름,
        값: /[-+*/]/g.test(선언문) ? 수식변환(바꿀_값)() : 바꿀_값,
        타입,
      }
    }
  }

  while (라인번호 < 라인들.length) {
    const 검사할_라인 = 라인들[라인번호++].trim()

    const 반환값 = await 라인_분류(검사할_라인)

    if (!!반환값) return 반환값
  }
}
const 가자 = (파일_내용: string) => {
  const 라인들 = 파일_내용.trim().split('\n')

  if (라인들.shift() === '가자!' && 라인들.pop() === '머찐 라디유!')
    return 코드_실행(라인들)

  throw new Error('이거 아차 싶더라구')
}

if (Deno.args[0]) await 가자(await 파일_유효성_검사(Deno.args[0]))

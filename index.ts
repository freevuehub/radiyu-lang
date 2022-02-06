const 지원하는_타입 = ['숫자!', '글자!']
const 변수_모음 = new Map()
const 출력_꾸밈 = '요!'

const 콘솔 = (값: (string | number)) => console.log(출력_꾸밈, 값)
const 출력 = (값: (string | number)) => {
  콘솔(값)

  return `${출력_꾸밈} ${값}`
}
const 값이_없는_경우_메세지 = (값: string | number) => `"${값}"? 뭐지 버근가?`
const 수식_계산 = async (코드: string) => {
  if (/^.+(?:[+-/*].+)+$/g.test(코드)) {
    const 변환된_수식 = 코드
      .replace(/\s/g, '')
      .replace(
        /([^-+/*\d]+)/gi,
        (변수) => 변수_모음_체크(변수)['값']
      )

    return new Function(`return ${변환된_수식}`)()
  }

  return 코드
}
const 변수_모음_체크 = (변수명: string) => {
  const 값 = 변수_모음.get(변수명)

  if (값 === undefined)
    throw new Error(값이_없는_경우_메세지(변수명))

  return 값
}
const 조각_유효성_검사 = (코드: string, 정규식: RegExp) => {
  const 조각들 = 정규식.exec(코드.trim())

  if (조각들 === null)
    throw new Error('죠졌네 잉거')

  조각들.shift()

  return 조각들.map((조각) => 조각.trim())
}
const 라인_실행 = async (코드: string) => {
  if (/^허어/g.test(코드)) {
    const [선언부, 타입] = 조각_유효성_검사(코드, /^허어(.+)(.{2}!)$/g)

    if (!지원하는_타입.includes(타입))
      throw new Error(값이_없는_경우_메세지(타입))

    const [변수이름, 값] = 선언부
      .split('=')
      .map((조각) => 조각.trim())

    if (타입 === '숫자!') {
      const 숫자로_변환된_값 = Number(await 수식_계산(값))

      if (isNaN(숫자로_변환된_값))
        throw new Error(값이_없는_경우_메세지(값))

      변수_모음.set(변수이름, { 타입, 값: 숫자로_변환된_값 })
    } else {
      변수_모음.set(변수이름, { 타입, 값 })
    }
  }

  if (/^야옹/g.test(코드)) {
    const [선언부] = 조각_유효성_검사(코드, /^야옹(.+)$/g)
    const 일반_선언부 = await 수식_계산(선언부)

    if (!isNaN(Number(일반_선언부))) {
      return 출력(Number(일반_선언부))
    }

    return 출력(변수_모음_체크(일반_선언부)['값'])
  }
}

export const 가자 = async (코드: string) => {
  const 라인들 = 코드
    .trim()
    .split('\n')
    .map((라인) => 라인.trim())

  if (라인들.shift() !== '가자!' || 라인들.pop() !== '알게모에요')
    throw new Error('죠졌네 잉거')

  for (const 라인 of 라인들) {
    await 라인_실행(라인)
  }
}

const 파일_유효성_검사 = async (파일: string) => {
  if (!/.+(.du)$/g.test(파일))
    throw new Error(값이_없는_경우_메세지(`${파일.split('.').pop()}`))
  if (!(await Deno.stat(파일)).isFile)
    throw new Error('이거 아차 싶더라구')

  return await Deno.readTextFile(파일)
}

if (Deno.args[0]) await 가자(await 파일_유효성_검사(Deno.args[0]))

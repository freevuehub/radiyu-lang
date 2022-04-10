export const 형식_모음 = {
  '허어': 'let',
  '허어!': 'const'
}
export const 타입_모음 = {
  '글자!': (값: string) => `'${값}'`,
  '숫자!': (값: string) => Number(값),
}

export const 정규식_모음 = {
  코드_정규식: /^\s*가자!((\n\s*.*\s*)*)머찐 라디유!$/gm,
  변수_상수_정규식: /^\s*(허어|허어!)\s(\S*)\s*=\s*(.*)\s(글자!|숫자!)$/g,
  출력_정규식: /^\s*야옹 (.*)$/g,
  함수_정규식: /\s*킹짱룡\s(\S*)\s<(.*)>/g,
  함수_실행_정규식: /^\s*웡!\s(\S*)\s<(.*)>/g,
  끝: /^\s*<{3}\s*$/g,
  사칙연산: /[+/*-]/g,
  조건문: /^\s어\? (.*)/g,
}

export const 파일_유효성_검사 = async (파일: string) => {
  const 이거는_디유 = /.*\.du$/g.test(파일)

  await 버근가(!이거는_디유, `${파일.split('.').pop()}`)
  await 버근가(!(await Deno.stat(파일)).isFile, '이게 뭐지')

  return await Deno.readTextFile(파일)
}

export const 에러메시지출력 = (조건: boolean, 내용: string) => {
  if (조건)
    throw new Error(내용)
}

export const 버근가 = async (조건: boolean, 내용: string | number) => {
  if (조건)
    return 에러메시지출력(조건, `"${내용}"? 뭐지 버근가?`)
}

export const 이스터에그 = (값: string) => {
  switch (값) {
    case '!나이':
      return '"물어보지마!"'
    case '!라디유':
      return '"Radio for YOU!"'
    case '!남친':
      return '"없어..없다구.."'
    case '!능지':
      return '"앗 여기 떨어졌어요!"'
    case '라디유!':
      return '"머찐 라디유!"'
    case '랜도프!':
      return '"이제 그만 보내주자.."'
    default:
      return 값
  }
}

export const 콘솔디유 = (내용: string | number | boolean) => `
  console.du(${내용})
`.trim()

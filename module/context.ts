import type { 지원하는_타입 } from '../type.ts'

export default class {
  허어어: {
    [key: string]: {
      값: any
      타입: 지원하는_타입
    }
  } = {}

  set 허어({ 이름, 값, 타입 }: { 이름: string, 값: any, 타입: 지원하는_타입 }) {
    const 변환된_값 = (): string | number | boolean | undefined => {
      switch (타입) {
        case '다이노소어!':
          return `${값}`
        case '글자!':
          return `${값}`
        case '됐다!':
          return 값 === '됐어!'
            ? true
            : 값 === 'ㅈ됐어!'
              ? false
              : undefined
        case '숫자!':
          return isNaN(Number(값)) ? undefined : Number(값)
        default:
          return undefined
      }
    }

    if (변환된_값() === undefined)
      throw new Error('라창났다!!')

    this.허어어[이름] = { 값: 변환된_값(), 타입 }
  }

  get 야옹() {
    return (이름: string): { 값: any, 타입: 지원하는_타입 } => this.허어어[이름]
  }
}

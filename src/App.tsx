import React, { useState, useEffect } from 'https://esm.sh/react@17.0.2?dev'
import {
  Container,
  Card,
  Button,
  Box,
} from './components/index.ts'

interface IProps {
  isServer: boolean
}

declare global {
  interface IConsole extends Console {
    du: () => any
  }

  interface Window {
    console: IConsole
  }
}

const App: React.FC<IProps> = (props) => {
  const [code, setCode] = useState<string>(`허어 나는 = 라디유 글자!\n\n킹짱룡 소개 \<아이큐\>\n\t야옹 나는\n\t야옹 "아이큐는?"\n\t야옹 아이큐 + 50\n\t야옹 "입니다!"\n\<\<\<\n\n웡! 소개 \<50 숫자!\>`)
  const [compileCode, setCompileCode] = useState<string>('')
  const [output, setOutput] = useState<string[]>([])
  const [script, setScript] = useState<any>(null)

  const onTextChange = (event: React.ChangeEvent) => {
    // @ts-ignore
    setCode(event.target.value)
  }
  const onCodeStart = async (event: React.MouseEvent) => {
    event.preventDefault()

    const response = await fetch(
      '/run',
      {
        method: 'post',
        body: code
      }
    )

    try {
      const { data} = await response.json()

      setCompileCode(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.console.du = (...arg) => {
      setOutput((prev) => {
        return [
          ...prev,
          ...arg
        ]
      })
    }
  }, [])
  useEffect(() => {
    // @ts-ignore
    const dom = document
    const prevScript = dom.querySelector('#prev-script')

    if (prevScript) {
      dom.body.removeChild(prevScript)
    }

    if (compileCode) {
      setOutput([])

      const newScript = dom.createElement('script')

      newScript.id = 'prev-script'
      newScript.innerHTML = compileCode
      newScript.async = true

      dom.body.appendChild(newScript)

      return () => {
        dom.body.removeChild(newScript)
      }
    }
  }, [compileCode])

  return props.isServer ? (
    <div className="app_loading">서버를 부르는 중...</div>
  ) : (
    <>
      <React.Suspense
        fallback={<div className="app_loading">서버를 부르는 중...</div>}
      >
        <Container>
          <Box size={300} className="ml-auto mr-auto">
            <img className="fill width d-block" src="image/logo.png" alt="" />
          </Box>
          <div className="d-flex fill width flex-1" style={{ gap: 100, paddingBottom: 20, marginTop: 20 }}>
            <div className="fill width height d-flex dir-column" style={{ gap: 10 }}>
              <div className="flex-1 d-flex dir-column" style={{ position: 'relative' }}>
                <Card className="flex-1">
                  <textarea
                    value={code}
                    onChange={onTextChange}
                    className="textarea ft-cb fill width height"
                  />
                </Card>
                <Button className="start" onClick={onCodeStart}>실행 &#9656;</Button>
              </div>
              <p style={{ fontSize: '2rem' }}>설명서</p>
              <div className="flex-1">
                <ul
                  style={{
                    fontSize: '1.2rem',
                    lineHeight: '2rem',
                    listStyle: 'inside',
                  }}
                >
                  <li>함수와 변수만 지원합니다.</li>
                  <li>타입은 '글자!', '숫자!'만 지원합니다.</li>
                  <li>사칙연산을 지원하지만, 정답은 보장 못합니다.</li>
                </ul>
              </div>
            </div>
            <div className="fill width height d-flex dir-column" style={{ gap: 10 }}>
              <Card className="fill height">
                {
                  React.Children.toArray(
                    compileCode.split('\n').map((code) => <p className="ft-cb" style={{ fontSize: '1.2rem', margin: '5px 0' }}>{code}</p>)
                  )
                }
              </Card>
              <p style={{ textAlign: 'center', fontSize: '2rem' }}>&#9662;</p>
              <Card className="fill height">
                {
                  React.Children.toArray(
                    output.map((code) => <p className="ft-cb" style={{ fontSize: '1.2rem', margin: '5px 0' }}>{code}</p>)
                  )
                }
              </Card>
            </div>
          </div>
        </Container>
      </React.Suspense>
    </>
  )
}

export { App }

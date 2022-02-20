import React, { useState } from 'https://esm.sh/react@17.0.2?dev'
import { Button, Card } from './index.ts'

const ValueCode: React.FC = () => {
  return (
    <p className="code ft-cb d-flex ai-center">
      <span className="let">허어</span>
      <span className="name">
        <label className="d-block fill height">
          <input className="d-block fill height" type="text" />
        </label>
      </span>
      <span className="=">=</span>
      <span className="value">
        <label className="d-block fill height">
          <input className="d-block fill height" type="text" />
        </label>
      </span>
      <span className="type">글자!</span>
    </p>
  )
}
const FunctionCode: React.FC = () => {
  return (
    <p className="code ft-cb d-flex ai-center">
      <span className="function">킹짱룡</span>
      <span className="name">
        <label className="d-block fill height">
          <input className="d-block fill height" type="text" />
        </label>
      </span>
      <span>
        &lt;
      </span>
      <span className="value">
        <label className="d-block fill height">
          <input className="d-block fill height" type="text" />
        </label>
      </span>
      <span>
        &rt;
      </span>
    </p>
  )
}

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<any[]>([])

  const onAddValueClick = (event: React.MouseEvent) => {
    event.preventDefault()

    setCode([
      ...code,
      { component: ValueCode }
    ])
  }
  const onAddFunctionClick = (event: React.MouseEvent) => {
    event.preventDefault()

    setCode([
      ...code,
      { component: FunctionCode }
    ])
  }

  return (
    <>
      <Card className="flex-1">
        {
          React.Children.toArray(
            code.map((item) => <item.component />)
          )
        }
        <ul className="d-flex jc-center" style={{ gap: 20, marginTop: 20 }}>
          <li>
            <Button onClick={onAddValueClick}>변수 추가</Button>
          </li>
          <li>
            <Button onClick={onAddFunctionClick}>함수 추가</Button>
          </li>
          <li>
            <Button>출력 추가</Button>
          </li>
        </ul>
      </Card>
      <Button>실행</Button>
    </>
  )
}

export default CodeEditor

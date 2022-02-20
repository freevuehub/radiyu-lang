import React from 'https://esm.sh/react@17.0.2?dev'

interface IProps {
  size?: number
  className?: string
}

const Box: React.FC<IProps> = (props) => {
  return (
    <div
      className={`box fill width ${props.className || ''}`}
      style={{ maxWidth: props.size || 'unset' }}
    >
      {props.children}
    </div>
  )
}

export default Box

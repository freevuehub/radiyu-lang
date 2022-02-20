import React from 'https://esm.sh/react@17.0.2?dev'

interface IProps {
  className?: string
  onClick?: (event: React.MouseEvent) => void
}

const Button: React.FC<IProps> = (props) => {
  const onButtonClick = (event: React.MouseEvent) => {
    props.onClick?.(event)
  }

  return (
    <button className={`button ${props.className || ''}`} onClick={onButtonClick}>
      {props.children}
    </button>
  )
}

export default Button

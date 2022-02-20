import React from 'https://esm.sh/react@17.0.2?dev'

interface IProps {
  className?: string
}

const Card: React.FC<IProps> = (props) => {
  return (
    <div className={`card ${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Card

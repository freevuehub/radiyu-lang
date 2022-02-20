import React from 'https://esm.sh/react@17.0.2?dev'

const Container: React.FC = (props) => {
  return (
    <div className="container fill height">
      <div className="d-flex fill height dir-column">
        {props.children}
      </div>
    </div>
  )
}

export default Container

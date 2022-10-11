import React, { createContext } from 'react'
const { Consumer, Provider } = createContext();
function Context(props) {
  return (
      <Provider value={{ name: "Mure" }}>
          {props.children}
    </Provider>
  )
}

export  {Context,Consumer as ContextConsumer}
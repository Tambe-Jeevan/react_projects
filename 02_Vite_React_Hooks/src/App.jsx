import Counter from './UseState'
import UseEffect from './UseEffect'
import UseContext from './UseContext'
import UseRef from './UseRef'
import UseReducer from './UseReducer'

import './App.css'

function App() {

  return (
    <>
      <h1>Hooks in React</h1>
      <h4>Hooks are special functions that let you use state and other React features inside functional components without writing a class.</h4>

      <Counter />
      <UseEffect />
      <UseContext/>
      <UseRef />
      <UseReducer />
    </>
  )
}

export default App

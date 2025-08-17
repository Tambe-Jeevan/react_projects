import Card from './Card'
import './App.css'

function App() {
  let myObj = {
    username: "JEEVAN",
    age: 22
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Jeevan" btnText="click me"/>
      <Card username="JEEVAN" />
    </>
  )
}

export default App

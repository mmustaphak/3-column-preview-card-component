import './App.css'
import Card from "./components/Card.jsx"
import data from "./data"
function App() {
  const cardElement = data.map((item)=>{
    return <Card id={item.id} item={item}/>
  })
  return (
    <>
      {cardElement}
    </>
  )
}

export default App

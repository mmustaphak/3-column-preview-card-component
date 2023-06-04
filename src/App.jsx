import './App.css'
import Card from "./components/Card.jsx"
import data from "./data"
function App() {
  const cardElement = data.map((item)=>{
    return <Card key={item.id} item={item}/>
  })
  return (
    <main>
      {cardElement}
    </main>
  )
}

export default App

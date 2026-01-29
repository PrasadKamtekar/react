
import './App.css'
import Card from './card.jsx'

function App() {
  return (
    <div id="card-container">
      <Card username="Prasad" age={21} src="https://3.imimg.com/data3/MQ/FD/GLADMIN-110775/3d-images-500x500.jpg"/>
      <Card username="SAI" age={21} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxzTJ4lpeTu7SPiKv0JTDMXlWoNHZZJMUgQ&s"/>
      <Card username="Prasad Kamtekar" age={21} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpL0Q2r8Vn46E94TYgD7PeP_vE2nyhtJt-Dw&s"/>
      <Card username="Prasad Kamtekar" age={21} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpL0Q2r8Vn46E94TYgD7PeP_vE2nyhtJt-Dw&s" />
    </div>

  )
}

export default App

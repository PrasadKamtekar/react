

function card(props) {
  return (
    <div id="card">
      <img src={props.src} alt="" />
      <h2>{props.username}, {props.age}</h2>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nobis!</p>
      <button link="#" id="btn">View profile</button>
    </div>
  )
}

export default card

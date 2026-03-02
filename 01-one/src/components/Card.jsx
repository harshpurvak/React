function Card (props) {
    return <div className="parent">
      <div className="card">
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, non.</p>
      </div>
    </div>
}

export default Card
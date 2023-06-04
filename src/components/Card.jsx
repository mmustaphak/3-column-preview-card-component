import "./Card.css"
export default function Card(props){
    return(
        <div className={"card--info " + `card--${props.item.id}`}>
            <img src={props.item.image}/>
            <h2>{props.item.carModel}</h2>
            <p>{props.item.description}</p>
            <button>Learn More</button>
        </div>
    )
}
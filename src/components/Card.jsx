import "./Card.css"
export default function Card(){
    return(
        <div className="card--info">
            <img src="./src/assets/icon-sedans.svg"/>
            <h2>SEDANS</h2>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button>Learn More</button>
        </div>
    )
}
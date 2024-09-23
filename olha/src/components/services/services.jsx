import './services.scss'

export default function Services({info}){
const { title, discription} = info;

return(
    <div className="services-item">
        <h3>{title}</h3>
        <p>{discription}</p>
    
    </div>
)
}
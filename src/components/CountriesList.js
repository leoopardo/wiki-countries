import { Link } from "react-router-dom";

export function CountriesList(props){
    return(
        <ul>
            {props.countries.map((currentCountry) =>{
                return (
                    <div className="conteiner" class="list-group-item list-group-item-action">
                            <Link to={currentCountry.alpha3Code}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`} alt={currentCountry.name.common}/>
                            <h1>{currentCountry.name.common}</h1>
                            </Link> 
                    </div>
                )
            })}
        </ul>
    )
}
import { useParams } from "react-router-dom"

export function CountryDetails(props){
    const params = useParams();
    const currentCountry = props.countries.filter((currentCountry) =>{
        return currentCountry.alpha2Code === params.alpha2Code
    })[0];

    return(
        <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`} alt={currentCountry.name.common}/>
        <p>currentCountry</p>
        </>
    )
}
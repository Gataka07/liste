
import "./Bonjour.css"

const Bonjour = function(props) { 
    const  { name, age, ageVisible } = props
        
return (
        <div className="texte">
            <h1 className="title"> Bienvenue {name} sur l'application React !</h1>
            
            {
                ageVisible ? ( <p className="age"> Vous avez {age} ans !</p>)
                : (<p>age caché</p>)
            }
            {
                (age<17) && ( // si ca cest vrai 
                    <p>mineur</p> // affiche moi ca : 
                ) // booleens : si cest faux il va rien faire, sinon il fait ce quil y a dans les ()
            }
        </div>
    )
}
    
Bonjour.defaultProps = {
    name : "hannanas",
    age : 100,
    ageVisible : true
}
export default Bonjour
    

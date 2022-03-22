import "./SimpleList"


const SimpleListProduit = function(props) {
    
    const {name, price, promo} = props

    return (
        <div>
            <h3> {name} : <span className={
                promo ? "red" : ""
            }>{price}</span></h3></div>
    )
}

export default SimpleListProduit
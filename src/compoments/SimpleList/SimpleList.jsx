import SimpleListProduit from './SimpleListProduit.jsx'

const SimpleList = function(props) {
    const { produit } = props 
    const produitJSX =  produit.map(
        p => <SimpleListProduit key={produit.id}

            name = {p.name}
            price = {p.price}
            promo = {p.promo}
            >
        
            </SimpleListProduit>
    )
    return (
        <div>
            {produitJSX}
        </div>
    )
}
export default SimpleList
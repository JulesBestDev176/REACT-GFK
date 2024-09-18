function CheckBox() {
    return (
        <div className='mt-2 d-flex col align-items-center flex-row ' >
            <div className='d-flex pe-1'>
                <input type="checkbox" className='form-check' name="recherche" value="Rechercher" />
            </div>
            <div className='col-12 d-flex col align-items-center'>
                N'afficher que les produits en stock
            </div>
        </div>
    )
}

export default CheckBox
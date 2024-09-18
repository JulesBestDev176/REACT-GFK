import { useState } from "react"

function Input() {

    const [recherche, setRecherche] = useState('')

    const handleChange = (e) => {
        setRecherche(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange} className='form-control' type="text" name="recherche" value={recherche} placeholder="Rechercher" />
        </>
    )
}

export default Input
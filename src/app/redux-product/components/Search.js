import React from  "react"

export const Search = (props) => {
    return(
        <div>
            <input type="text" placeholder="recherche produit" onChange={(e) => props.search(e.target.value)} />
            {props.loading ? 'recherche en cours...' : null}
        </div>
    )
}
import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])

    return (
        <FavoritesContext.Provider
            value={ {favorite, setFavorite} }
        >
            { children }
        </FavoritesContext.Provider>
    );
}

//hook personalizado
export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {
        //verifica se e repetido
        const repeatedFavorite = favorite.some((item)  => item.id === newFavorite.id)

        //nova lista recebe a anterior
        let newList = [...favorite]

        //verificar se nao tem repetido e adicionar na lista
        if(!repeatedFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        //se for repetido tira da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}

import { menuler, corbacesitleri, anayemekler, 
    yardimciyemekler, salatalar,tatlilar,
sogukurunler, doner, mesrubatlar, firinurunleri,
kahvaltitabagi  } from "../../assets/data/menus";

const initialState = {
    menuler: menuler,
    corbacesitleri: corbacesitleri,
    anayemekler: anayemekler,
    yardimciyemekler: yardimciyemekler,
    salatalar: salatalar,
    tatlilar: tatlilar,
    sogukurunler: sogukurunler,
    doner: doner,
    mesrubatlar: mesrubatlar,
    firinurunleri: firinurunleri,
    kahvaltitabagi: kahvaltitabagi,
}

const menuReducer = (state = initialState, action) => {
    switch(action.payload){
        default:
            return(state)
    }
}

export default menuReducer;
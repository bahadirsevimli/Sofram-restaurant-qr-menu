
import { menuler, corbaCesitleri, anaYemekler, 
    yardimciYemekler, salatalar,tatlilar,
sogukUrunler, doner, mesrubatlar, firinUrunleri,
kahvaltiTabagi  } from "../../assets/data/menus";

const initialState = {
    menuler: menuler,
    corbaCesitleri: corbaCesitleri,
    anaYemekler: anaYemekler,
    yardimciYemekler: yardimciYemekler,
    salatalar: salatalar,
    tatlilar: tatlilar,
    sogukUrunler: sogukUrunler,
    doner: doner,
    mesrubatlar: mesrubatlar,
    firinUrunleri: firinUrunleri,
    kahvaltiTabagi: kahvaltiTabagi,
}

const menuReducer = (state = initialState, action) => {
    switch(action.payload){
        default:
            return(state)
    }
}

export default menuReducer;
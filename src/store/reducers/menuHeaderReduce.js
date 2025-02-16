
import menuHeaders from "../../assets/data/menu-headers"
const SHOW_MENU_HEADER = "SHOW_MENU_HEADER";


const initialState = {
    menuTitle: []
}

const menuHeaderReduce = (state = initialState, action) => {

    switch (action.type){
        case SHOW_MENU_HEADER:
            return{
                ...state,
                menuTitle: menuHeaders
            };
        default:
            return(state)    
    }

}

export default menuHeaderReduce;
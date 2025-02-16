
import menuHeaders from "../../assets/data/menu-headers"



const initialState = {
    menuTitle: menuHeaders
}

const menuHeaderReducer = (state = initialState, action) => {

    switch (action.type){
        default:
            return(state)    
    }

}

export default menuHeaderReducer;
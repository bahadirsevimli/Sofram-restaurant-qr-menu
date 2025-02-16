export const SHOW_MENU_HEADER = "SHOW_MENU_HEADER";

export const showMenuHeader = (id) => {
    return{
        type: SHOW_MENU_HEADER,
        payload: id
    }
}
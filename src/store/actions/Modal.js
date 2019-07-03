import {
    SHOW_MODAL ,
    HIDE_MODAL
} from './actionTypes';

export const showModal = (item) =>{
    return{
        type : SHOW_MODAL,
        item
    }
}

export const hideModal = () =>{
    return{
        type : HIDE_MODAL,
        
    }
}
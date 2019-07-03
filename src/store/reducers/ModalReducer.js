import { 
    SHOW_MODAL,
    HIDE_MODAL
} from '../actions/actionTypes';

const INITIAL_STATE = {
    item:{name:"Some error",rate:"0"},
    modalVisible:false
};

const TrackReducer = (state=INITIAL_STATE, action) => {
    
    switch (action.type) {
        
        case SHOW_MODAL  : 
            return{
                ...state,
                modalVisible:true,
                item:action.item
            }
        
        case HIDE_MODAL  : 
            return{
                ...state,
                modalVisible:false,
                item:{name:"Some error",rate:"0"}
            }
                
        default : return state
        }
};
  
export default TrackReducer;
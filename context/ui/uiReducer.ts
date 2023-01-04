import {UIState}from './'

type UIActionType = 
| { type: 'UI - Open Sidebar' }
| { type: 'UI - Close Sidebar' }
| { type: 'UI - Set isAddEntry',payload:boolean }
| { type: 'UI - Start isDragging' }
| { type: 'UI - End isDragging'}

export const uiReducer = (state: UIState, action:UIActionType): UIState => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return{
                ...state,
                sidemenuOpen:true,
            }
        case 'UI - Close Sidebar':
            return{
                ...state,
                sidemenuOpen:false,
            }

        case 'UI - Set isAddEntry':
            return{
                ...state,
                isAddingEntry:action.payload
            }
            
        case 'UI - Start isDragging':
        return{
            ...state,
            isDragging:true,
        }

        case 'UI - End isDragging':
            return{
                ...state,
                isDragging:false,
            }



    
        default:
            return state;
    }
}


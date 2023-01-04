import { FC,useReducer } from 'react';

import { UIContext,uiReducer } from './';


export interface UIState {
     sidemenuOpen:boolean;
     isAddingEntry:boolean;
     isDragging:boolean;
} 

export const UI_INITIAL_STATE: UIState = {
    sidemenuOpen:false,
    isAddingEntry:false,
    isDragging:false,
}


interface Props {
    children?: React.ReactNode;
}




export const UIProvider:FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = ()=>{
        dispatch({type:"UI - Open Sidebar"})
    }

    const closeSideMenu = ()=>{
        dispatch({type:"UI - Close Sidebar"})
    }

    const SetIsAddingEntry = (isAdding:boolean)=>{
        dispatch({type:"UI - Set isAddEntry",payload:isAdding})
    }

    const startDragging = ()=>{
        dispatch({type:"UI - Start isDragging"})
    }

    const endDragging = ()=>{
        dispatch({type:"UI - End isDragging"})
    }

  return (
    <UIContext.Provider value={{
        ...state,
        // para
        // Methods Funciones
        openSideMenu,
        closeSideMenu,
        
        SetIsAddingEntry,
        startDragging,
        endDragging,
        
    }}>
        {children}
    </UIContext.Provider>
  )
}
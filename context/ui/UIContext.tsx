import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen:boolean;
    isAddingEntry:boolean;
    isDragging:boolean;

    // Methods Funciones
    openSideMenu: () => void;
    closeSideMenu: () => void;
    SetIsAddingEntry: (isAdding: boolean) => void

    startDragging:() => void;
    endDragging:() => void;

}


export const UIContext = createContext({} as ContextProps )
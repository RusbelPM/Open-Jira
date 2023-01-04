import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps {
     entries:Entry[];//dodo falta el tipo de dato en el arreglo
     //Methods
     addNewEntry:(description: string) => void
     updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}


export const EntriesContext = createContext({} as ContextProps )
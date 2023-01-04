import { Button,Box,TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import { useState, ChangeEvent, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from "../../context/ui";



export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)
    const {isAddingEntry,SetIsAddingEntry} = useContext(UIContext)


    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement> )=>{
        setInputValue(event.target.value)
    }

    const onSave = ()=>{
        if(inputValue.length === 0 )return;

        addNewEntry(inputValue);
        SetIsAddingEntry(isAddingEntry)
        setTouched(false)
        setInputValue('')
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }} >  

        {
            isAddingEntry? (
                <>
                <TextField
                fullWidth
                sx={{ marginTop:2 ,marginBottom: 1 }}
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                error={ inputValue.length <= 0 && touched}
                value={inputValue}
                onChange={ onTextFieldChanged}
                onBlur={()=>setTouched(true)}
                />

                <Box display="flex" justifyContent="space-between" >
                    <Button
                    variant="text"
                    onClick={()=> SetIsAddingEntry(false)}
                    >
                        CANCELAR
                    </Button>

                    <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<SaveIcon/>}
                    onClick={onSave}
                    >
                        GUARDAR
                    </Button>
                </Box>
                
                </>
            ):(
                <Button
                startIcon={<AddIcon/>}
                fullWidth
                variant="outlined"
                onClick={() => SetIsAddingEntry(true)}

                >
                    AGREGAR
                </Button>

            )
        }

    </Box>
  )
}

import {Card,CardActionArea,CardContent,CardActions} from '@mui/material'
import Typography from '@mui/material/Typography'
import { Entry } from '../../interfaces'
import { FC, DragEvent, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';


interface Props {
  entry: Entry
}

export const EntryCard:FC<Props> = ({entry}) => {

  const {startDragging,endDragging} = useContext(UIContext)
  const router =  useRouter()

    const onDragState = (event: DragEvent)=>{
 
      event.dataTransfer.setData('text',entry._id);

      startDragging();
      
      //modificar el statdo , para indicar que estoy haciendo drag
    }

      const onDragEnd = ()=>{
        //cancelar el onDrag
        endDragging()
      }

      const onClick = ()=>{
        router.push(`/entries/${entry._id}`)
      }

  return (
    <Card
    onClick={ onClick }
    sx={{marginBottom: 1 }}
    //eventos de drag
    draggable={true}
    onDragStart={onDragState}
    onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:"flex",justifyContent:"end",paddingRight:"2"}}>
                <Typography variant='body2'>{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>
            </CardActions>

        </CardActionArea>

    </Card>
  )
}

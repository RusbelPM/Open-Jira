import { Card, CardHeader, Grid, Typography } from'@mui/material'
import { Layout } from '../components/layouts';
import { EntryList,NewEntry} from '../components/ui';



 const  HomePage = () => {

  return (

    <Layout title='Home - OpenJira'>

      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={4} >
          <Card sx={{ height:'calc(100vh - 100px)' }} >
            <CardHeader title="Pendientes" />

              {/* {agregar una nueva entrada} */}
              <NewEntry />
              <EntryList status='pending' />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={4}>
          <Card sx={{ height:'calc(100vh - 100px)' }}>
            <CardHeader title="En progreso"/>
            
              <EntryList status='in-progress'/>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={4}>
          <Card sx={{ height:'calc(100vh - 100px)' }}>
            <CardHeader title="Completados"/>
            
              <EntryList status='finished'/>
          </Card>
        </Grid>
        

      </Grid>
      
    </Layout>
    
  )
}
export default HomePage;
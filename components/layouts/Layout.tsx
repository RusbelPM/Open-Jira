import { Box } from "@mui/material"
import{FC}from'react'
import  Head  from 'next/head';
import { Navbar, Siderbar } from '../ui';

interface Props {
    title?:string;
    children?: React.ReactNode;
}

const origin = (typeof window === 'undefined')? '' : window.location.origin;

export const Layout:FC<Props>= ({title = "OpenJira",children}) => {


  return (
    <Box sx={{ flexFlow:1 }}>

        <Head>
            <title>{title}</title>

            <meta property="og:title" content="App the progress" />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/open.webp`}/>
        </Head>

        <Navbar/>
        <Siderbar/>

        <Box sx={{ padding:"10px 20px" }}>
            {children}
        </Box>

    </Box>
  )
}

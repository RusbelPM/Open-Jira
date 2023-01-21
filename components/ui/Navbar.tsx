import { useContext, useState, useEffect } from 'react';
import {AppBar,IconButton,Toolbar,Typography,Link} from "@mui/material"
import ListIcon from '@mui/icons-material/List';
import { UIContext } from '../../context/ui/UIContext';
import NextLink from 'next/link';

export const Navbar = () => {

  const {openSideMenu} = useContext(UIContext)

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <AppBar 
    position="sticky"
     elevation={0}
     className="blur"
     >
      {
        hasWindow && (

          <Toolbar>
              <IconButton
              size="large"
              edge="start"
              onClick={openSideMenu}
              >
                  <ListIcon/>
              </IconButton>
              <NextLink legacyBehavior href="/" passHref >
                <Link underline='none' color="white">
                  <Typography variant="h6">App Jira</Typography>
                </Link>
              </NextLink>
          </Toolbar>
        )
      }

    </AppBar>
  )
}

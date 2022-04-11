import { AppBar, Container, IconButton, Avatar, Paper, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import PageCard from "./page";
import { useEffect, useState } from "react";



function Dashboard(){
    
    const [users, setUsers] = useState([])
    const [eu, setEu] = useState();
    
    function isLoggedIn()
    {
      var user = localStorage.getItem('sessionUser');
      if(user == null){return 0;}
      //return loginUser(user.email,user.password).status;
      return 1;
    }

    useEffect( () => {      
        if(isLoggedIn() === 0)
        {
            window.location.href = "/";
            return;
        }
    }, []);

        

        useEffect( () => {
            setEu(JSON.parse(localStorage.getItem("sessionUser")));
        //set user using local storage "users"
            var teste = JSON.parse(localStorage.getItem("sessionUser"));
     
        }, []);

        const logout = () =>  
        {
            localStorage.removeItem('sessionUser');
            window.location.href = "/";
        };

     return(
         <div>
             <AppBar position="fixed">
            <Toolbar style={{
                display:'flex',
                justifyContent: 'space-between'
            }}>
                <Typography variant="h6">
                Pc Fefal
                </Typography>
                <Button color="inherit" onClick={logout} >Sair</Button>
            </Toolbar>
            </AppBar>
             <Container  style={{
                 marginTop: 80
             }}> 
            <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Paper elevation={3}  style={{padding: 10 }}>  
                            <Avatar>
                                &
                            </Avatar>
                               
                                <div>
                                    Email: {eu && eu.Email}
                                </div>
                                <div>
                                    Password: {eu && eu.password}
                                </div>        
                        </Paper>
                    </Grid>

                    <Grid item md={9}>
                        <PageCard/>
                    </Grid>
                    
            </Grid>
        </Container>
         </div>
     )
}

export default Dashboard
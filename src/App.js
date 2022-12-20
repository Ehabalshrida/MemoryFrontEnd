import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import  Form from './Components/Form/Form.js'
import  Posts from './Components/Posts/Posts.js'
import useStyles from './style';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import * as api from "./api/index"
function App() {

  const classes =useStyles();
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getPosts())
    // api.fetchPosts().then(res=>{
    //   console.log({data:res.data})
    // })
  
  }, [])

  return (
    <>
    <Container maxWidth="lg">
      <AppBar style={classes.AppBar} position='static' color='inherit'>
        <Typography style={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
     <img  style={classes.image}src={memories} height="100px"/>
     </AppBar>
      <Grow in >
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    
    </>
  );
}

export default App;

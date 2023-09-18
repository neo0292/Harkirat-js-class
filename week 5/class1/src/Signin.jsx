import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


function Signin(){
return(
  <div>
    <center>
      <div style = {{ paddingTop:150, marginBottom:15}}>
      <Typography variant={"h6"}>Welcome back: Please Signin below 
      </Typography>
            </div>
      <Card variant="outlined" style = {{width:400, padding:20}}>
          <div>
            <TextField fullWidth = {true} id="outlined-basic" label="Email" variant="outlined" /><br />  <br />
            <TextField fullWidth = {true} id="outlined-basic" label="Password" variant="outlined" /><br />
            <br /> <br /><Button size='larger' variant="contained">Signin</Button>
            </div>
      </Card>
      </center>
  </div>
)

}

export default Signin;
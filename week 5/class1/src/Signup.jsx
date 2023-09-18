import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


function Signup(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

return(
  <div>
    {email}
    {password}
    <center>
      <div style = {{ paddingTop:150, marginBottom:15}}>
      <Typography variant={"h6"}>Welcome to Coursera: Please Signup below 
      </Typography>
            </div>
      <Card variant="outlined" style = {{width:400, padding:20}}>
          <div>
            <TextField 
              onChange={(e) => {
                setEmail(e.target.value);    //set value of email typed by user
              } }
              
              fullWidth = {true} id="outlined-basic" label="Email" variant="outlined" /><br />  <br />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              } }
            fullWidth = {true} id="outlined-basic" label="Password" variant="outlined" /><br />
            <br /> <br />
            <Button 
              size='larger' 
              variant="contained"
              onClick={() => {
                function callback2(data) {
                  localStorage.setItem("token", data.token);
                }
                function callback1(res) {
                  res.json().then(callback2)
                }

                fetch("http://localhost:3000/admin/signup",{
                      method: "POST",
                      body: JSON.stringify({
                        username: email,
                        password: password
                      }),
                      headers : {
                        "Content-Type": "application/json"
                      }
                }).then(callback1)  
                            
              }}
              >Signup</Button>
            </div>
      </Card>
      </center>
  </div>
)

}

export default Signup;
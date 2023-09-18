import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function AddCourse () {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
return <div>
  <TextField 
              onChange={(e) => {
                setTitle(e.target.value);    //set value of CourseName typed by user
              } }
              
              fullWidth = {true} id="outlined-basic" label="CourseName" variant="outlined" /><br />  <br />

  <TextField 
              onChange={(e) => {
                setDescription(e.target.value);    //set value of Course Description typed by user
              } }
              
              fullWidth = {true} id="outlined-basic" label="Description" variant="outlined" /><br />  <br />

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

                fetch("http://localhost:3000/admin/courses",{
                      method: "POST",
                      body: JSON.stringify({
                        title : title,
                        description : description,
                        imagelink :"",
                        published : true
                      }),
                      headers : {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer "+ localStorage.getItem("token")
                      }
                }).then(callback1)  
                            
              }}
              >Add Course</Button>            

</div>

}

export default AddCourse;
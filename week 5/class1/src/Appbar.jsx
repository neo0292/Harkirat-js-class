import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Appbar(){
  const navigate = useNavigate();
  return   <div>
      <div style = {{display:"flex", 
           justifyContent:"space-between",
           paddingTop: 5}}>
        <div>
            <Typography>
              Coursera App
            </Typography>
        </div>
        <div>
          <Button style= {{marginRight:10}} variant="contained"
              onClick={()=>{
                navigate("/signup")
              }}
              >Signup</Button>
          <Button variant="contained"
              onClick={()=>{
                navigate("/signin")
              }}
                >Signin</Button>
        </div>
      </div>
  </div>
}

export default Appbar;
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, margin } from '@mui/system';
import Paper from '@mui/material/Paper';
import React,{ useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';


export default function Student() {
    const paperStyle={padding:"50px 20px",width:600,margin:"20px auto"}
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [students,setStudents]=useState([]);
    const handleClick=(e)=>{
        e.preventDefault() 
    const student={name,address};
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(student)
    }).then(()=>{  
      alert("Your file is being uploaded!");

      <Alert severity="success">This is a success Alert.</Alert>;

      console.log("new student added")
    })
  }
    useEffect(()=>{
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result);
    }
    )
  },[]) ;
    
  return (
    
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="student-name" label="Student Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
      <TextField id="address" label="Address" variant="outlined" fullWidth onChange={(e)=>setAddress(e.target.value)} />
      <Button variant="contained" color="success" onClick={handleClick}>
  Submit
</Button>
    </Box>
    </Paper>
    <h1>Students</h1>
    <Paper elevation={3} style={paperStyle} >
      {students.map(student=>( 
    <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left" }} key={student.id} >
      Id : {student.id}<br></br>
      Name : {student.name}<br></br>
      Address : {student.address}

    </Paper>
      ))}
    </Paper>
      </Container>
  );
}

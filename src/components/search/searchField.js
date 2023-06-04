import { Grid } from "@mui/material"
import SearchBar from "./searchBar"
import { useEffect, useState } from 'react';
import {Box} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SearchField(){

    const [doctorFound, setDoctorFound] = useState(null)
    const navigate = useNavigate()

    const sendDoctorRequest = async (name) => {

        try{

            const response = await axios.get("http://localhost:8000/doctors/name/"+name)
            const id = response.data.doctor_id

            if(id){
                navigate("/doctors/"+id)
            }
            setDoctorFound("doctor with name '"+name+"'"+" not found")

        } catch (error){
            setDoctorFound("doctor with name '"+name+"'"+" not found")
        }

    }

    const handleSearchSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name');
        await sendDoctorRequest(name)
    }   


    return (
        <>
          <br></br>
          <br></br>
          <p style={{fontSize:26, color:'#e0e0e0', marginBottom:12}}>Search for a doctor</p>
          <Box component="form" onSubmit={handleSearchSubmit}>
            <SearchBar  />
            {doctorFound? <p>{doctorFound}</p>: null}
          </Box>
            
        </>
    )
}

export default SearchField
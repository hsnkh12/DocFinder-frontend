import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchBar from '../components/search/searchBar';
import FilterForm from '../components/filter/filterForm';
import { Filter, ReportSharp } from '@mui/icons-material';
import DoctorsList from '../components/list/doctorsList';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListDoctorsPage(){

    const [spec, setSpec] = useState("all")
    const [clinic, setClinic] = useState("Cyprus Central Hospital")
    const [orderBy, setOrderBy] = useState("reviews")
    const [doctors, setDoctors] = useState([])

    const getDoctorsRequest = async () => {

      try{

        let field_name = spec === "all"? ".*": spec
        let clinic_id = clinic === "Cyprus Central Hospital"? "CCH": ".*"

        const response = await axios.request('http://localhost:8000/doctors?field_name='+field_name+"&clinic_id="+clinic_id,)
        
        const doctors = orderBy === "reviews"? response.data.sort( (a,b) => {
          
          const ratingA = a.avgReviews[0].rating === null ? 0 : a.avgReviews[0].rating;
          const ratingB = a.avgReviews[0].rating === null ? 0 : b.avgReviews[0].rating;
    
          return ratingB - ratingA;
          
        }): response.data

        setDoctors(doctors)

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getDoctorsRequest()

    },[spec, clinic, orderBy])

    return ( <Box
        sx={{
          width: "100%",
          height: 'auto',
          marginTop:10
        }}
      >
        <Container>
          <FilterForm 
            spec = {spec}
            setSpec = {setSpec}
            clinic = {clinic}
            setClinic = {setClinic}
            orderBy = {orderBy}
            setOrderBy={setOrderBy}
          ></FilterForm>
          <br></br>
          <br></br>
          <br></br>
          <DoctorsList key={doctors.length} doctors={doctors} orderBy = {orderBy}></DoctorsList>
        </Container>
        
        </Box>)
}
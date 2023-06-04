import React, { useState,useContext } from 'react';
import { Container } from '@mui/material';
import { userAdminContext } from "../hooks/auth" 
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function ScrapDoctorsPage(props){

  const {isUserAdmin} = useContext(userAdminContext) 
  const navigate = useNavigate()

    const sendScrapRequest = async(clinic, spec) => {

      try{

        const token = localStorage.getItem('token');

        if(!token){
          alert("You should sign in first")
          return navigate("/signin")
        }

        const response = await axios({
          method: 'post',
          url: "http://localhost:8000/doctors/scrap/",
          headers: {"authorization" : `Bearer ${token}`},
          data: {
            field_name: spec,
            clinic_id: clinic
          }
        })

        alert("Scraping task is queued")
        navigate("/admin")
      } catch(error){
        console.log(error)
      }
    }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const clinic = data.get('clinic')
    const spec = data.get('speciality')
    sendScrapRequest(clinic, spec)

  };

  if (isUserAdmin){

  return (
    <Container style={{marginTop:70}}>
      <Link to={"/admin"}>Back to panel</Link>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="clinic">Clinic:</label>
        <select name="clinic" required style={{width:300}}>
          <option value={'CCH'}>Cyprus Central Hospital</option>
        </select>
      </div>
      <br></br>
      <div>
        <label htmlFor="speciality">Speciality:</label>
        <select name="speciality" required style={{width:300}}>
        <option key={'*'} value={'*'} >all</option>
          {specs.map( (spec) => {
            return (
              <option key={spec} value={spec}>{spec}</option>
            )
          })}
          
        </select>
      </div>
      <br></br>
      <button type="submit" style={{backgroundColor:'#424242'}}>Submit</button>
      </form>
    </Container>
    
  );
  }

  return (<p>You should be admin to access this panel</p>)
};


const specs = [
  'Aesthetics and Plastic Reconstructive Surgery',
  'Anesthesia and Reanimation',
  'Cardiology',
  'Cardiovascular Surgery',
  'Dentist',
  'Eye Health and Diseases',
  'Gastroenterology',
  'General Surgery',
  'Gynecology and Obstetrics',
  'IN VITRO FERTILIZATION',
  'Internal Medicine',
  'Laboratory',
  'Language and Speech Disorders',
  'Neurology',
  'Nutrition and Diet',
  'Ophthalmology',
  'Oral, Dental and Maxillofacial Surgery',
  'Orthodontics',
  'Orthopedics and Traumatology',
  'Otorhinolaryngology',
  'Pathology',
  'Pediatrics',
  'Pedodontics (Pediatric Dentistry)',
  'Periodontology (Gingival Diseases)',
  'Physical Treatment and Rehabilitation',
  'Psychiatry',
  'Psychology',
  'Pulmonology',
  'Radiology',
  'Skin Diseases',
  'Techniques Podology',
  'Urology',
  'X Orthesis and Prosthesis'
];


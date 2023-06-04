import * as React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export default function FilterForm(props) {

    const handleSpecChange = (event, newValue) => {
        props.setSpec(newValue)
    }

    const handleClinicChange = (event, newValue) => {
        props.setClinic(newValue)
    }

    const handleSortChange = (event, newValue) => {
        props.setOrderBy(newValue)
    }


  return (
    <Grid container spacing={2}>

        <Grid item xs={6} md={6}>
            <Stack spacing={2}>
            <p style={{textAlign:'start', fontSize:20}}>Filter</p>
            <Autocomplete
                id="size-small-standard"
                size="small"
                options={specs}
                getOptionLabel={(option) => option}
                defaultValue={props.spec}
                onChange={handleSpecChange}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Speciality"
                />
                )}
            />
            <Autocomplete
                id="size-small-standard"
                size="small"
                options={clinics}
                getOptionLabel={(option) => option}
                defaultValue={props.clinic}
                onChange={handleClinicChange}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Clinic"
                />
                )}
            />
            </Stack>

            
        </Grid>

        <Grid item xs={4} md={4}>

            <Stack spacing={2}>
            <p style={{textAlign:'start', fontSize:20}}>Sort</p>
            <Autocomplete
                id="size-small-standard"
                size="small"
                options={sort}
                getOptionLabel={(option) => option}
                defaultValue={props.orderBy}
                onChange={handleSortChange}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Sort by"
                />
                )}
            />
            </Stack>
            
        </Grid>
    </Grid>
  );
}


const specs = [
    'all',
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

const clinics = [
    "Cyprus Central Hospital"
];

const sort = [
    'reviews',
    'alphabet'
]
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export default function AdminFilterForm() {
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
                defaultValue={specs[0]}
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
                defaultValue={clinics[0]}
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
            <p style={{textAlign:'start', fontSize:20}}>Date</p>
            <input type={"date"} style={{marginTop:20, height:40}}></input>
            </Stack>
            
        </Grid>
    </Grid>
  );
}


const specs = [
    'All',
    'spec1',
    'spec1'
];

const clinics = [
    'All',
    'cl1',
    'cl1'
];

const sort = [
    'reviews',
    'alphabet'
]
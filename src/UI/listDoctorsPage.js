import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchBar from '../components/search/searchBar';
import FilterForm from '../components/filter/filterForm';
import { Filter } from '@mui/icons-material';
import DoctorsList from '../components/list/doctorsList';

export default function ListDoctorsPage(){


    return ( <Box
        sx={{
          width: "100%",
          height: 'auto',
          marginTop:10
        }}
      >
        <Container>
          <FilterForm></FilterForm>
          <br></br>
          <br></br>
          <br></br>
          <DoctorsList></DoctorsList>
        </Container>
        
        </Box>)
}
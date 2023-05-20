import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function MainBox(props){


    return (
        <Box
          sx={{
            width: "100%",
            height: 'auto',
            backgroundColor: 'primary.main',
          }}
        ><Container>{props.children}</Container></Box>
    )
}

export default MainBox
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid } from '@mui/material';

export default function Review(){


    return (

        <div>
            <span>
                <StarIcon style={{color:'#4caf50'}}></StarIcon>
                <StarIcon style={{color:'#4caf50'}}></StarIcon>
                <StarIcon style={{color:'#4caf50'}}></StarIcon>
                <StarIcon style={{color:'#4caf50'}}></StarIcon>
                <StarBorderIcon style={{color:'#4caf50'}}></StarBorderIcon>
            </span>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>

            <span>
            <p style={{color:'#424242',fontSize:14}}>Hassan el abdallah</p>
            <p style={{color:'#424242',fontSize:14}}>19th june 2023</p>
            </span>
            
        </div>
    )
}
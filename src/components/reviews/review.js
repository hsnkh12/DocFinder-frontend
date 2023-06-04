import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Review(props){

    const filledStars = props.review.rate
    const unFilledStars = 5 - props.review.rate

    return (

        <div style={{textAlign:'start'}}>
            <span>
            {[...Array(filledStars)].map((_, index) => (
                <StarIcon key={index} style={{ color: '#4caf50', fontSize:30}} />
            ))}
            {[...Array(unFilledStars)].map((_, index) => (
                <StarBorderIcon key={index} style={{ color: '#4caf50' , fontSize:30}} />
            ))}
            </span>
            
            <p>{props.review.description}</p>

            <span>
            <p style={{color:'#424242',fontSize:14}}>{props.review.user.username}</p>
            <p style={{color:'#424242',fontSize:14}}>{props.review.date_added.slice(0, 10)}</p>
            </span>
            
        </div>
    )
}
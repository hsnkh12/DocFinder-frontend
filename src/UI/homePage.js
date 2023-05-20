import MainBox from '../components/box/mainBox';
import SearchField from '../components/search/searchField';
import TitleLogo from '../components/titleLogo'



function HomePage(){


    return (
        <>
        < MainBox>  

        <TitleLogo />
        <SearchField />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </MainBox>

        <img src={process.env.PUBLIC_URL + 'doc-image.jpeg'}/>
        </>
    )
}


export default HomePage
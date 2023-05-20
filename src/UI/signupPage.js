import MainBox from "../components/box/mainBox"
import SignUpForm from "../components/auth/signupForm"
import TitleLogo from "../components/titleLogo"

function SignUpPage(){


    return (
        <>
        <MainBox>
            <TitleLogo />
            <SignUpForm />
        </MainBox>
        <img src={process.env.PUBLIC_URL + 'doc-image.jpeg'}/>
        </>
    )
}


export default SignUpPage
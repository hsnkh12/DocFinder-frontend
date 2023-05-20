import MainBox from "../components/box/mainBox"
import SignInForm from "../components/auth/signinForm"
import TitleLogo from "../components/titleLogo"

function LoginPage(){


    return (
        <>
        <MainBox>
            <TitleLogo />
            <SignInForm />
        </MainBox>
        <img src={process.env.PUBLIC_URL + 'doc-image.jpeg'}/>
        </>
    )
}


export default LoginPage
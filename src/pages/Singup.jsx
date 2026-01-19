import react from "react";
import signupImg from "../assets/signup.png"
import Template from "../components/Template";

function Singup({setIsLoggedIn}) {
    return(
               <Template 
                title="Join millions learning to code with StudyNotion for free"
                desc1="Build skills for today, tomorrow and beyond "
                desc2="Education to future-proof your Career"
                image={signupImg}
                formType="signup"
                setIsLoggedIn = {setIsLoggedIn}
                
               />
      
    ) 
}

export default Singup;

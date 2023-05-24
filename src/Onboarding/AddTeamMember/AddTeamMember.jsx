import styles from "./addTeamMember.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Image from "../../Component/Image/Image";
import { FormControl, FormLabel, Input, Select} from "@chakra-ui/react";
import Button from "../../Component/Button/Button";
import { useState } from "react";
// import validate from "../../validate";


const AddTeamMember = () => {


    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleInputChange (e) {
        setEmail(e.target.value)      
    }
    const checkValidation = (e) => {
      e.preventDefault();
      const regex =
        /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        if (regex.test(email)) {
          // setMessage('Valid email')
        }else if (email === "") {
          setMessage("Please enter your email")
        }else if (!regex.test(email)) {
          setMessage("Invalid format")
        }else {
          setMessage("")
        }
        
        // if (!value.email) {
        //   errors.email = "Email is required";
        // } else if (!regex.test(value.email)) {
        //   errors.email = "Invalid format";
        // }
    }
  // const [errors, setFormError] = useState({});
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let email = e.target.value;
  //   console.log(email);
  //   const userData = {
  //     email: e.target.value
  //   };
  //   console.log(userData);
  //   // const err = validate(userData);
  //   console.log(err);
  //   setFormError(err);
  // };
  

  return (
    <div className={styles.main}>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className={styles.addusers}>
          <h5 className={styles.logo}>SMARTLEND</h5>
          <h4 className={styles.title}>Add team member</h4>
          
          <form onSubmit={checkValidation}>
          <FormControl marginBottom={"15px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
               Email address (require)
              </FormLabel>
              <Input
                variant={"outline"}
                size="sm"
                type="email"
                name="email"
                placeholder="e.g smartlend@gmail.com"
                onChange={handleInputChange}
              />
              {/* {!isError? (
                <FormHelperText>Enter your work email address</FormHelperText>
              ): (
                <FormErrorMessage>Email is required</FormErrorMessage>
              ) }
               <FormErrorMessage>{errors.email}</FormErrorMessage> */}
            </FormControl>

            <FormControl marginBottom={"30px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
               Permission (require)
              </FormLabel>
              <Select placeholder="Select" size={"sm"} color={"gray"}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </Select>
            </FormControl>

            <div className="fetch_container">
              <div className={styles.fetch}>
                <p>halimaibrahim123@gmail.com</p>
                <div className={styles.closeicon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                  <g id="Menu / Close_MD"> 
                  <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                  </g>
                  </g>
                  </svg>
                  </div>
              </div> 
              <div className={styles.fetch}>
                <p>chiomachris09@gmail.com</p>
                <div className={styles.closeicon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                  <g id="Menu / Close_MD"> 
                  <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                  </g>
                  </g>
                  </svg>
                  </div>
              </div> 
            </div>
            <p className={styles.errormsg}>{message}</p>
            <Button><a>Continue</a></Button>
            <div className={styles.skipnav}>
              <p>Skip</p>
            </div>
            
          </form>
        </div>
      </FormBox>
    </div>
  );
};

export default AddTeamMember;

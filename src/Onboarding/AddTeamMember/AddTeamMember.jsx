import styles from "./addTeamMember.module.scss";
import FormBox from "../../Component/FormBox/FormBox";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Image from "../../Component/Image/Image";
import { FormControl, FormLabel, Input, Select} from "@chakra-ui/react";
import Button from "../../Component/Button/Button";
// import { useState } from "react";

const AddTeamMember = () => {
  // const [input, setInput] = useState('');
  // const handleInputChange = (e) => setInput(e.target.value)
  // const isError = input === "";
  return (
    <div className={styles.main}>
      <ImageBox>
        <Image />
      </ImageBox>
      <FormBox>
        <div className={styles.addteam}>
          <h5 className={styles.logo}>SMARTLEND</h5>
          <h4 className={styles.title}>Add team member</h4>
          <form>
          <FormControl isRequired marginBottom={"15px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
               Email address
              </FormLabel>
              <Input
                variant={"outline"}
                size="sm"
                type="text"
                // value={input}
                name="fullName"
                placeholder="e.g @halimaibrahim123@gmail.com"
                // onChangeHandle={handleInputChange}
              />
              {/* {!isError? (
                <FormHelperText>Enter your work email address</FormHelperText>
              ): (
                <FormErrorMessage>Email is required</FormErrorMessage>
              ) } */}
            </FormControl>

            <FormControl isRequired marginBottom={"30px"}>
              <FormLabel fontWeight={400} fontSize={"14px"}>
               Permission
              </FormLabel>
              <Select placeholder="Select" size={"sm"} color={"gray"}>
                <option value="option1">Admin</option>
                <option value="option2">User</option>
              </Select>
            </FormControl>

            <div>
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

            <Button>Continue</Button>
            <div className={styles.skipnav}>
              <p>Skip</p>
              {/* <div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Chevron_Right_MD"> 
                <path id="Vector" d="M10 8L14 12L10 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                </g> 
                </g>
                </svg>
              </div> */}
            </div>
            
          </form>
        </div>
      </FormBox>
    </div>
  );
};

export default AddTeamMember;

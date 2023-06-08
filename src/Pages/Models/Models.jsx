// import { BiSearch } from "react-icons/bi";
// import styles from "./Models.module.scss";
// import Logo from "./ModelIcons/SLogo.svg";
import ModelTop from "./ModelTop";
import BasicInformation from "./BasicInfo/BasicInformation";
import Steps from "./Steps";



const Models = () => {
  return (
    <div>
      <ModelTop />
      <Steps/>

      <BasicInformation/>
      {/* <Previewandconfirm/> */}
    </div>
  )
};

export default Models;

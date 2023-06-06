// import { BiSearch } from "react-icons/bi";
// import styles from "./Models.module.scss";
// import Logo from "./ModelIcons/SLogo.svg";
import ModelTop from "./ModelTop";
import BasicInformation from "./BasicInfo/BasicInformation";
import Parameters from "./BasicInfo/Parameters";
import Steps from "./Steps";
import Previewandconfirm from "./Previewandconfirm";



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

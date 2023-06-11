// import { BiSearch } from "react-icons/bi";
// import styles from "./Models.module.scss";
// import Logo from "./ModelIcons/SLogo.svg";
// import Index from "./Index"
import ModelTop from "./ModelTop";
// import OmitModel from "./OmitedModel/OmitModel";

import BasicInformation from "./BasicInfo/BasicInformation";
import Steps from "./Steps";
import { Modal, useSteps,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton, 
 } from "@chakra-ui/react";
import Createanalysis from "./Createanalysis/createanalysis";
import Scores from "./Scores/Scores";
import Review from "./Review/Review";
import Previewandconfirm from "./Previewandconfirm";
import { useNavigate } from "react-router-dom";
const steps = [
  { title: "First", description: "Basic Information" },
  { title: "Second", description: "Bank statement analysis" },
  { title: "Third", description: "Credit report analysis" },
  { title: "Fourth", description: "Wrap up" },

  { title: "Fifth", description: "Preview and continue" },
];

const Models = () => {
  const navigate = useNavigate()
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const stepHandler = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
     
      <ModelTop />
      {/* <Index/> */}
      <Steps
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        steps={steps}
      />

      {activeStep === 0 && <BasicInformation stepHandler={stepHandler} />}
      {activeStep === 1 && <Createanalysis stepHandler={stepHandler} />}
      {activeStep === 2 && <Scores stepHandler={stepHandler} />}
      {activeStep === 3 && <Review stepHandler={stepHandler} />}

      {activeStep === 4 && <Review stepHandler={stepHandler} />}
      <Modal   closeOnOverlayClick={false} isOpen={activeStep === 4} onClose={()=>{
        navigate("/layout/models")
      }}>
        <ModalOverlay />
        <ModalContent p={0}>
          <ModalCloseButton />
          <ModalBody p={0}>
          <Previewandconfirm onClose = {() => navigate("/layout/models")} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Models;

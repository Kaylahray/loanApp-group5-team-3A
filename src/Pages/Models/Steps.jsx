import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Progress,
  Box,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Basic Information" },
  { title: "Second", description: "Bank statement analysis" },
  { title: "Third", description: "Credit report analysis" },
  { title: "Fourth", description: "Wrap up" },

  { title: "Fifth", description: "Preview and continue" },
];

function Smartlend() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box position="relative">
      <Stepper size="sm" index={activeStep} gap="0" w="70%" mx="auto" mt={10}>
        {steps.map((step, index) => (
          <Step key={index} gap="0">
            <Box flexShrink="0">
              <Box transform="translateX(-50%)">
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepIndicator bg="white" boxSize={3}>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
            </Box>
          </Step>
        ))}
      </Stepper>

      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
}

export default Smartlend;

// import React from "react";

// import {
//   Step,
//   StepDescription,
//   StepIcon,
//   StepIndicator,
//   StepNumber,
//   StepSeparator,
//   StepStatus,
//   // StepTitle,
//   Stepper,
//   Box,
//   Progress
// } from "@chakra-ui/react";

// import { useSteps } from "@chakra-ui/react";

// const Steps = [
//   { title: "First", description: "Basic Information" },
//   { title: "Second", description: "Bank Statement analysis" },

//   { title: "Third", description: "Credit report analysis" },
//   { title: "Fourth", description: "Wrap up" },

//   { title: "Fifth", description: "Preview and confirm" },
// ];

// function Smartlend() {
//   const { activeStep, setActiveStep } = useSteps({
//     index: 1,
//     count: Steps.length,
//   });

//   const activeStepText = Steps[1].description;

//   const max = Steps.length - 1;
//   const progressPercent = (1 / max) * 100;

//   return (
//     <Box position="relative">
//       <Stepper size="sm" index={1} gap="0">
//         {Steps.map((Step, index) => (
//           <Step key={index} gap="0">
//             <StepIndicator bg="white">
//               <StepStatus complete={<StepIcon />} />
//             </StepIndicator>
//           </Step>
//         ))}
//       </Stepper>
//       <Progress
//         value={40}
//         position="absolute"
//         height="3px"
//         top="10px"
//         width="full"
//         zindex={-1}
//       />
//     </Box>
//   );
// }
// export default Smartlend;

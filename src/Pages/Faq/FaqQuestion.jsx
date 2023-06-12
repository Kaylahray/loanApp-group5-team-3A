import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function FaqQuestion({ question, answer }) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            color= "black"
            fontWeight="500"
            fontsize="bold"
            padding="1rem 0.5rem"
          >
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box as="span" color="grey"fontSize="14px" padding="1rem 0.5rem">
          {answer}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
}

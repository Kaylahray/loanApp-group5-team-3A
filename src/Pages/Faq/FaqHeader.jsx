import FaqBody from "./FaqBody";
import "./Faq.scss"
// import styles from "./Dashboard.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,

} from "@chakra-ui/react";

export default function FaqHeader() {
  return (
    <div>
      <div className="Faq-top">
        <div className="faq-child">
          <h1>FAQs</h1>
          <div>
            <button>
              <img src="/chat-Images/search.svg" alt="" />
              search
            </button>
          </div>
        </div>
        <div>create model</div>
      </div>
      <FaqBody
        Accordion={
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            
            
          </Accordion>
          
        }
      />
    </div>
  );
};



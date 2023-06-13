import FaqQuestion from "./FaqQuestion";
import "./Faq.scss";
import styles from "../Dashboard/Dashboard.module.scss";
import { Accordion } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FaqHeader() {
  const allQuestion = [
    { question: "How to add a team member?", answer: "Go to the teams page" },
    {
      question: "Are you confused on how to create models?",
      answer: "A click on the create model button ll help",
    },
    {
      question: "Do you want to access customer profile?",
      answer: "Go back to the models page,",
    },
    {
      question: "Lost your password?",
      answer: "No worries, set a new one in our reset password page",
    },
    {
      question: "Do you want to understand the application procedures?",
      answer: "Study the applications page again",
    },
    {
      question: "you wanna meet up with friends?",
      answer: "chat a-thon with our chat feature",
    },
  ];
  return (
    <div className="top">
      <div className="Faq-top">
        <div className="faq-child">
          <h1 className="heading-FAQ">FAQs</h1>
          <div>
            <button className="FAQ-btn">
              <img src="/chat-Images/search.svg" alt="" />
              <span className="FAQ-span"> search</span>
            </button>
          </div>
        </div>
        <div className={styles.dashright}>
          <button className={styles.dashnavbtn}>
            {" "}
            <Link to={"/model"}> Create Model</Link>
          </button>
        </div>
      </div>
      <div>
        <Accordion
          defaultIndex={[0]}
          allowToggle
          borderRadius="0.3rem"
          border="1px solid"
          borderColor="blackAlpha.300"
        >
          {allQuestion.map((item, i) => (
            <FaqQuestion
              key={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Container, Switch, Text, Box, HStack } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

// const Notification = () => {
//   return (
//     <div>

//       <Text>Notifications</Text>
//       <div>
//       <div>
//         <h4>Push Notification</h4>
//         <p>
//           Get push notification to stay updated with what is going on when you
//           are not on SMARTLEND. You can turn it off anytime.

//         </p>
//         </div>
//         <div>
//           <h4>Email Notification</h4>
//           <p>
//             Get email notification to stay updated with what is going on when
//             you are not on SMARTLEND.
//           </p>
//         </div>
//       </div>
//       <div>
//         <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const Notify = [
  {
    id: 1,
    title: "Push Notification",
    message:
      "Get push notification to stay updated with what is going on when you are not on SMARTLEND. You can turn it off anytime. ",
  },
  {
    id: 2,
    title: "Email Notification",
    message:
      "Get email notification to stay updated with what is going on when you are not on SMARTLEND. You can turn if off anytime.",
  },
];

const NotifyList = [
  {
    id: 1,
    item: "A new application is submitted",
  },
  {
    id: 2,
    item: "A decision is made on a loan",
  },
  {
    id: 3,
    item: "A loan is approved despite failing the prediction model",
  },
  {
    id: 4,
    item: "I receive direct messages",
  },
  {
    id: 5,
    item: " A new prediction model is created",
  },
];

const Notification = (props) => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const [notify, setNotify] = useState("");
  const [notifyList, setNotifyList] = useState("");

  return (
    <div>
      {/* <Container bg="red" p={0} m={0} display="flex" flexDirection="column" gap={10}>  */}
      <Text  fontSize={20} mt="16px" fontWeight={900}>
        Notification
      </Text>
      {Notify.map((Notify) => (
        <Container maxW={480} p={0} m={0} mt={5}>
          <Box key={notify.id} display="flex" gap={2} alignItems="center">
            <div>
              <Text fontSize={14} as="b">
                {Notify.title}
              </Text>
              <Text fontSize={10}>{Notify.message}</Text>
            </div>
            <div>
              <Switch />
            </div>
          </Box>
        </Container>
      ))}{" "}
      <div>
        <Container p={0} m={0} mt={10}>
          <Text as="b" fontSize={14} mt={10}>
            Notify me when
          </Text>
          {NotifyList.map((NotifyList) => (
            <Container maxW={350} p={0} m={0} key={NotifyList.id}> 
                <Checkbox size="sm" alignItems="center" mb={2} color={"gray"} >
               <Box as="span" color={"black"} fontSize={"12px"}> {NotifyList.item}</Box>
                </Checkbox>
            </Container>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Notification;

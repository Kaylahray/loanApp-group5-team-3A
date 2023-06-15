import React, {useState} from "react";
import { Container, Switch, Text } from "@chakra-ui/react";
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

export default Notification;



const Notify = [
    {
        id: 1,
        title : "Push Notification",
        message: "Get push notification to stay updated with what is going on when you are not on SMARTLEND. You can turn it off anytime. ",
    },
    {
        id: 2,
        title: "Email Notification",
        message: "Get email notification to stay updated with what is going on when you are not on SMARTLEND. You can turn if off anytime."
    },
]

const NotifyList = [
    {
        id: 1,
        item: "A new application is submitted"
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
    }
]

 const Notifications =(props) =>{
    const [checkedItems, setCheckedItems] = React.useState([false, false])
    const [notify, setNotify] = useState("")
    const [notifyList, setNotifyList] = useState("")

    return (
        <div>
               <h3>Notifications</h3>
                {Notify.map((Notify) => (
                    <Container>
<Box key ={notify.id}
> 
<Text fontSize={14} as="b">
    {Notify.title}
</Text>
<Text fontSize={10}>
{Notify.message}
</Text>
<Switch/>
    </Box>
                    </Container>
                ))
    
                     }     </div>
    

             
    )

                    }


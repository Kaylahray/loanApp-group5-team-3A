import React from "react";
import { Card, MenuButton, Menu } from "@chakra-ui/react";
import { useState } from "react";
import CreateModel from "./CreateModel";

const CreatedModels = ({status, title}) => {
//   const status = props.status;
//   const title = props.title;

  // const CreatedModels = (props) => {
  //     const modelStatus = props.modelStatus;

  return (
    <div>
      {status.map((status) => (
        <Card key={status.id}>
                    {item.title}

          <h4>
            {status.title}</h4>
            <p> {status.author}</p>
          <div>
            <Menu>
            <MenuButton/>
            </Menu>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CreatedModels;

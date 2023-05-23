import "./personalDetailForm.scss";
import { useState } from "react";
import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import Button from "../../Component/Button/Button";

const PersonalDetailForm = () => {
  const [errors, setErrors] = useState({ firstName: false, lastName: false, role: false });
  const [firstNameValue, setFirstNameValue] = useState("");
  const handleFirstNameChange = (e) => setFirstNameValue(e.target.value);
  const [lastNameValue, setLastNameValue] = useState("");
  const handleLastNameChange = (e) => setLastNameValue(e.target.value);
  const [roleValue, setRoleValue] = useState("");
  const handleRoleChange = (e) => setRoleValue(e.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors({
      firstName: firstNameValue === "",
      lastName: lastNameValue === "",
      role: roleValue === ""
    });
  }

  return (
    <div className="personal-detail-page">
      <div className="man-picture">
        <img src="./images/man.svg" />
      </div>
      <div className="detail-form">
        <div className="form-logo">
          <img src="./images/img.svg" />
        </div>
        <div className="form-data">
          <div className="form-heading">Personal detail</div>
          <form className="form-inputs" onSubmit={handleFormSubmit}>
            <div>
              <FormControl isInvalid={errors.firstName}>
                <FormLabel>First name (required)</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="e.g. Miriam"
                  value={firstNameValue}
                  onChange={handleFirstNameChange}
                />
                <FormErrorMessage>First name is required.</FormErrorMessage>
              </FormControl>
            </div>
            <div>
              <FormControl isInvalid={errors.lastName}>
                <FormLabel>Last name (required)</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="e.g. Miriam"
                  value={lastNameValue}
                  onChange={handleLastNameChange}
                />
                <FormErrorMessage>Last name is required.</FormErrorMessage>
              </FormControl>
            </div>
            <div>
              <FormControl isInvalid={errors.role}>
                <FormLabel>Role (required)</FormLabel>
                <Input
                  type="text"
                  name="role"
                  placeholder="e.g. Bank manager"
                  value={roleValue}
                  onChange={handleRoleChange}
                />
                <FormErrorMessage>Role is required.</FormErrorMessage>
              </FormControl>
            </div>
            <div>
              <Button>Continue</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailForm;
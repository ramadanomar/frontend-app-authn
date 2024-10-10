import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useIntl } from "@edx/frontend-platform/i18n";
import PropTypes from "prop-types";

import validatePhoneNumber from "./validator"; // Import the phone number validator
import { FormGroup } from "../../../common-components";
import { clearRegistrationBackendError } from "../../data/actions";

/**
 * Phone Number field wrapper. It accepts the following handlers:
 * - handleChange for setting value change
 * - handleErrorChange for setting error
 *
 * It is responsible for:
 * - Performing phone number field validations
 * - Clearing error on focus
 * - Setting value on change
 */
const PhoneNumberField = (props) => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const { handleErrorChange, name } = props;

  const handleOnBlur = (e) => {
    const { value } = e.target;
    const fieldError = validatePhoneNumber(value, formatMessage);
    if (fieldError) {
      handleErrorChange(name, fieldError);
    }
  };

  const handleOnFocus = () => {
    handleErrorChange(name, "");
    dispatch(clearRegistrationBackendError(name));
  };

  return (
    <FormGroup
      {...props}
      handleBlur={handleOnBlur}
      handleFocus={handleOnFocus}
    />
  );
};

PhoneNumberField.defaultProps = {
  errorMessage: "",
  name: "phone_number",
};

PhoneNumberField.propTypes = {
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
};

export default PhoneNumberField;

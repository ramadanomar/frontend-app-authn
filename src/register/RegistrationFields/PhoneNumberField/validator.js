const validatePhoneNumber = (value, formatMessage) => {
  if (!value) {
    return formatMessage({
      id: "error.phone_number.required",
      defaultMessage: "Phone number is required.",
    });
  }
  const phoneNumberRegex = /^\+\d+$/;
  if (!phoneNumberRegex.test(value)) {
    return formatMessage({
      id: "error.phone_number.invalid",
      defaultMessage:
        'Enter a valid phone number starting with "+" followed by numbers.',
    });
  }
  return "";
};

export default validatePhoneNumber;

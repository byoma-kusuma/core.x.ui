import { object, string, boolean } from "yup";

const GroupFormValidator = object({
  name: string().required("First name is required"),
  description: string().required("Last name is required"),
  visible: boolean().required()
});

export default GroupFormValidator;

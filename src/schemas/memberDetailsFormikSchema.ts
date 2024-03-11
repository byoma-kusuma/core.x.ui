import { FormikSchema } from "utils/formik/formikUtils";
import * as Yup from "yup";

export const memberDetailsFormikSchema = {
  title: {
    type: "text",
    required: false,
    initialValue: ""
  },
  firstName: {
    type: "text",
    required: true,
    initialValue: "",
    validator: Yup.string().min(2).required("Required")
  },
  lastName: {
    type: "text",
    required: true,
    initialValue: "",
    validator: Yup.string().min(2).required("Required")
  },
  middleName: {
    type: "text",
    required: false,
    initialValue: ""
  },
  active: {
    type: "boolean",
    required: true,
    initialValue: true
  },
  isMember: {
    type: "boolean",
    required: true,
    initialValue: true
  },
  email: {
    type: "text",
    required: true,
    initialValue: "",
    validator: Yup.string().email("Invalid email").required("Required")
  },
  phoneMobile: {
    type: "tel",
    required: false,
    initialValue: ""
  },
  phoneLand: {
    type: "tel",
    required: false,
    initialValue: ""
  },
  phoneOther: {
    type: "tel",
    required: false,
    initialValue: ""
  },
  centreId: {
    type: "number",
    required: true,
    initialValue: null,
    validator: Yup.number().integer().required("Required")
  },
  yearOfBirth: {
    type: "number",
    required: false,
    initialValue: null
  },
  membershipType: {
    type: "text",
    required: false,
    initialValue: null
  },
  gender: {
    type: "text",
    required: false,
    initialValue: null
  },
  sanghaJoinDate: {
    type: "date",
    required: false,
    initialValue: null
  },
  viber: {
    type: "text",
    required: false,
    initialValue: ""
  },
  messenger: {
    type: "text",
    required: false,
    initialValue: ""
  },
  insta: {
    type: "text",
    required: false,
    initialValue: ""
  },
  note: {
    type: "text",
    required: false,
    initialValue: ""
  },
  currentStreetAddress: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Current Street Address"
  },
  permanentStreetAddress: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Permanent Street Address"
  },
  currentCity: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Current City"
  },
  permanentCity: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Permanent City"
  },
  currentStateProvince: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Current State/Province"
  },
  permanentStateProvince: {
    type: "text",
    required: false,
    initialValue: "",
    label: "Permanent State/Province"
  },
  currentCountry: {
    type: "text",
    required: true,
    initialValue: "",
    label: "Current Country"
  },
  permanentCountry: {
    type: "text",
    required: true,
    initialValue: "",
    label: "Permanent Country"
  },
  refugeName: {
    type: "text",
    required: false,
    initialValue: ""
  },
  yearOfRefuge: {
    type: "number",
    required: false,
    initialValue: null
  },
  yearOfRefugeCalendarType: {
    type: "text",
    required: false,
    initialValue: null
  },
  dateOfApplication: {
    type: "date",
    required: false,
    initialValue: null
  },
  dateOfApplicationCalendarType: {
    type: "text",
    required: false,
    initialValue: null
  },
  dharmaInstructor: {
    type: "text",
    required: false,
    initialValue: ""
  },
  education: {
    type: "text",
    required: false,
    initialValue: ""
  },
  occupation: {
    type: "text",
    required: false,
    initialValue: ""
  },
  memberNumber: {
    type: "text",
    required: false,
    initialValue: ""
  }
} as FormikSchema;

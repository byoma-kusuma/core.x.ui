import { object, string, boolean, mixed, date } from "yup";
import {
  CentreAffiliation_Type,
  GenderType,
  MembershipType
} from "../generated/graphql";

const MemberFormValidator = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Please enter a valid email address").nullable(),
  active: boolean(),
  middleName: string().nullable(),
  title: string().nullable(),
  isMember: boolean().required(),
  phonePrimary: string().nullable(),
  phoneSecondary: string().nullable(),
  centerAffiliation: mixed<CentreAffiliation_Type>()
    .oneOf(Object.values(CentreAffiliation_Type))
    .required(),
  membershipType: mixed<MembershipType>()
    .nullable()
    .oneOf([...Object.values(MembershipType), null]),
  permanentAddress: string().nullable(),
  currentAddress: string().nullable(),
  dob: date().max(new Date()).nullable(),
  gender: mixed<GenderType>()
    .nullable()
    .oneOf([...Object.values(GenderType), null])
    .nullable(),
  sanghaJoinDate: date().max(new Date()).nullable(),
  refugeName: string().nullable(),
  viber: string().nullable(),
  messenger: string().nullable(),
  insta: string().nullable()
});

export default MemberFormValidator;

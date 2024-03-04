import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JWT: any;
};

export type Abhisekha = {
  __typename?: "Abhisekha";
  abhisekhaEvents: Array<EventAbhisekhaWithoutAbhisekha>;
  abhisekhaMembers: Array<MemberAbhisekhaWithoutAbhisekha>;
  abhisekhaResources: Array<AbhisekhaResourceWithoutAbhisekha>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  /** Name of the abhisekha */
  description: Scalars["String"];
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  /** Name of the abhisekha */
  name: Scalars["String"];
  /** Resources for the abhisekha */
  resources: Array<Resource>;
  /** Name of the abhisekha */
  teacher: Scalars["String"];
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
};

export type AbhisekhaCreateNestedOneWithoutAbhisekhaResourceInput = {
  connect?: InputMaybe<AbhisekhaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbhisekhaCreateOrConnectWithoutAbhisekhaResourceInput>;
  create?: InputMaybe<AbhisekhaCreateWithoutAbhisekhaResourceInput>;
};

export type AbhisekhaCreateNestedOneWithoutEventAbhisekhaInput = {
  connect?: InputMaybe<AbhisekhaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbhisekhaCreateOrConnectWithoutEventAbhisekhaInput>;
  create?: InputMaybe<AbhisekhaCreateWithoutEventAbhisekhaInput>;
};

export type AbhisekhaCreateNestedOneWithoutMemberAbhisekhaInput = {
  connect?: InputMaybe<AbhisekhaWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbhisekhaCreateOrConnectWithoutMemberAbhisekhaInput>;
  create?: InputMaybe<AbhisekhaCreateWithoutMemberAbhisekhaInput>;
};

export type AbhisekhaCreateOrConnectWithoutAbhisekhaResourceInput = {
  create: AbhisekhaCreateWithoutAbhisekhaResourceInput;
  where: AbhisekhaWhereUniqueInput;
};

export type AbhisekhaCreateOrConnectWithoutEventAbhisekhaInput = {
  create: AbhisekhaCreateWithoutEventAbhisekhaInput;
  where: AbhisekhaWhereUniqueInput;
};

export type AbhisekhaCreateOrConnectWithoutMemberAbhisekhaInput = {
  create: AbhisekhaCreateWithoutMemberAbhisekhaInput;
  where: AbhisekhaWhereUniqueInput;
};

export type AbhisekhaCreateWithoutAbhisekhaResourceInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  eventAbhisekha?: InputMaybe<EventAbhisekhaCreateNestedManyWithoutAbhisekhaInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  memberAbhisekha?: InputMaybe<MemberAbhisekhaCreateNestedManyWithoutAbhisekhaInput>;
  name: Scalars["String"];
  teacher: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type AbhisekhaCreateWithoutEventAbhisekhaInput = {
  abhisekhaResource?: InputMaybe<AbhisekhaResourceCreateNestedManyWithoutAbhisekhaInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  memberAbhisekha?: InputMaybe<MemberAbhisekhaCreateNestedManyWithoutAbhisekhaInput>;
  name: Scalars["String"];
  teacher: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type AbhisekhaCreateWithoutMemberAbhisekhaInput = {
  abhisekhaResource?: InputMaybe<AbhisekhaResourceCreateNestedManyWithoutAbhisekhaInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  eventAbhisekha?: InputMaybe<EventAbhisekhaCreateNestedManyWithoutAbhisekhaInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  teacher: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type AbhisekhaMemberDetails = {
  /** Date of abhisekha */
  abhisekhaDate: Scalars["String"];
  /** Place of abhisekha */
  abhisekhaPlace: Scalars["String"];
  /** Id of member who attended the abhisekha */
  memberId: Scalars["Int"];
  /** Member attending the Abhisekha type eg: Peripheral */
  type: Scalars["String"];
};

export type AbhisekhaRelationFilter = {
  is?: InputMaybe<AbhisekhaWhereInput>;
  isNot?: InputMaybe<AbhisekhaWhereInput>;
};

export type AbhisekhaResourceAbhisekhaIdResourceIdCompoundUniqueInput = {
  abhisekhaId: Scalars["Int"];
  resourceId: Scalars["Int"];
};

export type AbhisekhaResourceCreateManyAbhisekhaInput = {
  resourceId: Scalars["Int"];
};

export type AbhisekhaResourceCreateManyAbhisekhaInputEnvelope = {
  data: Array<AbhisekhaResourceCreateManyAbhisekhaInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type AbhisekhaResourceCreateManyResourceInput = {
  abhisekhaId: Scalars["Int"];
};

export type AbhisekhaResourceCreateManyResourceInputEnvelope = {
  data: Array<AbhisekhaResourceCreateManyResourceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type AbhisekhaResourceCreateNestedManyWithoutAbhisekhaInput = {
  connect?: InputMaybe<Array<AbhisekhaResourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AbhisekhaResourceCreateOrConnectWithoutAbhisekhaInput>
  >;
  create?: InputMaybe<Array<AbhisekhaResourceCreateWithoutAbhisekhaInput>>;
  createMany?: InputMaybe<AbhisekhaResourceCreateManyAbhisekhaInputEnvelope>;
};

export type AbhisekhaResourceCreateNestedManyWithoutResourceInput = {
  connect?: InputMaybe<Array<AbhisekhaResourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<AbhisekhaResourceCreateOrConnectWithoutResourceInput>
  >;
  create?: InputMaybe<Array<AbhisekhaResourceCreateWithoutResourceInput>>;
  createMany?: InputMaybe<AbhisekhaResourceCreateManyResourceInputEnvelope>;
};

export type AbhisekhaResourceCreateOrConnectWithoutAbhisekhaInput = {
  create: AbhisekhaResourceCreateWithoutAbhisekhaInput;
  where: AbhisekhaResourceWhereUniqueInput;
};

export type AbhisekhaResourceCreateOrConnectWithoutResourceInput = {
  create: AbhisekhaResourceCreateWithoutResourceInput;
  where: AbhisekhaResourceWhereUniqueInput;
};

export type AbhisekhaResourceCreateWithoutAbhisekhaInput = {
  resource: ResourceCreateNestedOneWithoutAbhisekhaResourceInput;
};

export type AbhisekhaResourceCreateWithoutResourceInput = {
  abhisekha: AbhisekhaCreateNestedOneWithoutAbhisekhaResourceInput;
};

export type AbhisekhaResourceListRelationFilter = {
  every?: InputMaybe<AbhisekhaResourceWhereInput>;
  none?: InputMaybe<AbhisekhaResourceWhereInput>;
  some?: InputMaybe<AbhisekhaResourceWhereInput>;
};

export type AbhisekhaResourceWhereInput = {
  AND?: InputMaybe<Array<AbhisekhaResourceWhereInput>>;
  NOT?: InputMaybe<Array<AbhisekhaResourceWhereInput>>;
  OR?: InputMaybe<Array<AbhisekhaResourceWhereInput>>;
  abhisekha?: InputMaybe<AbhisekhaRelationFilter>;
  abhisekhaId?: InputMaybe<IntFilter>;
  resource?: InputMaybe<ResourceRelationFilter>;
  resourceId?: InputMaybe<IntFilter>;
};

export type AbhisekhaResourceWhereUniqueInput = {
  abhisekhaId_resourceId?: InputMaybe<AbhisekhaResourceAbhisekhaIdResourceIdCompoundUniqueInput>;
};

export type AbhisekhaResourceWithoutAbhisekha = {
  __typename?: "AbhisekhaResourceWithoutAbhisekha";
  abhisekhaId: Scalars["Int"];
  resource: Resource;
  resourceId: Scalars["Int"];
};

export type AbhisekhaResourceWithoutResource = {
  __typename?: "AbhisekhaResourceWithoutResource";
  abhisekha: Abhisekha;
  abhisekhaId: Scalars["Int"];
  resourceId: Scalars["Int"];
};

export type AbhisekhaWhereInput = {
  AND?: InputMaybe<Array<AbhisekhaWhereInput>>;
  NOT?: InputMaybe<Array<AbhisekhaWhereInput>>;
  OR?: InputMaybe<Array<AbhisekhaWhereInput>>;
  abhisekhaResource?: InputMaybe<AbhisekhaResourceListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  eventAbhisekha?: InputMaybe<EventAbhisekhaListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  memberAbhisekha?: InputMaybe<MemberAbhisekhaListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  teacher?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
};

export type AbhisekhaWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

export type Address = {
  __typename?: "Address";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  stateProvince?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
};

export type AddressCreateInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  memberCurrentAddress?: InputMaybe<MemberCreateNestedOneWithoutCurrentAddressInput>;
  memberPermanentAddress?: InputMaybe<MemberCreateNestedOneWithoutPermanentAddressInput>;
  stateProvince?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type AddressCreateNestedOneWithoutMemberCurrentAddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutMemberCurrentAddressInput>;
  create?: InputMaybe<AddressCreateWithoutMemberCurrentAddressInput>;
};

export type AddressCreateNestedOneWithoutMemberPermanentAddressInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AddressCreateOrConnectWithoutMemberPermanentAddressInput>;
  create?: InputMaybe<AddressCreateWithoutMemberPermanentAddressInput>;
};

export type AddressCreateOrConnectWithoutMemberCurrentAddressInput = {
  create: AddressCreateWithoutMemberCurrentAddressInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateOrConnectWithoutMemberPermanentAddressInput = {
  create: AddressCreateWithoutMemberPermanentAddressInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateWithoutMemberCurrentAddressInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  memberPermanentAddress?: InputMaybe<MemberCreateNestedOneWithoutPermanentAddressInput>;
  stateProvince?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type AddressCreateWithoutMemberPermanentAddressInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  memberCurrentAddress?: InputMaybe<MemberCreateNestedOneWithoutCurrentAddressInput>;
  stateProvince?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  memberCurrentAddress?: InputMaybe<MemberRelationFilter>;
  memberIdCurrentAddress?: InputMaybe<IntFilter>;
  memberIdPermanentAddress?: InputMaybe<IntFilter>;
  memberPermanentAddress?: InputMaybe<MemberRelationFilter>;
  stateProvince?: InputMaybe<StringFilter>;
  street?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
};

export type AddressWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  memberIdCurrentAddress?: InputMaybe<Scalars["Int"]>;
  memberIdPermanentAddress?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

export type Auth = {
  __typename?: "Auth";
  /** JWT access token */
  accessToken: Scalars["JWT"];
  /** JWT refresh token */
  refreshToken: Scalars["JWT"];
  user: User;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BoolFilter>;
};

export type Centre = {
  __typename?: "Centre";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  displaySequence: Scalars["Int"];
  displayText?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  stateProvince?: Maybe<Scalars["String"]>;
  streetAddress?: Maybe<Scalars["String"]>;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
};

export type CentreCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<CentreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CentreCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<CentreCreateWithoutMembersInput>;
};

export type CentreCreateOrConnectWithoutMembersInput = {
  create: CentreCreateWithoutMembersInput;
  where: CentreWhereUniqueInput;
};

export type CentreCreateWithoutMembersInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  displaySequence: Scalars["Int"];
  displayText: Scalars["String"];
  name: Scalars["String"];
  stateProvince?: InputMaybe<Scalars["String"]>;
  streetAddress?: InputMaybe<Scalars["String"]>;
};

export type CentreRelationFilter = {
  is?: InputMaybe<CentreWhereInput>;
  isNot?: InputMaybe<CentreWhereInput>;
};

export type CentreWhereInput = {
  AND?: InputMaybe<Array<CentreWhereInput>>;
  NOT?: InputMaybe<Array<CentreWhereInput>>;
  OR?: InputMaybe<Array<CentreWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  displaySequence?: InputMaybe<IntFilter>;
  displayText?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  members?: InputMaybe<MemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  stateProvince?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
};

export type CentreWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ChangePasswordInput = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type CreateAbhisekhaInput = {
  /** Name of the abhisekha */
  description: Scalars["String"];
  /** Name of the abhisekha */
  name: Scalars["String"];
  /** Name of the abhisekha */
  teacher: Scalars["String"];
};

export type CreateEventInput = {
  /** Event end date */
  endDate: Scalars["DateTime"];
  /** Details of members attending the event */
  eventMemberDetails: Array<EventMemberDetails>;
  /** After the event ends or at a certain specific time, the event is locked and event related details cannot be updated/deleted */
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  /** Some notes related to the event */
  notes: Scalars["String"];
  /** Event start date */
  startDate: Scalars["DateTime"];
  /** Type of the event */
  type: Scalars["String"];
};

export type CreateGroupInput = {
  description: Scalars["String"];
  memberIds?: InputMaybe<Array<Scalars["Int"]>>;
  name: Scalars["String"];
  visible: Scalars["Boolean"];
};

export type CreateMemberInput = {
  active: Scalars["Boolean"];
  centreId?: InputMaybe<Scalars["Int"]>;
  currentCity?: InputMaybe<Scalars["String"]>;
  currentCountry?: InputMaybe<Scalars["String"]>;
  currentStateProvince?: InputMaybe<Scalars["String"]>;
  currentStreetAddress?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName: Scalars["String"];
  gender?: InputMaybe<Scalars["String"]>;
  groupIds?: InputMaybe<Array<Scalars["Int"]>>;
  insta?: InputMaybe<Scalars["String"]>;
  isMember: Scalars["Boolean"];
  lastName: Scalars["String"];
  memberAbhisekhaDetails?: InputMaybe<Array<MemberAbhisekhaDetails>>;
  membershipType?: InputMaybe<Scalars["String"]>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  permanentCity?: InputMaybe<Scalars["String"]>;
  permanentCountry?: InputMaybe<Scalars["String"]>;
  permanentStateProvince?: InputMaybe<Scalars["String"]>;
  permanentStreetAddress?: InputMaybe<Scalars["String"]>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type CreateResourceInput = {
  description: Scalars["String"];
  name: Scalars["String"];
  type: Scalars["String"];
  url: Scalars["String"];
};

export type CreateRoleInput = {
  name: Scalars["String"];
};

export type CreateUserInput = {
  memberId: Scalars["Int"];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type EnumGenderTypeFilter = {
  equals?: InputMaybe<GenderType>;
  in?: InputMaybe<Array<GenderType>>;
  not?: InputMaybe<EnumGenderTypeFilter>;
  notIn?: InputMaybe<Array<GenderType>>;
};

export type EnumMembershipTypeFilter = {
  equals?: InputMaybe<MembershipType>;
  in?: InputMaybe<Array<MembershipType>>;
  not?: InputMaybe<EnumMembershipTypeFilter>;
  notIn?: InputMaybe<Array<MembershipType>>;
};

export type EnumTypeFilter = {
  equals?: InputMaybe<Type>;
  in?: InputMaybe<Array<Type>>;
  not?: InputMaybe<EnumTypeFilter>;
  notIn?: InputMaybe<Array<Type>>;
};

export type EnumUserStatusFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<EnumUserStatusFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type Event = {
  __typename?: "Event";
  /** The child events of this event, if this event is a parent event. */
  childEvents: Array<Event>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  /** Event end date */
  endDate: Scalars["DateTime"];
  /** The event Abhisekhas for this event. */
  eventAbhisekha: Array<EventAbhisekhaWithoutEvent>;
  eventAbhisekhas: Array<EventAbhisekhaWithoutEvent>;
  /** The event members for this event. */
  eventMember: Array<EventMemberWithoutEvent>;
  eventMembers: Array<EventMemberWithoutEvent>;
  /** The event resources for this event. */
  eventResource: Array<EventResourceWithoutEvent>;
  eventResources: Array<EventResourceWithoutEvent>;
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  /** After the event ends or at a certain specific time, the event is locked and event related details cannot be updated/deleted */
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  /** Some notes related to the event */
  notes?: Maybe<Scalars["String"]>;
  /** The parent event, if this event is a child event. */
  parentEvent?: Maybe<Event>;
  /** The ID of the parent event, if this event is a child event. */
  parentEventId?: Maybe<Scalars["Int"]>;
  /** Event start date */
  startDate: Scalars["DateTime"];
  /** Type of the event */
  type: Scalars["String"];
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
};

export type EventAbhisekhaCreateManyAbhisekhaInput = {
  eventId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventAbhisekhaCreateManyAbhisekhaInputEnvelope = {
  data: Array<EventAbhisekhaCreateManyAbhisekhaInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventAbhisekhaCreateManyEventInput = {
  abhisekhaId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventAbhisekhaCreateManyEventInputEnvelope = {
  data: Array<EventAbhisekhaCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventAbhisekhaCreateNestedManyWithoutAbhisekhaInput = {
  connect?: InputMaybe<Array<EventAbhisekhaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventAbhisekhaCreateOrConnectWithoutAbhisekhaInput>
  >;
  create?: InputMaybe<Array<EventAbhisekhaCreateWithoutAbhisekhaInput>>;
  createMany?: InputMaybe<EventAbhisekhaCreateManyAbhisekhaInputEnvelope>;
};

export type EventAbhisekhaCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventAbhisekhaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventAbhisekhaCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventAbhisekhaCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventAbhisekhaCreateManyEventInputEnvelope>;
};

export type EventAbhisekhaCreateOrConnectWithoutAbhisekhaInput = {
  create: EventAbhisekhaCreateWithoutAbhisekhaInput;
  where: EventAbhisekhaWhereUniqueInput;
};

export type EventAbhisekhaCreateOrConnectWithoutEventInput = {
  create: EventAbhisekhaCreateWithoutEventInput;
  where: EventAbhisekhaWhereUniqueInput;
};

export type EventAbhisekhaCreateWithoutAbhisekhaInput = {
  event: EventCreateNestedOneWithoutEventAbhisekhaInput;
  type: Scalars["String"];
};

export type EventAbhisekhaCreateWithoutEventInput = {
  abhisekha: AbhisekhaCreateNestedOneWithoutEventAbhisekhaInput;
  type: Scalars["String"];
};

export type EventAbhisekhaEventIdAbhisekhaIdCompoundUniqueInput = {
  abhisekhaId: Scalars["Int"];
  eventId: Scalars["Int"];
};

export type EventAbhisekhaListRelationFilter = {
  every?: InputMaybe<EventAbhisekhaWhereInput>;
  none?: InputMaybe<EventAbhisekhaWhereInput>;
  some?: InputMaybe<EventAbhisekhaWhereInput>;
};

export type EventAbhisekhaWhereInput = {
  AND?: InputMaybe<Array<EventAbhisekhaWhereInput>>;
  NOT?: InputMaybe<Array<EventAbhisekhaWhereInput>>;
  OR?: InputMaybe<Array<EventAbhisekhaWhereInput>>;
  abhisekha?: InputMaybe<AbhisekhaRelationFilter>;
  abhisekhaId?: InputMaybe<IntFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
};

export type EventAbhisekhaWhereUniqueInput = {
  eventId_abhisekhaId?: InputMaybe<EventAbhisekhaEventIdAbhisekhaIdCompoundUniqueInput>;
};

export type EventAbhisekhaWithoutAbhisekha = {
  __typename?: "EventAbhisekhaWithoutAbhisekha";
  abhisekhaId: Scalars["Int"];
  event: Event;
  eventId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventAbhisekhaWithoutEvent = {
  __typename?: "EventAbhisekhaWithoutEvent";
  abhisekha: Abhisekha;
  abhisekhaId: Scalars["Int"];
  eventId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventCreateManyParentEventInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  endDate: Scalars["DateTime"];
  id?: InputMaybe<Scalars["Int"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  notes?: InputMaybe<Scalars["String"]>;
  startDate: Scalars["DateTime"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type EventCreateManyParentEventInputEnvelope = {
  data: Array<EventCreateManyParentEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventCreateNestedManyWithoutParentEventInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventCreateOrConnectWithoutParentEventInput>
  >;
  create?: InputMaybe<Array<EventCreateWithoutParentEventInput>>;
  createMany?: InputMaybe<EventCreateManyParentEventInputEnvelope>;
};

export type EventCreateNestedOneWithoutChildEventsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutChildEventsInput>;
  create?: InputMaybe<EventCreateWithoutChildEventsInput>;
};

export type EventCreateNestedOneWithoutEventAbhisekhaInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEventAbhisekhaInput>;
  create?: InputMaybe<EventCreateWithoutEventAbhisekhaInput>;
};

export type EventCreateNestedOneWithoutEventMemberInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEventMemberInput>;
  create?: InputMaybe<EventCreateWithoutEventMemberInput>;
};

export type EventCreateNestedOneWithoutEventResourceInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutEventResourceInput>;
  create?: InputMaybe<EventCreateWithoutEventResourceInput>;
};

export type EventCreateOrConnectWithoutChildEventsInput = {
  create: EventCreateWithoutChildEventsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEventAbhisekhaInput = {
  create: EventCreateWithoutEventAbhisekhaInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEventMemberInput = {
  create: EventCreateWithoutEventMemberInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutEventResourceInput = {
  create: EventCreateWithoutEventResourceInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutParentEventInput = {
  create: EventCreateWithoutParentEventInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutChildEventsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  endDate: Scalars["DateTime"];
  eventAbhisekha?: InputMaybe<EventAbhisekhaCreateNestedManyWithoutEventInput>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  eventResource?: InputMaybe<EventResourceCreateNestedManyWithoutEventInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  notes?: InputMaybe<Scalars["String"]>;
  parentEvent?: InputMaybe<EventCreateNestedOneWithoutChildEventsInput>;
  startDate: Scalars["DateTime"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutEventAbhisekhaInput = {
  childEvents?: InputMaybe<EventCreateNestedManyWithoutParentEventInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  endDate: Scalars["DateTime"];
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  eventResource?: InputMaybe<EventResourceCreateNestedManyWithoutEventInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  notes?: InputMaybe<Scalars["String"]>;
  parentEvent?: InputMaybe<EventCreateNestedOneWithoutChildEventsInput>;
  startDate: Scalars["DateTime"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutEventMemberInput = {
  childEvents?: InputMaybe<EventCreateNestedManyWithoutParentEventInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  endDate: Scalars["DateTime"];
  eventAbhisekha?: InputMaybe<EventAbhisekhaCreateNestedManyWithoutEventInput>;
  eventResource?: InputMaybe<EventResourceCreateNestedManyWithoutEventInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  notes?: InputMaybe<Scalars["String"]>;
  parentEvent?: InputMaybe<EventCreateNestedOneWithoutChildEventsInput>;
  startDate: Scalars["DateTime"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutEventResourceInput = {
  childEvents?: InputMaybe<EventCreateNestedManyWithoutParentEventInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  endDate: Scalars["DateTime"];
  eventAbhisekha?: InputMaybe<EventAbhisekhaCreateNestedManyWithoutEventInput>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  notes?: InputMaybe<Scalars["String"]>;
  parentEvent?: InputMaybe<EventCreateNestedOneWithoutChildEventsInput>;
  startDate: Scalars["DateTime"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type EventCreateWithoutParentEventInput = {
  childEvents?: InputMaybe<EventCreateNestedManyWithoutParentEventInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  endDate: Scalars["DateTime"];
  eventAbhisekha?: InputMaybe<EventAbhisekhaCreateNestedManyWithoutEventInput>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutEventInput>;
  eventResource?: InputMaybe<EventResourceCreateNestedManyWithoutEventInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isLocked: Scalars["Boolean"];
  name: Scalars["String"];
  notes?: InputMaybe<Scalars["String"]>;
  startDate: Scalars["DateTime"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventMemberCreateManyEventInput = {
  hasAttended: Scalars["Boolean"];
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventMemberCreateManyEventInputEnvelope = {
  data: Array<EventMemberCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventMemberCreateManyMemberInput = {
  eventId: Scalars["Int"];
  hasAttended: Scalars["Boolean"];
  type: Scalars["String"];
};

export type EventMemberCreateManyMemberInputEnvelope = {
  data: Array<EventMemberCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventMemberCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventMemberCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventMemberCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventMemberCreateManyEventInputEnvelope>;
};

export type EventMemberCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<EventMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventMemberCreateOrConnectWithoutMemberInput>
  >;
  create?: InputMaybe<Array<EventMemberCreateWithoutMemberInput>>;
  createMany?: InputMaybe<EventMemberCreateManyMemberInputEnvelope>;
};

export type EventMemberCreateOrConnectWithoutEventInput = {
  create: EventMemberCreateWithoutEventInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberCreateOrConnectWithoutMemberInput = {
  create: EventMemberCreateWithoutMemberInput;
  where: EventMemberWhereUniqueInput;
};

export type EventMemberCreateWithoutEventInput = {
  hasAttended: Scalars["Boolean"];
  member: MemberCreateNestedOneWithoutEventMemberInput;
  type: Scalars["String"];
};

export type EventMemberCreateWithoutMemberInput = {
  event: EventCreateNestedOneWithoutEventMemberInput;
  hasAttended: Scalars["Boolean"];
  type: Scalars["String"];
};

export type EventMemberDetails = {
  hasAttended: Scalars["Boolean"];
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventMemberListRelationFilter = {
  every?: InputMaybe<EventMemberWhereInput>;
  none?: InputMaybe<EventMemberWhereInput>;
  some?: InputMaybe<EventMemberWhereInput>;
};

export type EventMemberMemberIdEventIdCompoundUniqueInput = {
  eventId: Scalars["Int"];
  memberId: Scalars["Int"];
};

export type EventMemberWhereInput = {
  AND?: InputMaybe<Array<EventMemberWhereInput>>;
  NOT?: InputMaybe<Array<EventMemberWhereInput>>;
  OR?: InputMaybe<Array<EventMemberWhereInput>>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  hasAttended?: InputMaybe<BoolFilter>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
};

export type EventMemberWhereUniqueInput = {
  memberId_eventId?: InputMaybe<EventMemberMemberIdEventIdCompoundUniqueInput>;
};

export type EventMemberWithoutEvent = {
  __typename?: "EventMemberWithoutEvent";
  eventId: Scalars["Int"];
  hasAttended: Scalars["Boolean"];
  member: Member;
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventMemberWithoutMember = {
  __typename?: "EventMemberWithoutMember";
  event: Event;
  eventId: Scalars["Int"];
  hasAttended: Scalars["Boolean"];
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export type EventResourceCreateManyEventInput = {
  resourceId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventResourceCreateManyEventInputEnvelope = {
  data: Array<EventResourceCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventResourceCreateManyResourceInput = {
  eventId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventResourceCreateManyResourceInputEnvelope = {
  data: Array<EventResourceCreateManyResourceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type EventResourceCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<EventResourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventResourceCreateOrConnectWithoutEventInput>
  >;
  create?: InputMaybe<Array<EventResourceCreateWithoutEventInput>>;
  createMany?: InputMaybe<EventResourceCreateManyEventInputEnvelope>;
};

export type EventResourceCreateNestedManyWithoutResourceInput = {
  connect?: InputMaybe<Array<EventResourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<EventResourceCreateOrConnectWithoutResourceInput>
  >;
  create?: InputMaybe<Array<EventResourceCreateWithoutResourceInput>>;
  createMany?: InputMaybe<EventResourceCreateManyResourceInputEnvelope>;
};

export type EventResourceCreateOrConnectWithoutEventInput = {
  create: EventResourceCreateWithoutEventInput;
  where: EventResourceWhereUniqueInput;
};

export type EventResourceCreateOrConnectWithoutResourceInput = {
  create: EventResourceCreateWithoutResourceInput;
  where: EventResourceWhereUniqueInput;
};

export type EventResourceCreateWithoutEventInput = {
  resource: ResourceCreateNestedOneWithoutEventResourceInput;
  type: Scalars["String"];
};

export type EventResourceCreateWithoutResourceInput = {
  event: EventCreateNestedOneWithoutEventResourceInput;
  type: Scalars["String"];
};

export type EventResourceEventIdResourceIdCompoundUniqueInput = {
  eventId: Scalars["Int"];
  resourceId: Scalars["Int"];
};

export type EventResourceListRelationFilter = {
  every?: InputMaybe<EventResourceWhereInput>;
  none?: InputMaybe<EventResourceWhereInput>;
  some?: InputMaybe<EventResourceWhereInput>;
};

export type EventResourceWhereInput = {
  AND?: InputMaybe<Array<EventResourceWhereInput>>;
  NOT?: InputMaybe<Array<EventResourceWhereInput>>;
  OR?: InputMaybe<Array<EventResourceWhereInput>>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  resource?: InputMaybe<ResourceRelationFilter>;
  resourceId?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
};

export type EventResourceWhereUniqueInput = {
  eventId_resourceId?: InputMaybe<EventResourceEventIdResourceIdCompoundUniqueInput>;
};

export type EventResourceWithoutEvent = {
  __typename?: "EventResourceWithoutEvent";
  eventId: Scalars["Int"];
  resource: Resource;
  resourceId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventResourceWithoutResource = {
  __typename?: "EventResourceWithoutResource";
  event: Event;
  eventId: Scalars["Int"];
  resourceId: Scalars["Int"];
  type: Scalars["String"];
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  childEvents?: InputMaybe<EventListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  eventAbhisekha?: InputMaybe<EventAbhisekhaListRelationFilter>;
  eventMember?: InputMaybe<EventMemberListRelationFilter>;
  eventResource?: InputMaybe<EventResourceListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  isLocked?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  notes?: InputMaybe<StringFilter>;
  parentEvent?: InputMaybe<EventRelationFilter>;
  parentEventId?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

export enum GenderType {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
  PreferNotToSay = "PREFER_NOT_TO_SAY"
}

/** Types of gender */
export enum Gender_Type {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
  PreferNotToSay = "PREFER_NOT_TO_SAY"
}

export type Group = {
  __typename?: "Group";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  description: Scalars["String"];
  groupMembers: Array<MemberGroupWithoutGroup>;
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  name: Scalars["String"];
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
  visible: Scalars["Boolean"];
};

export type GroupCreateNestedOneWithoutMemberGroupsInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutMemberGroupsInput>;
  create?: InputMaybe<GroupCreateWithoutMemberGroupsInput>;
};

export type GroupCreateOrConnectWithoutMemberGroupsInput = {
  create: GroupCreateWithoutMemberGroupsInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutMemberGroupsInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  visible: Scalars["Boolean"];
};

export type GroupRelationFilter = {
  is?: InputMaybe<GroupWhereInput>;
  isNot?: InputMaybe<GroupWhereInput>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  memberGroups?: InputMaybe<MemberGroupListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  visible?: InputMaybe<BoolFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type LoginInput = {
  password: Scalars["String"];
  userName: Scalars["String"];
};

export type Member = {
  __typename?: "Member";
  active: Scalars["Boolean"];
  centre?: Maybe<Centre>;
  centreId?: Maybe<Scalars["Int"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  currentAddress?: Maybe<Address>;
  currentAddressId?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  events?: Maybe<Array<Event>>;
  firstName: Scalars["String"];
  gender?: Maybe<Gender_Type>;
  id: Scalars["Int"];
  insta?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  isMember: Scalars["Boolean"];
  lastName: Scalars["String"];
  memberAbhisekhas: Array<MemberAbhisekhaWithoutMember>;
  memberEvents: Array<EventMemberWithoutMember>;
  memberGroups: Array<MemberGroupWithoutMember>;
  memberResources: Array<MemberResourceWithoutMember>;
  membershipType?: Maybe<Membership_Type>;
  messenger?: Maybe<Scalars["String"]>;
  middleName?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  notes?: Maybe<Scalars["String"]>;
  permanentAddress?: Maybe<Address>;
  permanentAddressId?: Maybe<Scalars["Int"]>;
  phoneLand?: Maybe<Scalars["String"]>;
  phoneMobile?: Maybe<Scalars["String"]>;
  phoneOther?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  refugeName?: Maybe<Scalars["String"]>;
  sanghaJoinDate?: Maybe<Scalars["DateTime"]>;
  tempAddress?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  viber?: Maybe<Scalars["String"]>;
  yearOfBirth?: Maybe<Scalars["Int"]>;
};

export type MemberAbhisekhaCreateManyAbhisekhaInput = {
  abhisekhaDate: Scalars["DateTime"];
  abhisekhaPlace: Scalars["String"];
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberAbhisekhaCreateManyAbhisekhaInputEnvelope = {
  data: Array<MemberAbhisekhaCreateManyAbhisekhaInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MemberAbhisekhaCreateManyMemberInput = {
  abhisekhaDate: Scalars["DateTime"];
  abhisekhaId: Scalars["Int"];
  abhisekhaPlace: Scalars["String"];
  type: Scalars["String"];
};

export type MemberAbhisekhaCreateManyMemberInputEnvelope = {
  data: Array<MemberAbhisekhaCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MemberAbhisekhaCreateNestedManyWithoutAbhisekhaInput = {
  connect?: InputMaybe<Array<MemberAbhisekhaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MemberAbhisekhaCreateOrConnectWithoutAbhisekhaInput>
  >;
  create?: InputMaybe<Array<MemberAbhisekhaCreateWithoutAbhisekhaInput>>;
  createMany?: InputMaybe<MemberAbhisekhaCreateManyAbhisekhaInputEnvelope>;
};

export type MemberAbhisekhaCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<MemberAbhisekhaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MemberAbhisekhaCreateOrConnectWithoutMemberInput>
  >;
  create?: InputMaybe<Array<MemberAbhisekhaCreateWithoutMemberInput>>;
  createMany?: InputMaybe<MemberAbhisekhaCreateManyMemberInputEnvelope>;
};

export type MemberAbhisekhaCreateOrConnectWithoutAbhisekhaInput = {
  create: MemberAbhisekhaCreateWithoutAbhisekhaInput;
  where: MemberAbhisekhaWhereUniqueInput;
};

export type MemberAbhisekhaCreateOrConnectWithoutMemberInput = {
  create: MemberAbhisekhaCreateWithoutMemberInput;
  where: MemberAbhisekhaWhereUniqueInput;
};

export type MemberAbhisekhaCreateWithoutAbhisekhaInput = {
  abhisekhaDate: Scalars["DateTime"];
  abhisekhaPlace: Scalars["String"];
  member: MemberCreateNestedOneWithoutMemberAbhisekhaInput;
  type: Scalars["String"];
};

export type MemberAbhisekhaCreateWithoutMemberInput = {
  abhisekha: AbhisekhaCreateNestedOneWithoutMemberAbhisekhaInput;
  abhisekhaDate: Scalars["DateTime"];
  abhisekhaPlace: Scalars["String"];
  type: Scalars["String"];
};

export type MemberAbhisekhaDetails = {
  /** Date of abhisekha */
  abhisekhaDate: Scalars["String"];
  /** Id of member who attended the abhisekha */
  abhisekhaId: Scalars["Int"];
  /** Place of abhisekha */
  abhisekhaPlace: Scalars["String"];
  /** Member attending the Abhisekha type eg: Peripheral */
  type: Scalars["String"];
};

export type MemberAbhisekhaListRelationFilter = {
  every?: InputMaybe<MemberAbhisekhaWhereInput>;
  none?: InputMaybe<MemberAbhisekhaWhereInput>;
  some?: InputMaybe<MemberAbhisekhaWhereInput>;
};

export type MemberAbhisekhaMemberIdAbhisekhaIdCompoundUniqueInput = {
  abhisekhaId: Scalars["Int"];
  memberId: Scalars["Int"];
};

export type MemberAbhisekhaWhereInput = {
  AND?: InputMaybe<Array<MemberAbhisekhaWhereInput>>;
  NOT?: InputMaybe<Array<MemberAbhisekhaWhereInput>>;
  OR?: InputMaybe<Array<MemberAbhisekhaWhereInput>>;
  abhisekha?: InputMaybe<AbhisekhaRelationFilter>;
  abhisekhaDate?: InputMaybe<DateTimeFilter>;
  abhisekhaId?: InputMaybe<IntFilter>;
  abhisekhaPlace?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
};

export type MemberAbhisekhaWhereUniqueInput = {
  memberId_abhisekhaId?: InputMaybe<MemberAbhisekhaMemberIdAbhisekhaIdCompoundUniqueInput>;
};

export type MemberAbhisekhaWithoutAbhisekha = {
  __typename?: "MemberAbhisekhaWithoutAbhisekha";
  abhisekhaDate: Scalars["DateTime"];
  abhisekhaId: Scalars["Int"];
  abhisekhaPlace: Scalars["String"];
  member: Member;
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberAbhisekhaWithoutMember = {
  __typename?: "MemberAbhisekhaWithoutMember";
  abhisekha: Abhisekha;
  abhisekhaDate: Scalars["DateTime"];
  abhisekhaId: Scalars["Int"];
  abhisekhaPlace: Scalars["String"];
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberCreateNestedOneWithoutCurrentAddressInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MemberCreateOrConnectWithoutCurrentAddressInput>;
  create?: InputMaybe<MemberCreateWithoutCurrentAddressInput>;
};

export type MemberCreateNestedOneWithoutEventMemberInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MemberCreateOrConnectWithoutEventMemberInput>;
  create?: InputMaybe<MemberCreateWithoutEventMemberInput>;
};

export type MemberCreateNestedOneWithoutMemberAbhisekhaInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MemberCreateOrConnectWithoutMemberAbhisekhaInput>;
  create?: InputMaybe<MemberCreateWithoutMemberAbhisekhaInput>;
};

export type MemberCreateNestedOneWithoutMemberResourceInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MemberCreateOrConnectWithoutMemberResourceInput>;
  create?: InputMaybe<MemberCreateWithoutMemberResourceInput>;
};

export type MemberCreateNestedOneWithoutPermanentAddressInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MemberCreateOrConnectWithoutPermanentAddressInput>;
  create?: InputMaybe<MemberCreateWithoutPermanentAddressInput>;
};

export type MemberCreateOrConnectWithoutCurrentAddressInput = {
  create: MemberCreateWithoutCurrentAddressInput;
  where: MemberWhereUniqueInput;
};

export type MemberCreateOrConnectWithoutEventMemberInput = {
  create: MemberCreateWithoutEventMemberInput;
  where: MemberWhereUniqueInput;
};

export type MemberCreateOrConnectWithoutMemberAbhisekhaInput = {
  create: MemberCreateWithoutMemberAbhisekhaInput;
  where: MemberWhereUniqueInput;
};

export type MemberCreateOrConnectWithoutMemberResourceInput = {
  create: MemberCreateWithoutMemberResourceInput;
  where: MemberWhereUniqueInput;
};

export type MemberCreateOrConnectWithoutPermanentAddressInput = {
  create: MemberCreateWithoutPermanentAddressInput;
  where: MemberWhereUniqueInput;
};

export type MemberCreateWithoutCurrentAddressInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  centre?: InputMaybe<CentreCreateNestedOneWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutMemberInput>;
  firstName: Scalars["String"];
  gender?: InputMaybe<GenderType>;
  insta?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isMember?: InputMaybe<Scalars["Boolean"]>;
  lastName: Scalars["String"];
  memberAbhisekha?: InputMaybe<MemberAbhisekhaCreateNestedManyWithoutMemberInput>;
  memberGroup?: InputMaybe<MemberGroupCreateNestedManyWithoutMemberInput>;
  memberResource?: InputMaybe<MemberResourceCreateNestedManyWithoutMemberInput>;
  membershipType?: InputMaybe<MembershipType>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  permanentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberPermanentAddressInput>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutMemberInput>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type MemberCreateWithoutEventMemberInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  centre?: InputMaybe<CentreCreateNestedOneWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  currentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberCurrentAddressInput>;
  email?: InputMaybe<Scalars["String"]>;
  firstName: Scalars["String"];
  gender?: InputMaybe<GenderType>;
  insta?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isMember?: InputMaybe<Scalars["Boolean"]>;
  lastName: Scalars["String"];
  memberAbhisekha?: InputMaybe<MemberAbhisekhaCreateNestedManyWithoutMemberInput>;
  memberGroup?: InputMaybe<MemberGroupCreateNestedManyWithoutMemberInput>;
  memberResource?: InputMaybe<MemberResourceCreateNestedManyWithoutMemberInput>;
  membershipType?: InputMaybe<MembershipType>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  permanentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberPermanentAddressInput>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutMemberInput>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type MemberCreateWithoutMemberAbhisekhaInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  centre?: InputMaybe<CentreCreateNestedOneWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  currentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberCurrentAddressInput>;
  email?: InputMaybe<Scalars["String"]>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutMemberInput>;
  firstName: Scalars["String"];
  gender?: InputMaybe<GenderType>;
  insta?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isMember?: InputMaybe<Scalars["Boolean"]>;
  lastName: Scalars["String"];
  memberGroup?: InputMaybe<MemberGroupCreateNestedManyWithoutMemberInput>;
  memberResource?: InputMaybe<MemberResourceCreateNestedManyWithoutMemberInput>;
  membershipType?: InputMaybe<MembershipType>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  permanentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberPermanentAddressInput>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutMemberInput>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type MemberCreateWithoutMemberResourceInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  centre?: InputMaybe<CentreCreateNestedOneWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  currentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberCurrentAddressInput>;
  email?: InputMaybe<Scalars["String"]>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutMemberInput>;
  firstName: Scalars["String"];
  gender?: InputMaybe<GenderType>;
  insta?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isMember?: InputMaybe<Scalars["Boolean"]>;
  lastName: Scalars["String"];
  memberAbhisekha?: InputMaybe<MemberAbhisekhaCreateNestedManyWithoutMemberInput>;
  memberGroup?: InputMaybe<MemberGroupCreateNestedManyWithoutMemberInput>;
  membershipType?: InputMaybe<MembershipType>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  permanentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberPermanentAddressInput>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutMemberInput>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type MemberCreateWithoutPermanentAddressInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  centre?: InputMaybe<CentreCreateNestedOneWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  currentAddress?: InputMaybe<AddressCreateNestedOneWithoutMemberCurrentAddressInput>;
  email?: InputMaybe<Scalars["String"]>;
  eventMember?: InputMaybe<EventMemberCreateNestedManyWithoutMemberInput>;
  firstName: Scalars["String"];
  gender?: InputMaybe<GenderType>;
  insta?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  isMember?: InputMaybe<Scalars["Boolean"]>;
  lastName: Scalars["String"];
  memberAbhisekha?: InputMaybe<MemberAbhisekhaCreateNestedManyWithoutMemberInput>;
  memberGroup?: InputMaybe<MemberGroupCreateNestedManyWithoutMemberInput>;
  memberResource?: InputMaybe<MemberResourceCreateNestedManyWithoutMemberInput>;
  membershipType?: InputMaybe<MembershipType>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserCreateNestedOneWithoutMemberInput>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type MemberGroupCreateManyMemberInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  groupId: Scalars["Int"];
};

export type MemberGroupCreateManyMemberInputEnvelope = {
  data: Array<MemberGroupCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MemberGroupCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<MemberGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MemberGroupCreateOrConnectWithoutMemberInput>
  >;
  create?: InputMaybe<Array<MemberGroupCreateWithoutMemberInput>>;
  createMany?: InputMaybe<MemberGroupCreateManyMemberInputEnvelope>;
};

export type MemberGroupCreateOrConnectWithoutMemberInput = {
  create: MemberGroupCreateWithoutMemberInput;
  where: MemberGroupWhereUniqueInput;
};

export type MemberGroupCreateWithoutMemberInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  group: GroupCreateNestedOneWithoutMemberGroupsInput;
};

export type MemberGroupListRelationFilter = {
  every?: InputMaybe<MemberGroupWhereInput>;
  none?: InputMaybe<MemberGroupWhereInput>;
  some?: InputMaybe<MemberGroupWhereInput>;
};

export type MemberGroupMemberIdGroupIdCompoundUniqueInput = {
  groupId: Scalars["Int"];
  memberId: Scalars["Int"];
};

export type MemberGroupWhereInput = {
  AND?: InputMaybe<Array<MemberGroupWhereInput>>;
  NOT?: InputMaybe<Array<MemberGroupWhereInput>>;
  OR?: InputMaybe<Array<MemberGroupWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<IntFilter>;
};

export type MemberGroupWhereUniqueInput = {
  memberId_groupId?: InputMaybe<MemberGroupMemberIdGroupIdCompoundUniqueInput>;
};

export type MemberGroupWithoutGroup = {
  __typename?: "MemberGroupWithoutGroup";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["String"]>;
  groupId: Scalars["Int"];
  member: Member;
  memberId: Scalars["Int"];
};

export type MemberGroupWithoutMember = {
  __typename?: "MemberGroupWithoutMember";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["String"]>;
  group: Group;
  groupId: Scalars["Int"];
  memberId: Scalars["Int"];
};

export type MemberListRelationFilter = {
  every?: InputMaybe<MemberWhereInput>;
  none?: InputMaybe<MemberWhereInput>;
  some?: InputMaybe<MemberWhereInput>;
};

export type MemberRelationFilter = {
  is?: InputMaybe<MemberWhereInput>;
  isNot?: InputMaybe<MemberWhereInput>;
};

export type MemberResourceCreateManyMemberInput = {
  resourceId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberResourceCreateManyMemberInputEnvelope = {
  data: Array<MemberResourceCreateManyMemberInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MemberResourceCreateManyResourceInput = {
  memberId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberResourceCreateManyResourceInputEnvelope = {
  data: Array<MemberResourceCreateManyResourceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MemberResourceCreateNestedManyWithoutMemberInput = {
  connect?: InputMaybe<Array<MemberResourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MemberResourceCreateOrConnectWithoutMemberInput>
  >;
  create?: InputMaybe<Array<MemberResourceCreateWithoutMemberInput>>;
  createMany?: InputMaybe<MemberResourceCreateManyMemberInputEnvelope>;
};

export type MemberResourceCreateNestedManyWithoutResourceInput = {
  connect?: InputMaybe<Array<MemberResourceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MemberResourceCreateOrConnectWithoutResourceInput>
  >;
  create?: InputMaybe<Array<MemberResourceCreateWithoutResourceInput>>;
  createMany?: InputMaybe<MemberResourceCreateManyResourceInputEnvelope>;
};

export type MemberResourceCreateOrConnectWithoutMemberInput = {
  create: MemberResourceCreateWithoutMemberInput;
  where: MemberResourceWhereUniqueInput;
};

export type MemberResourceCreateOrConnectWithoutResourceInput = {
  create: MemberResourceCreateWithoutResourceInput;
  where: MemberResourceWhereUniqueInput;
};

export type MemberResourceCreateWithoutMemberInput = {
  resource: ResourceCreateNestedOneWithoutMemberResourceInput;
  type: Scalars["String"];
};

export type MemberResourceCreateWithoutResourceInput = {
  member: MemberCreateNestedOneWithoutMemberResourceInput;
  type: Scalars["String"];
};

export type MemberResourceListRelationFilter = {
  every?: InputMaybe<MemberResourceWhereInput>;
  none?: InputMaybe<MemberResourceWhereInput>;
  some?: InputMaybe<MemberResourceWhereInput>;
};

export type MemberResourceMemberIdResourceIdCompoundUniqueInput = {
  memberId: Scalars["Int"];
  resourceId: Scalars["Int"];
};

export type MemberResourceWhereInput = {
  AND?: InputMaybe<Array<MemberResourceWhereInput>>;
  NOT?: InputMaybe<Array<MemberResourceWhereInput>>;
  OR?: InputMaybe<Array<MemberResourceWhereInput>>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<IntFilter>;
  resource?: InputMaybe<ResourceRelationFilter>;
  resourceId?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
};

export type MemberResourceWhereUniqueInput = {
  memberId_resourceId?: InputMaybe<MemberResourceMemberIdResourceIdCompoundUniqueInput>;
};

export type MemberResourceWithoutMember = {
  __typename?: "MemberResourceWithoutMember";
  memberId: Scalars["Int"];
  resource: Resource;
  resourceId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberResourceWithoutResource = {
  __typename?: "MemberResourceWithoutResource";
  member: Member;
  memberId: Scalars["Int"];
  resourceId: Scalars["Int"];
  type: Scalars["String"];
};

export type MemberWhereInput = {
  AND?: InputMaybe<Array<MemberWhereInput>>;
  NOT?: InputMaybe<Array<MemberWhereInput>>;
  OR?: InputMaybe<Array<MemberWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  centre?: InputMaybe<CentreRelationFilter>;
  centreId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  currentAddress?: InputMaybe<AddressRelationFilter>;
  email?: InputMaybe<StringFilter>;
  eventMember?: InputMaybe<EventMemberListRelationFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderTypeFilter>;
  id?: InputMaybe<IntFilter>;
  insta?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  isMember?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  memberAbhisekha?: InputMaybe<MemberAbhisekhaListRelationFilter>;
  memberGroup?: InputMaybe<MemberGroupListRelationFilter>;
  memberResource?: InputMaybe<MemberResourceListRelationFilter>;
  membershipType?: InputMaybe<EnumMembershipTypeFilter>;
  messenger?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  permanentAddress?: InputMaybe<AddressRelationFilter>;
  phoneLand?: InputMaybe<StringFilter>;
  phoneMobile?: InputMaybe<StringFilter>;
  phoneOther?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  refugeName?: InputMaybe<StringFilter>;
  sanghaJoinDate?: InputMaybe<DateTimeFilter>;
  tempAddress?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  viber?: InputMaybe<StringFilter>;
  yearOfBirth?: InputMaybe<IntFilter>;
};

export type MemberWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

export enum MembershipType {
  BoardMember = "BoardMember",
  GeneralMember = "GeneralMember",
  HonoraryMember = "HonoraryMember",
  LifeMember = "LifeMember"
}

/** Types of membership */
export enum Membership_Type {
  BoardMember = "BoardMember",
  GeneralMember = "GeneralMember",
  HonoraryMember = "HonoraryMember",
  LifeMember = "LifeMember"
}

export type Mutation = {
  __typename?: "Mutation";
  changePassword: User;
  createAbhisekha: Abhisekha;
  createCentre: Address;
  createEvent: Event;
  createGroup: Group;
  createMember: Member;
  createResource: Resource;
  createRole: Role;
  createUser: User;
  initiateResetPassword: ResponseStatus;
  login: Auth;
  refreshToken: Token;
  removeAbhisekha: Abhisekha;
  removeAddress: Address;
  removeCentre: Centre;
  removeEvent: Event;
  removeGroup: Group;
  removeMember: Member;
  removeResource: Resource;
  removeRole: Role;
  removeUser: User;
  resetPassword: ResponseStatus;
  sendEmail: ResponseStatus;
  updateAbhisekha: Abhisekha;
  updateAddress: Address;
  updateCentre: Centre;
  updateEvent: Event;
  updateGroup: Group;
  updateMember: Member;
  updateResource: Resource;
  updateRole: Role;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationCreateAbhisekhaArgs = {
  createAbhisekhaInput: CreateAbhisekhaInput;
};

export type MutationCreateCentreArgs = {
  createAddressInput: AddressCreateInput;
};

export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};

export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};

export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput;
};

export type MutationCreateResourceArgs = {
  createResourceInput: CreateResourceInput;
};

export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationInitiateResetPasswordArgs = {
  resetPasswordInitiateInput: ResetPasswordInitiateInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRefreshTokenArgs = {
  token: Scalars["JWT"];
};

export type MutationRemoveAbhisekhaArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveAddressArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveCentreArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveEventArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveGroupArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveMemberArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveResourceArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveRoleArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["Int"];
};

export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};

export type MutationSendEmailArgs = {
  sendEmailInput: SendEmailInput;
};

export type MutationUpdateAbhisekhaArgs = {
  updateAbhisekhaInput: UpdateAbhisekhaInput;
};

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};

export type MutationUpdateCentreArgs = {
  updateCentreInput: UpdateCentreInput;
};

export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
};

export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput;
};

export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput;
};

export type MutationUpdateResourceArgs = {
  updateResourceInput: UpdateResourceInput;
};

export type MutationUpdateRoleArgs = {
  updateRoleInput: UpdateRoleInput;
};

export type PasswordHistoryCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PasswordHistoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PasswordHistoryCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PasswordHistoryCreateWithoutUserInput>;
};

export type PasswordHistoryCreateOrConnectWithoutUserInput = {
  create: PasswordHistoryCreateWithoutUserInput;
  where: PasswordHistoryWhereUniqueInput;
};

export type PasswordHistoryCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  password: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type PasswordHistoryRelationFilter = {
  is?: InputMaybe<PasswordHistoryWhereInput>;
  isNot?: InputMaybe<PasswordHistoryWhereInput>;
};

export type PasswordHistoryWhereInput = {
  AND?: InputMaybe<Array<PasswordHistoryWhereInput>>;
  NOT?: InputMaybe<Array<PasswordHistoryWhereInput>>;
  OR?: InputMaybe<Array<PasswordHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  password?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PasswordHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["Int"]>;
};

export type PasswordTokenCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PasswordTokenWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PasswordTokenCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PasswordTokenCreateWithoutUserInput>;
};

export type PasswordTokenCreateOrConnectWithoutUserInput = {
  create: PasswordTokenCreateWithoutUserInput;
  where: PasswordTokenWhereUniqueInput;
};

export type PasswordTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  token: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PasswordTokenRelationFilter = {
  is?: InputMaybe<PasswordTokenWhereInput>;
  isNot?: InputMaybe<PasswordTokenWhereInput>;
};

export type PasswordTokenWhereInput = {
  AND?: InputMaybe<Array<PasswordTokenWhereInput>>;
  NOT?: InputMaybe<Array<PasswordTokenWhereInput>>;
  OR?: InputMaybe<Array<PasswordTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PasswordTokenWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  abhisekha: Abhisekha;
  abhisekhas: Array<Abhisekha>;
  address: Address;
  addresses: Array<Address>;
  centre: Centre;
  centres: Array<Centre>;
  event: Event;
  group: Group;
  groups: Array<Group>;
  hello: Scalars["String"];
  helloWorld: Scalars["String"];
  me: User;
  member: Member;
  members: Array<Member>;
  resource: Resource;
  resources: Array<Resource>;
  role: Role;
  roles: Array<Role>;
  user: User;
  users: Array<User>;
};

export type QueryAbhisekhaArgs = {
  id: Scalars["Int"];
};

export type QueryAddressArgs = {
  id: Scalars["Int"];
};

export type QueryCentreArgs = {
  id: Scalars["Int"];
};

export type QueryEventArgs = {
  id: Scalars["Int"];
};

export type QueryGroupArgs = {
  id: Scalars["Int"];
};

export type QueryHelloArgs = {
  name: Scalars["String"];
};

export type QueryMemberArgs = {
  id: Scalars["Int"];
};

export type QueryResourceArgs = {
  id: Scalars["Int"];
};

export type QueryRoleArgs = {
  where?: InputMaybe<RoleWhereInput>;
};

export type QueryRolesArgs = {
  where?: InputMaybe<RoleWhereInput>;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive"
}

export type ResetPasswordInitiateInput = {
  userName: Scalars["String"];
};

export type ResetPasswordInput = {
  password: Scalars["String"];
  token: Scalars["String"];
  userId: Scalars["Int"];
};

export type Resource = {
  __typename?: "Resource";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  /** Description of the resource */
  description: Scalars["String"];
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  /** Name of the resource */
  name: Scalars["String"];
  resourceAbhisekhas: Array<AbhisekhaResourceWithoutResource>;
  resourceEvents: Array<EventResourceWithoutResource>;
  resourceMembers: Array<MemberResourceWithoutResource>;
  /** Type of the resource */
  type: Scalars["String"];
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
  /** Url containing the resource data */
  url: Scalars["String"];
};

export type ResourceCreateNestedOneWithoutAbhisekhaResourceInput = {
  connect?: InputMaybe<ResourceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResourceCreateOrConnectWithoutAbhisekhaResourceInput>;
  create?: InputMaybe<ResourceCreateWithoutAbhisekhaResourceInput>;
};

export type ResourceCreateNestedOneWithoutEventResourceInput = {
  connect?: InputMaybe<ResourceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResourceCreateOrConnectWithoutEventResourceInput>;
  create?: InputMaybe<ResourceCreateWithoutEventResourceInput>;
};

export type ResourceCreateNestedOneWithoutMemberResourceInput = {
  connect?: InputMaybe<ResourceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ResourceCreateOrConnectWithoutMemberResourceInput>;
  create?: InputMaybe<ResourceCreateWithoutMemberResourceInput>;
};

export type ResourceCreateOrConnectWithoutAbhisekhaResourceInput = {
  create: ResourceCreateWithoutAbhisekhaResourceInput;
  where: ResourceWhereUniqueInput;
};

export type ResourceCreateOrConnectWithoutEventResourceInput = {
  create: ResourceCreateWithoutEventResourceInput;
  where: ResourceWhereUniqueInput;
};

export type ResourceCreateOrConnectWithoutMemberResourceInput = {
  create: ResourceCreateWithoutMemberResourceInput;
  where: ResourceWhereUniqueInput;
};

export type ResourceCreateWithoutAbhisekhaResourceInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  eventResource?: InputMaybe<EventResourceCreateNestedManyWithoutResourceInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  memberResource?: InputMaybe<MemberResourceCreateNestedManyWithoutResourceInput>;
  name: Scalars["String"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  url: Scalars["String"];
};

export type ResourceCreateWithoutEventResourceInput = {
  abhisekhaResource?: InputMaybe<AbhisekhaResourceCreateNestedManyWithoutResourceInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  memberResource?: InputMaybe<MemberResourceCreateNestedManyWithoutResourceInput>;
  name: Scalars["String"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  url: Scalars["String"];
};

export type ResourceCreateWithoutMemberResourceInput = {
  abhisekhaResource?: InputMaybe<AbhisekhaResourceCreateNestedManyWithoutResourceInput>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  eventResource?: InputMaybe<EventResourceCreateNestedManyWithoutResourceInput>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  type: Scalars["String"];
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  url: Scalars["String"];
};

export type ResourceRelationFilter = {
  is?: InputMaybe<ResourceWhereInput>;
  isNot?: InputMaybe<ResourceWhereInput>;
};

export type ResourceWhereInput = {
  AND?: InputMaybe<Array<ResourceWhereInput>>;
  NOT?: InputMaybe<Array<ResourceWhereInput>>;
  OR?: InputMaybe<Array<ResourceWhereInput>>;
  abhisekhaResource?: InputMaybe<AbhisekhaResourceListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  eventResource?: InputMaybe<EventResourceListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  memberResource?: InputMaybe<MemberResourceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type ResourceWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

export type ResponseStatus = {
  __typename?: "ResponseStatus";
  status: Scalars["String"];
};

export type Role = {
  __typename?: "Role";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  name: Scalars["String"];
  type: Role_Type;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
  users: Array<User>;
};

export type RoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  roleType?: InputMaybe<Type>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type RoleRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  roleType?: InputMaybe<EnumTypeFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
};

/** Type of the role */
export enum Role_Type {
  Default = "DEFAULT",
  System = "SYSTEM"
}

export type SendEmailInput = {
  content: Scalars["String"];
  memberEmails: Array<Scalars["String"]>;
  subject: Scalars["String"];
};

/** Current status of the user within the system */
export enum Status {
  Validated = "VALIDATED",
  ValidationPending = "VALIDATION_PENDING"
}

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Token = {
  __typename?: "Token";
  /** JWT access token */
  accessToken: Scalars["JWT"];
  /** JWT refresh token */
  refreshToken: Scalars["JWT"];
};

export enum Type {
  Default = "DEFAULT",
  System = "SYSTEM"
}

export type UpdateAbhisekhaInput = {
  /** AbhisekhaMember details */
  abhisekhaMemberDetails?: InputMaybe<Array<AbhisekhaMemberDetails>>;
  /** Name of the abhisekha */
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** Name of the abhisekha */
  name?: InputMaybe<Scalars["String"]>;
  /** Relevant resources for the abhisekha */
  resourceIds?: InputMaybe<Array<Scalars["Int"]>>;
  /** Name of the abhisekha */
  teacher?: InputMaybe<Scalars["String"]>;
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  stateProvince?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
};

export type UpdateCentreInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  displaySequence?: InputMaybe<Scalars["Int"]>;
  displayText?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
  stateProvince?: InputMaybe<Scalars["String"]>;
  streetAddress?: InputMaybe<Scalars["String"]>;
};

export type UpdateEventInput = {
  /** Identifies the date and time when the object was created. */
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** Identifies who created the object. */
  createdBy?: InputMaybe<Scalars["String"]>;
  /** Event end date */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /** Details of members attending the event */
  eventMemberDetails?: InputMaybe<Array<EventMemberDetails>>;
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  /** After the event ends or at a certain specific time, the event is locked and event related details cannot be updated/deleted */
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** Some notes related to the event */
  notes?: InputMaybe<Scalars["String"]>;
  /** Event start date */
  startDate?: InputMaybe<Scalars["DateTime"]>;
  /** Type of the event */
  type?: InputMaybe<Scalars["String"]>;
  /** Unique key associated with the object. */
  uniqueKey?: InputMaybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** Identifies who made the last update to the object. */
  updatedBy?: InputMaybe<Scalars["String"]>;
};

export type UpdateGroupInput = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  memberIds?: InputMaybe<Array<Scalars["Int"]>>;
  name?: InputMaybe<Scalars["String"]>;
  visible?: InputMaybe<Scalars["Boolean"]>;
};

export type UpdateMemberInput = {
  active?: InputMaybe<Scalars["Boolean"]>;
  centreId?: InputMaybe<Scalars["Int"]>;
  currentCity?: InputMaybe<Scalars["String"]>;
  currentCountry?: InputMaybe<Scalars["String"]>;
  currentStateProvince?: InputMaybe<Scalars["String"]>;
  currentStreetAddress?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  groupIds?: InputMaybe<Array<Scalars["Int"]>>;
  id: Scalars["Int"];
  insta?: InputMaybe<Scalars["String"]>;
  isMember?: InputMaybe<Scalars["Boolean"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  memberAbhisekhaDetails?: InputMaybe<Array<MemberAbhisekhaDetails>>;
  membershipType?: InputMaybe<Scalars["String"]>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
  permanentCity?: InputMaybe<Scalars["String"]>;
  permanentCountry?: InputMaybe<Scalars["String"]>;
  permanentStateProvince?: InputMaybe<Scalars["String"]>;
  permanentStreetAddress?: InputMaybe<Scalars["String"]>;
  phoneLand?: InputMaybe<Scalars["String"]>;
  phoneMobile?: InputMaybe<Scalars["String"]>;
  phoneOther?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  tempAddress?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  viber?: InputMaybe<Scalars["String"]>;
  yearOfBirth?: InputMaybe<Scalars["Int"]>;
};

export type UpdateResourceInput = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type UpdateRoleInput = {
  id: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  avatar: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last deleted. */
  isDeleted: Scalars["Boolean"];
  member: Member;
  memberId: Scalars["Int"];
  role: Role;
  status: Status;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
  userName: Scalars["String"];
};

export type UserCreateNestedOneWithoutMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMemberInput>;
  create?: InputMaybe<UserCreateWithoutMemberInput>;
};

export type UserCreateOrConnectWithoutMemberInput = {
  create: UserCreateWithoutMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutMemberInput = {
  avatar?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  isDeleted?: InputMaybe<Scalars["Boolean"]>;
  password: Scalars["String"];
  passwordHistory?: InputMaybe<PasswordHistoryCreateNestedOneWithoutUserInput>;
  passwordToken?: InputMaybe<PasswordTokenCreateNestedOneWithoutUserInput>;
  role: RoleCreateNestedOneWithoutUsersInput;
  status?: InputMaybe<UserStatus>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["String"]>;
  userName: Scalars["String"];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserStatus {
  Validated = "VALIDATED",
  ValidationPending = "VALIDATION_PENDING"
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<IntFilter>;
  password?: InputMaybe<StringFilter>;
  passwordHistory?: InputMaybe<PasswordHistoryRelationFilter>;
  passwordToken?: InputMaybe<PasswordTokenRelationFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleId?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["Int"]>;
  memberId?: InputMaybe<Scalars["Int"]>;
  uniqueKey?: InputMaybe<Scalars["String"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

export type AbhisekhasQueryVariables = Exact<{ [key: string]: never }>;

export type AbhisekhasQuery = {
  __typename?: "Query";
  abhisekhas: Array<{
    __typename?: "Abhisekha";
    name: string;
    teacher: string;
    updatedAt: any;
    createdAt: any;
    id: number;
    description: string;
  }>;
};

export type AbhisekhaQueryVariables = Exact<{
  abhisekhaId: Scalars["Int"];
}>;

export type AbhisekhaQuery = {
  __typename?: "Query";
  abhisekha: {
    __typename?: "Abhisekha";
    name: string;
    teacher: string;
    updatedAt: any;
    createdAt: any;
    id: number;
    description: string;
    abhisekhaResources: Array<{
      __typename?: "AbhisekhaResourceWithoutAbhisekha";
      resource: {
        __typename?: "Resource";
        id: number;
        name: string;
        type: string;
        url: string;
      };
    }>;
    abhisekhaMembers: Array<{
      __typename?: "MemberAbhisekhaWithoutAbhisekha";
      abhisekhaDate: any;
      abhisekhaPlace: string;
      type: string;
      member: {
        __typename?: "Member";
        id: number;
        firstName: string;
        lastName: string;
        middleName?: string | null;
        email?: string | null;
        createdAt: any;
        gender?: Gender_Type | null;
        phoneMobile?: string | null;
        phoneLand?: string | null;
        insta?: string | null;
        isMember: boolean;
        active: boolean;
        membershipType?: Membership_Type | null;
        messenger?: string | null;
        photo?: string | null;
        refugeName?: string | null;
        sanghaJoinDate?: any | null;
        title?: string | null;
        viber?: string | null;
        user?: {
          __typename?: "User";
          id: number;
          userName: string;
          status: Status;
          role: { __typename?: "Role"; name: string };
        } | null;
        centre?: {
          __typename?: "Centre";
          id: number;
          displayText?: string | null;
        } | null;
      };
    }>;
  };
};

export type CreateAbhisekhaMutationVariables = Exact<{
  createAbhisekhaInput: CreateAbhisekhaInput;
}>;

export type CreateAbhisekhaMutation = {
  __typename?: "Mutation";
  createAbhisekha: { __typename?: "Abhisekha"; id: number };
};

export type UpdateAbhisekhaMutationVariables = Exact<{
  updateAbhisekhaInput: UpdateAbhisekhaInput;
}>;

export type UpdateAbhisekhaMutation = {
  __typename?: "Mutation";
  updateAbhisekha: { __typename?: "Abhisekha"; id: number };
};

export type DeleteAbhisekhaMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteAbhisekhaMutation = {
  __typename?: "Mutation";
  removeAbhisekha: { __typename?: "Abhisekha"; id: number };
};

export type AddressesQueryVariables = Exact<{ [key: string]: never }>;

export type AddressesQuery = {
  __typename?: "Query";
  addresses: Array<{
    __typename?: "Address";
    id: number;
    street?: string | null;
    city?: string | null;
    stateProvince?: string | null;
    country?: string | null;
  }>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me: {
    __typename?: "User";
    userName: string;
    avatar: string;
    member: {
      __typename?: "Member";
      id: number;
      firstName: string;
      lastName: string;
    };
  };
};

export type LoginMutationVariables = Exact<{
  userName: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "Auth"; accessToken: any; refreshToken: any };
};

export type RequestPasswordResetMutationVariables = Exact<{
  userName: Scalars["String"];
}>;

export type RequestPasswordResetMutation = {
  __typename?: "Mutation";
  initiateResetPassword: { __typename?: "ResponseStatus"; status: string };
};

export type ResetPasswordMutationVariables = Exact<{
  userId: Scalars["Int"];
  token: Scalars["String"];
  password: Scalars["String"];
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetPassword: { __typename?: "ResponseStatus"; status: string };
};

export type CentresQueryVariables = Exact<{ [key: string]: never }>;

export type CentresQuery = {
  __typename?: "Query";
  centres: Array<{
    __typename?: "Centre";
    id: number;
    displayText?: string | null;
  }>;
};

export type GroupsQueryVariables = Exact<{ [key: string]: never }>;

export type GroupsQuery = {
  __typename?: "Query";
  groups: Array<{
    __typename?: "Group";
    createdAt: any;
    visible: boolean;
    description: string;
    id: number;
    name: string;
  }>;
};

export type GroupQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GroupQuery = {
  __typename?: "Query";
  group: {
    __typename?: "Group";
    id: number;
    createdAt: any;
    visible: boolean;
    description: string;
    name: string;
    groupMembers: Array<{
      __typename?: "MemberGroupWithoutGroup";
      member: {
        __typename?: "Member";
        id: number;
        firstName: string;
        lastName: string;
        middleName?: string | null;
        email?: string | null;
        createdAt: any;
        gender?: Gender_Type | null;
        phoneMobile?: string | null;
        phoneLand?: string | null;
        insta?: string | null;
        isMember: boolean;
        active: boolean;
        membershipType?: Membership_Type | null;
        messenger?: string | null;
        photo?: string | null;
        refugeName?: string | null;
        sanghaJoinDate?: any | null;
        title?: string | null;
        viber?: string | null;
        user?: {
          __typename?: "User";
          id: number;
          userName: string;
          status: Status;
          role: { __typename?: "Role"; name: string };
        } | null;
        centre?: {
          __typename?: "Centre";
          id: number;
          displayText?: string | null;
        } | null;
      };
    }>;
  };
};

export type CreateGroupMutationVariables = Exact<{
  createGroupInput: CreateGroupInput;
}>;

export type CreateGroupMutation = {
  __typename?: "Mutation";
  createGroup: { __typename?: "Group"; id: number };
};

export type UpdateGroupMutationVariables = Exact<{
  updateGroupInput: UpdateGroupInput;
}>;

export type UpdateGroupMutation = {
  __typename?: "Mutation";
  updateGroup: { __typename?: "Group"; id: number };
};

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteGroupMutation = {
  __typename?: "Mutation";
  removeGroup: { __typename?: "Group"; id: number };
};

export type MembersQueryVariables = Exact<{ [key: string]: never }>;

export type MembersQuery = {
  __typename?: "Query";
  members: Array<{
    __typename?: "Member";
    id: number;
    firstName: string;
    lastName: string;
    tempAddress?: string | null;
    middleName?: string | null;
    email?: string | null;
    createdAt: any;
    yearOfBirth?: number | null;
    gender?: Gender_Type | null;
    phoneLand?: string | null;
    phoneMobile?: string | null;
    phoneOther?: string | null;
    insta?: string | null;
    isMember: boolean;
    active: boolean;
    membershipType?: Membership_Type | null;
    messenger?: string | null;
    photo?: string | null;
    refugeName?: string | null;
    sanghaJoinDate?: any | null;
    title?: string | null;
    viber?: string | null;
    currentAddress?: {
      __typename?: "Address";
      city?: string | null;
      country?: string | null;
      stateProvince?: string | null;
      street?: string | null;
    } | null;
    permanentAddress?: {
      __typename?: "Address";
      city?: string | null;
      country?: string | null;
      stateProvince?: string | null;
      street?: string | null;
    } | null;
    user?: {
      __typename?: "User";
      id: number;
      userName: string;
      status: Status;
      role: { __typename?: "Role"; name: string };
    } | null;
    centre?: {
      __typename?: "Centre";
      id: number;
      displayText?: string | null;
    } | null;
  }>;
};

export type MemberQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type MemberQuery = {
  __typename?: "Query";
  member: {
    __typename?: "Member";
    id: number;
    firstName: string;
    lastName: string;
    note?: string | null;
    middleName?: string | null;
    email?: string | null;
    gender?: Gender_Type | null;
    insta?: string | null;
    isMember: boolean;
    active: boolean;
    yearOfBirth?: number | null;
    phoneLand?: string | null;
    phoneMobile?: string | null;
    phoneOther?: string | null;
    membershipType?: Membership_Type | null;
    messenger?: string | null;
    photo?: string | null;
    refugeName?: string | null;
    sanghaJoinDate?: any | null;
    title?: string | null;
    viber?: string | null;
    currentAddress?: {
      __typename?: "Address";
      city?: string | null;
      country?: string | null;
      stateProvince?: string | null;
      street?: string | null;
    } | null;
    permanentAddress?: {
      __typename?: "Address";
      city?: string | null;
      country?: string | null;
      stateProvince?: string | null;
      street?: string | null;
    } | null;
    user?: {
      __typename?: "User";
      id: number;
      userName: string;
      status: Status;
      role: { __typename?: "Role"; id: number; name: string };
    } | null;
    centre?: {
      __typename?: "Centre";
      id: number;
      displayText?: string | null;
    } | null;
  };
};

export type CreateMemberMutationVariables = Exact<{
  createMemberInput: CreateMemberInput;
}>;

export type CreateMemberMutation = {
  __typename?: "Mutation";
  createMember: {
    __typename?: "Member";
    id: number;
    firstName: string;
    lastName: string;
    centreId?: number | null;
  };
};

export type UpdateMemberMutationVariables = Exact<{
  updateMemberInput: UpdateMemberInput;
}>;

export type UpdateMemberMutation = {
  __typename?: "Mutation";
  updateMember: { __typename?: "Member"; id: number };
};

export type DeleteMemberMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteMemberMutation = {
  __typename?: "Mutation";
  removeMember: { __typename?: "Member"; id: number };
};

export type SendEmailMutationVariables = Exact<{
  sendEmailInput: SendEmailInput;
}>;

export type SendEmailMutation = {
  __typename?: "Mutation";
  sendEmail: { __typename?: "ResponseStatus"; status: string };
};

export type ResourcesQueryVariables = Exact<{ [key: string]: never }>;

export type ResourcesQuery = {
  __typename?: "Query";
  resources: Array<{
    __typename?: "Resource";
    id: number;
    name: string;
    type: string;
    description: string;
    url: string;
  }>;
};

export type ResourceQueryVariables = Exact<{
  resourceId: Scalars["Int"];
}>;

export type ResourceQuery = {
  __typename?: "Query";
  resource: {
    __typename?: "Resource";
    id: number;
    name: string;
    type: string;
    description: string;
    url: string;
    resourceAbhisekhas: Array<{
      __typename?: "AbhisekhaResourceWithoutResource";
      abhisekha: {
        __typename?: "Abhisekha";
        id: number;
        name: string;
        teacher: string;
        description: string;
      };
    }>;
    resourceEvents: Array<{
      __typename?: "EventResourceWithoutResource";
      type: string;
      event: {
        __typename?: "Event";
        id: number;
        name: string;
        startDate: any;
        endDate: any;
      };
    }>;
    resourceMembers: Array<{
      __typename?: "MemberResourceWithoutResource";
      type: string;
      member: {
        __typename?: "Member";
        id: number;
        firstName: string;
        lastName: string;
        middleName?: string | null;
        email?: string | null;
        createdAt: any;
        gender?: Gender_Type | null;
        phoneMobile?: string | null;
        phoneLand?: string | null;
        insta?: string | null;
        isMember: boolean;
        active: boolean;
        membershipType?: Membership_Type | null;
        messenger?: string | null;
        photo?: string | null;
        refugeName?: string | null;
        sanghaJoinDate?: any | null;
        title?: string | null;
        viber?: string | null;
        user?: {
          __typename?: "User";
          id: number;
          userName: string;
          status: Status;
          role: { __typename?: "Role"; name: string };
        } | null;
        centre?: {
          __typename?: "Centre";
          id: number;
          displayText?: string | null;
        } | null;
      };
    }>;
  };
};

export type CreateResourceMutationVariables = Exact<{
  createResourceInput: CreateResourceInput;
}>;

export type CreateResourceMutation = {
  __typename?: "Mutation";
  createResource: { __typename?: "Resource"; id: number };
};

export type UpdateResourceMutationVariables = Exact<{
  updateResourceInput: UpdateResourceInput;
}>;

export type UpdateResourceMutation = {
  __typename?: "Mutation";
  updateResource: { __typename?: "Resource"; id: number };
};

export type DeleteResourceMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteResourceMutation = {
  __typename?: "Mutation";
  removeResource: { __typename?: "Resource"; id: number };
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    id: number;
    userName: string;
    avatar: string;
    status: Status;
    role: { __typename?: "Role"; name: string };
    member: {
      __typename?: "Member";
      id: number;
      firstName: string;
      middleName?: string | null;
      lastName: string;
      email?: string | null;
    };
  }>;
};

export type UserQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type UserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: number;
    userName: string;
    avatar: string;
    role: { __typename?: "Role"; name: string };
    member: {
      __typename?: "Member";
      id: number;
      firstName: string;
      middleName?: string | null;
      lastName: string;
    };
  };
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: {
    __typename?: "User";
    id: number;
    userName: string;
    role: { __typename?: "Role"; id: number; name: string };
    member: { __typename?: "Member"; id: number };
  };
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteUserMutation = {
  __typename?: "Mutation";
  removeUser: { __typename?: "User"; id: number };
};

import { IntrospectionQuery } from "graphql";
export default {
  __schema: {
    queryType: {
      name: "Query"
    },
    mutationType: {
      name: "Mutation"
    },
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "Abhisekha",
        fields: [
          {
            name: "abhisekhaEvents",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventAbhisekhaWithoutAbhisekha",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "abhisekhaMembers",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "MemberAbhisekhaWithoutAbhisekha",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "abhisekhaResources",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "AbhisekhaResourceWithoutAbhisekha",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "description",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resources",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Resource",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "teacher",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "AbhisekhaResourceWithoutAbhisekha",
        fields: [
          {
            name: "abhisekhaId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "resourceId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "AbhisekhaResourceWithoutResource",
        fields: [
          {
            name: "abhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "abhisekhaId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resourceId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Address",
        fields: [
          {
            name: "city",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "country",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "stateProvince",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "street",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Auth",
        fields: [
          {
            name: "accessToken",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "refreshToken",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "User",
                ofType: null
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Centre",
        fields: [
          {
            name: "city",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "country",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "displaySequence",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "displayText",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "stateProvince",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "streetAddress",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Event",
        fields: [
          {
            name: "childEvents",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Event",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "endDate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "eventAbhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventAbhisekhaWithoutEvent",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "eventAbhisekhas",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventAbhisekhaWithoutEvent",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "eventMember",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventMemberWithoutEvent",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "eventMembers",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventMemberWithoutEvent",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "eventResource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventResourceWithoutEvent",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "eventResources",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventResourceWithoutEvent",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isLocked",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "notes",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "parentEvent",
            type: {
              kind: "OBJECT",
              name: "Event",
              ofType: null
            },
            args: []
          },
          {
            name: "parentEventId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "startDate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "EventAbhisekhaWithoutAbhisekha",
        fields: [
          {
            name: "abhisekhaId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "event",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "eventId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "EventAbhisekhaWithoutEvent",
        fields: [
          {
            name: "abhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "abhisekhaId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "eventId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "EventMemberWithoutEvent",
        fields: [
          {
            name: "eventId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "hasAttended",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "member",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "EventMemberWithoutMember",
        fields: [
          {
            name: "event",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "eventId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "hasAttended",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "EventResourceWithoutEvent",
        fields: [
          {
            name: "eventId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "resourceId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "EventResourceWithoutResource",
        fields: [
          {
            name: "event",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "eventId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resourceId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Group",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "description",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "groupMembers",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "MemberGroupWithoutGroup",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "visible",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Member",
        fields: [
          {
            name: "active",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "centre",
            type: {
              kind: "OBJECT",
              name: "Centre",
              ofType: null
            },
            args: []
          },
          {
            name: "centreId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "currentAddress",
            type: {
              kind: "OBJECT",
              name: "Address",
              ofType: null
            },
            args: []
          },
          {
            name: "currentAddressId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "events",
            type: {
              kind: "LIST",
              ofType: {
                kind: "NON_NULL",
                ofType: {
                  kind: "OBJECT",
                  name: "Event",
                  ofType: null
                }
              }
            },
            args: []
          },
          {
            name: "firstName",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "gender",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "insta",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isMember",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "lastName",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "memberAbhisekhas",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "MemberAbhisekhaWithoutMember",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "memberEvents",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventMemberWithoutMember",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "memberGroups",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "MemberGroupWithoutMember",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "memberResources",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "MemberResourceWithoutMember",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "membershipType",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "messenger",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "middleName",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "note",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "notes",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "permanentAddress",
            type: {
              kind: "OBJECT",
              name: "Address",
              ofType: null
            },
            args: []
          },
          {
            name: "permanentAddressId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "phoneLand",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "phoneMobile",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "phoneOther",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "photo",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "refugeName",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "sanghaJoinDate",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "tempAddress",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "title",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "user",
            type: {
              kind: "OBJECT",
              name: "User",
              ofType: null
            },
            args: []
          },
          {
            name: "viber",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "yearOfBirth",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "MemberAbhisekhaWithoutAbhisekha",
        fields: [
          {
            name: "abhisekhaDate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "abhisekhaId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "abhisekhaPlace",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "member",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "MemberAbhisekhaWithoutMember",
        fields: [
          {
            name: "abhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "abhisekhaDate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "abhisekhaId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "abhisekhaPlace",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "MemberGroupWithoutGroup",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "groupId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "member",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "MemberGroupWithoutMember",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "group",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Group",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "groupId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "MemberResourceWithoutMember",
        fields: [
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "resourceId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "MemberResourceWithoutResource",
        fields: [
          {
            name: "member",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resourceId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Mutation",
        fields: [
          {
            name: "changePassword",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "User",
                ofType: null
              }
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createAbhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: [
              {
                name: "createAbhisekhaInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createCentre",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Address",
                ofType: null
              }
            },
            args: [
              {
                name: "createAddressInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createEvent",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: [
              {
                name: "createEventInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createGroup",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Group",
                ofType: null
              }
            },
            args: [
              {
                name: "createGroupInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createMember",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: [
              {
                name: "createMemberInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createResource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: [
              {
                name: "createResourceInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createRole",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Role",
                ofType: null
              }
            },
            args: [
              {
                name: "createRoleInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "createUser",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "User",
                ofType: null
              }
            },
            args: [
              {
                name: "createUserInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "initiateResetPassword",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "ResponseStatus",
                ofType: null
              }
            },
            args: [
              {
                name: "resetPasswordInitiateInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "login",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Auth",
                ofType: null
              }
            },
            args: [
              {
                name: "data",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "refreshToken",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Token",
                ofType: null
              }
            },
            args: [
              {
                name: "token",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeAbhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeAddress",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Address",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeCentre",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Centre",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeEvent",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeGroup",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Group",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeMember",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeResource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeRole",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Role",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "removeUser",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "User",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "resetPassword",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "ResponseStatus",
                ofType: null
              }
            },
            args: [
              {
                name: "resetPasswordInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "sendEmail",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "ResponseStatus",
                ofType: null
              }
            },
            args: [
              {
                name: "sendEmailInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateAbhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: [
              {
                name: "updateAbhisekhaInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateAddress",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Address",
                ofType: null
              }
            },
            args: [
              {
                name: "updateAddressInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateCentre",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Centre",
                ofType: null
              }
            },
            args: [
              {
                name: "updateCentreInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateEvent",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: [
              {
                name: "updateEventInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateGroup",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Group",
                ofType: null
              }
            },
            args: [
              {
                name: "updateGroupInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateMember",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: [
              {
                name: "updateMemberInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateResource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: [
              {
                name: "updateResourceInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "updateRole",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Role",
                ofType: null
              }
            },
            args: [
              {
                name: "updateRoleInput",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Query",
        fields: [
          {
            name: "abhisekha",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Abhisekha",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "abhisekhas",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Abhisekha",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "address",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Address",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "addresses",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Address",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "centre",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Centre",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "centres",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Centre",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "event",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Event",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "group",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Group",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "groups",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Group",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "hello",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: [
              {
                name: "name",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "helloWorld",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "me",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "User",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "member",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "members",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Member",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "resource",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Resource",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "resources",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Resource",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "role",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Role",
                ofType: null
              }
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "roles",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Role",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "User",
                ofType: null
              }
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "users",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "User",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Resource",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "description",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "resourceAbhisekhas",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "AbhisekhaResourceWithoutResource",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "resourceEvents",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "EventResourceWithoutResource",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "resourceMembers",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "MemberResourceWithoutResource",
                    ofType: null
                  }
                }
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "url",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "ResponseStatus",
        fields: [
          {
            name: "status",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Role",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "type",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "users",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "User",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "Token",
        fields: [
          {
            name: "accessToken",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "refreshToken",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "User",
        fields: [
          {
            name: "avatar",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "isDeleted",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "member",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Member",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "memberId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "role",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "Role",
                ofType: null
              }
            },
            args: []
          },
          {
            name: "status",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "uniqueKey",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedBy",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userName",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "SCALAR",
        name: "Any"
      }
    ],
    directives: []
  }
} as unknown as IntrospectionQuery;

export const AbhisekhasDocument = gql`
  query abhisekhas {
    abhisekhas {
      name
      teacher
      updatedAt
      createdAt
      id
      description
    }
  }
`;

export function useAbhisekhasQuery(
  options?: Omit<Urql.UseQueryArgs<AbhisekhasQueryVariables>, "query">
) {
  return Urql.useQuery<AbhisekhasQuery>({
    query: AbhisekhasDocument,
    ...options
  });
}
export const AbhisekhaDocument = gql`
  query abhisekha($abhisekhaId: Int!) {
    abhisekha(id: $abhisekhaId) {
      name
      teacher
      updatedAt
      createdAt
      id
      description
      abhisekhaResources {
        resource {
          id
          name
          type
          url
        }
      }
      abhisekhaMembers {
        abhisekhaDate
        abhisekhaPlace
        type
        member {
          id
          firstName
          lastName
          middleName
          email
          firstName
          createdAt
          gender
          phoneMobile
          phoneLand
          insta
          isMember
          active
          membershipType
          messenger
          photo
          refugeName
          sanghaJoinDate
          title
          viber
          user {
            id
            userName
            status
            role {
              name
            }
          }
          centre {
            id
            displayText
          }
        }
      }
    }
  }
`;

export function useAbhisekhaQuery(
  options: Omit<Urql.UseQueryArgs<AbhisekhaQueryVariables>, "query">
) {
  return Urql.useQuery<AbhisekhaQuery>({
    query: AbhisekhaDocument,
    ...options
  });
}
export const CreateAbhisekhaDocument = gql`
  mutation createAbhisekha($createAbhisekhaInput: CreateAbhisekhaInput!) {
    createAbhisekha(createAbhisekhaInput: $createAbhisekhaInput) {
      id
    }
  }
`;

export function useCreateAbhisekhaMutation() {
  return Urql.useMutation<
    CreateAbhisekhaMutation,
    CreateAbhisekhaMutationVariables
  >(CreateAbhisekhaDocument);
}
export const UpdateAbhisekhaDocument = gql`
  mutation updateAbhisekha($updateAbhisekhaInput: UpdateAbhisekhaInput!) {
    updateAbhisekha(updateAbhisekhaInput: $updateAbhisekhaInput) {
      id
    }
  }
`;

export function useUpdateAbhisekhaMutation() {
  return Urql.useMutation<
    UpdateAbhisekhaMutation,
    UpdateAbhisekhaMutationVariables
  >(UpdateAbhisekhaDocument);
}
export const DeleteAbhisekhaDocument = gql`
  mutation deleteAbhisekha($id: Int!) {
    removeAbhisekha(id: $id) {
      id
    }
  }
`;

export function useDeleteAbhisekhaMutation() {
  return Urql.useMutation<
    DeleteAbhisekhaMutation,
    DeleteAbhisekhaMutationVariables
  >(DeleteAbhisekhaDocument);
}
export const AddressesDocument = gql`
  query addresses {
    addresses {
      id
      street
      city
      stateProvince
      country
    }
  }
`;

export function useAddressesQuery(
  options?: Omit<Urql.UseQueryArgs<AddressesQueryVariables>, "query">
) {
  return Urql.useQuery<AddressesQuery>({
    query: AddressesDocument,
    ...options
  });
}
export const MeDocument = gql`
  query me {
    me {
      userName
      avatar
      member {
        id
        firstName
        lastName
      }
    }
  }
`;

export function useMeQuery(
  options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query">
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
export const LoginDocument = gql`
  mutation login($userName: String!, $password: String!) {
    login(data: { userName: $userName, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const RequestPasswordResetDocument = gql`
  mutation requestPasswordReset($userName: String!) {
    initiateResetPassword(resetPasswordInitiateInput: { userName: $userName }) {
      status
    }
  }
`;

export function useRequestPasswordResetMutation() {
  return Urql.useMutation<
    RequestPasswordResetMutation,
    RequestPasswordResetMutationVariables
  >(RequestPasswordResetDocument);
}
export const ResetPasswordDocument = gql`
  mutation resetPassword($userId: Int!, $token: String!, $password: String!) {
    resetPassword(
      resetPasswordInput: {
        userId: $userId
        token: $token
        password: $password
      }
    ) {
      status
    }
  }
`;

export function useResetPasswordMutation() {
  return Urql.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument);
}
export const CentresDocument = gql`
  query centres {
    centres {
      id
      displayText
    }
  }
`;

export function useCentresQuery(
  options?: Omit<Urql.UseQueryArgs<CentresQueryVariables>, "query">
) {
  return Urql.useQuery<CentresQuery>({ query: CentresDocument, ...options });
}
export const GroupsDocument = gql`
  query groups {
    groups {
      createdAt
      visible
      description
      id
      name
    }
  }
`;

export function useGroupsQuery(
  options?: Omit<Urql.UseQueryArgs<GroupsQueryVariables>, "query">
) {
  return Urql.useQuery<GroupsQuery>({ query: GroupsDocument, ...options });
}
export const GroupDocument = gql`
  query group($id: Int!) {
    group(id: $id) {
      id
      createdAt
      visible
      description
      name
      groupMembers {
        member {
          id
          firstName
          lastName
          middleName
          email
          firstName
          createdAt
          gender
          phoneMobile
          phoneLand
          insta
          isMember
          active
          membershipType
          messenger
          photo
          refugeName
          sanghaJoinDate
          title
          viber
          user {
            id
            userName
            status
            role {
              name
            }
          }
          centre {
            id
            displayText
          }
        }
      }
    }
  }
`;

export function useGroupQuery(
  options: Omit<Urql.UseQueryArgs<GroupQueryVariables>, "query">
) {
  return Urql.useQuery<GroupQuery>({ query: GroupDocument, ...options });
}
export const CreateGroupDocument = gql`
  mutation createGroup($createGroupInput: CreateGroupInput!) {
    createGroup(createGroupInput: $createGroupInput) {
      id
    }
  }
`;

export function useCreateGroupMutation() {
  return Urql.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(
    CreateGroupDocument
  );
}
export const UpdateGroupDocument = gql`
  mutation updateGroup($updateGroupInput: UpdateGroupInput!) {
    updateGroup(updateGroupInput: $updateGroupInput) {
      id
    }
  }
`;

export function useUpdateGroupMutation() {
  return Urql.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(
    UpdateGroupDocument
  );
}
export const DeleteGroupDocument = gql`
  mutation deleteGroup($id: Int!) {
    removeGroup(id: $id) {
      id
    }
  }
`;

export function useDeleteGroupMutation() {
  return Urql.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(
    DeleteGroupDocument
  );
}
export const MembersDocument = gql`
  query members {
    members {
      id
      firstName
      lastName
      tempAddress
      middleName
      email
      firstName
      createdAt
      yearOfBirth
      gender
      phoneLand
      phoneMobile
      phoneOther
      insta
      isMember
      active
      membershipType
      messenger
      photo
      refugeName
      sanghaJoinDate
      title
      viber
      currentAddress {
        city
        country
        stateProvince
        street
      }
      permanentAddress {
        city
        country
        stateProvince
        street
      }
      user {
        id
        userName
        status
        role {
          name
        }
      }
      centre {
        id
        displayText
      }
    }
  }
`;

export function useMembersQuery(
  options?: Omit<Urql.UseQueryArgs<MembersQueryVariables>, "query">
) {
  return Urql.useQuery<MembersQuery>({ query: MembersDocument, ...options });
}
export const MemberDocument = gql`
  query member($id: Int!) {
    member(id: $id) {
      id
      firstName
      lastName
      note
      middleName
      email
      firstName
      gender
      insta
      isMember
      active
      yearOfBirth
      phoneLand
      phoneMobile
      phoneOther
      membershipType
      messenger
      photo
      refugeName
      sanghaJoinDate
      title
      viber
      currentAddress {
        city
        country
        stateProvince
        street
      }
      permanentAddress {
        city
        country
        stateProvince
        street
      }
      user {
        id
        userName
        status
        role {
          id
          name
        }
      }
      centre {
        id
        displayText
      }
    }
  }
`;

export function useMemberQuery(
  options: Omit<Urql.UseQueryArgs<MemberQueryVariables>, "query">
) {
  return Urql.useQuery<MemberQuery>({ query: MemberDocument, ...options });
}
export const CreateMemberDocument = gql`
  mutation createMember($createMemberInput: CreateMemberInput!) {
    createMember(createMemberInput: $createMemberInput) {
      id
      firstName
      lastName
      centreId
    }
  }
`;

export function useCreateMemberMutation() {
  return Urql.useMutation<CreateMemberMutation, CreateMemberMutationVariables>(
    CreateMemberDocument
  );
}
export const UpdateMemberDocument = gql`
  mutation updateMember($updateMemberInput: UpdateMemberInput!) {
    updateMember(updateMemberInput: $updateMemberInput) {
      id
    }
  }
`;

export function useUpdateMemberMutation() {
  return Urql.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(
    UpdateMemberDocument
  );
}
export const DeleteMemberDocument = gql`
  mutation deleteMember($id: Int!) {
    removeMember(id: $id) {
      id
    }
  }
`;

export function useDeleteMemberMutation() {
  return Urql.useMutation<DeleteMemberMutation, DeleteMemberMutationVariables>(
    DeleteMemberDocument
  );
}
export const SendEmailDocument = gql`
  mutation sendEmail($sendEmailInput: SendEmailInput!) {
    sendEmail(sendEmailInput: $sendEmailInput) {
      status
    }
  }
`;

export function useSendEmailMutation() {
  return Urql.useMutation<SendEmailMutation, SendEmailMutationVariables>(
    SendEmailDocument
  );
}
export const ResourcesDocument = gql`
  query resources {
    resources {
      id
      name
      type
      description
      url
    }
  }
`;

export function useResourcesQuery(
  options?: Omit<Urql.UseQueryArgs<ResourcesQueryVariables>, "query">
) {
  return Urql.useQuery<ResourcesQuery>({
    query: ResourcesDocument,
    ...options
  });
}
export const ResourceDocument = gql`
  query resource($resourceId: Int!) {
    resource(id: $resourceId) {
      id
      name
      type
      description
      url
      resourceAbhisekhas {
        abhisekha {
          id
          name
          teacher
          description
        }
      }
      resourceEvents {
        type
        event {
          id
          name
          startDate
          endDate
        }
      }
      resourceMembers {
        type
        member {
          id
          firstName
          lastName
          middleName
          email
          firstName
          createdAt
          gender
          phoneMobile
          phoneLand
          insta
          isMember
          active
          membershipType
          messenger
          photo
          refugeName
          sanghaJoinDate
          title
          viber
          user {
            id
            userName
            status
            role {
              name
            }
          }
          centre {
            id
            displayText
          }
        }
      }
    }
  }
`;

export function useResourceQuery(
  options: Omit<Urql.UseQueryArgs<ResourceQueryVariables>, "query">
) {
  return Urql.useQuery<ResourceQuery>({ query: ResourceDocument, ...options });
}
export const CreateResourceDocument = gql`
  mutation createResource($createResourceInput: CreateResourceInput!) {
    createResource(createResourceInput: $createResourceInput) {
      id
    }
  }
`;

export function useCreateResourceMutation() {
  return Urql.useMutation<
    CreateResourceMutation,
    CreateResourceMutationVariables
  >(CreateResourceDocument);
}
export const UpdateResourceDocument = gql`
  mutation updateResource($updateResourceInput: UpdateResourceInput!) {
    updateResource(updateResourceInput: $updateResourceInput) {
      id
    }
  }
`;

export function useUpdateResourceMutation() {
  return Urql.useMutation<
    UpdateResourceMutation,
    UpdateResourceMutationVariables
  >(UpdateResourceDocument);
}
export const DeleteResourceDocument = gql`
  mutation deleteResource($id: Int!) {
    removeResource(id: $id) {
      id
    }
  }
`;

export function useDeleteResourceMutation() {
  return Urql.useMutation<
    DeleteResourceMutation,
    DeleteResourceMutationVariables
  >(DeleteResourceDocument);
}
export const UsersDocument = gql`
  query users {
    users {
      id
      userName
      avatar
      status
      role {
        name
      }
      member {
        id
        firstName
        middleName
        lastName
        email
      }
    }
  }
`;

export function useUsersQuery(
  options?: Omit<Urql.UseQueryArgs<UsersQueryVariables>, "query">
) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
}
export const UserDocument = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      userName
      avatar
      role {
        name
      }
      member {
        id
        firstName
        middleName
        lastName
      }
    }
  }
`;

export function useUserQuery(
  options: Omit<Urql.UseQueryArgs<UserQueryVariables>, "query">
) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
}
export const CreateUserDocument = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      userName
      role {
        id
        name
      }
      member {
        id
      }
    }
  }
`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument
  );
}
export const DeleteUserDocument = gql`
  mutation deleteUser($id: Int!) {
    removeUser(id: $id) {
      id
    }
  }
`;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument
  );
}

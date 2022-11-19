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

export enum CentreAffiliationType {
  Australia = "Australia",
  Hetauda = "Hetauda",
  MahendraNagar = "MahendraNagar",
  Nepal = "Nepal",
  None = "None",
  Thailand = "Thailand",
  Uk = "UK",
  Usa = "USA"
}

/** Types of centre affiliation */
export enum CentreAffiliation_Type {
  Australia = "Australia",
  Hetauda = "Hetauda",
  MahendraNagar = "MahendraNagar",
  Nepal = "Nepal",
  None = "None",
  Thailand = "Thailand",
  Uk = "UK",
  Usa = "USA"
}

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

export type ChangePasswordInput = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type CreateCentreInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  displaySequence: Scalars["Int"];
  displayText: Scalars["String"];
  name: Scalars["String"];
  stateProvince?: InputMaybe<Scalars["String"]>;
  streetAddress?: InputMaybe<Scalars["String"]>;
};

export type CreateGroupInput = {
  description: Scalars["String"];
  memberIds: Array<Scalars["Int"]>;
  name: Scalars["String"];
  visible: Scalars["Boolean"];
};

export type CreateMemberInput = {
  active: Scalars["Boolean"];
  centerAffiliation: Scalars["String"];
  centreId?: InputMaybe<Scalars["Int"]>;
  currentAddress?: InputMaybe<Scalars["String"]>;
  dob?: InputMaybe<Scalars["DateTime"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName: Scalars["String"];
  gender?: InputMaybe<Scalars["String"]>;
  groupIds?: InputMaybe<Array<Scalars["Int"]>>;
  insta?: InputMaybe<Scalars["String"]>;
  isMember: Scalars["Boolean"];
  lastName: Scalars["String"];
  membershipType?: InputMaybe<Scalars["String"]>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  permanentAddress?: InputMaybe<Scalars["String"]>;
  phonePrimary?: InputMaybe<Scalars["String"]>;
  phoneSecondary?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  viber?: InputMaybe<Scalars["String"]>;
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

export type EnumCentreAffiliationTypeFilter = {
  equals?: InputMaybe<CentreAffiliationType>;
  in?: InputMaybe<Array<CentreAffiliationType>>;
  not?: InputMaybe<EnumCentreAffiliationTypeFilter>;
  notIn?: InputMaybe<Array<CentreAffiliationType>>;
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
  id: Scalars["Int"];
  /** Identifies the date and time when the object was last updated. */
  isDeleted: Scalars["Boolean"];
  members: Array<Member>;
  name: Scalars["String"];
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
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
  memberGroups?: InputMaybe<MemberGroupsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  visible?: InputMaybe<BoolFilter>;
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
  centerAffiliation: CentreAffiliation_Type;
  centre?: Maybe<Centre>;
  centreId?: Maybe<Scalars["Int"]>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  /** Identifies who created the object. */
  createdBy?: Maybe<Scalars["String"]>;
  currentAddress?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  gender?: Maybe<Gender_Type>;
  groups: Array<Group>;
  id: Scalars["Int"];
  insta?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  isDeleted: Scalars["Boolean"];
  isMember: Scalars["Boolean"];
  lastName: Scalars["String"];
  membershipType?: Maybe<Membership_Type>;
  messenger?: Maybe<Scalars["String"]>;
  middleName?: Maybe<Scalars["String"]>;
  permanentAddress?: Maybe<Scalars["String"]>;
  phonePrimary?: Maybe<Scalars["String"]>;
  phoneSecondary?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  refugeName?: Maybe<Scalars["String"]>;
  sanghaJoinDate?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  /** Identifies who made the last update to the object. */
  updatedBy?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  viber?: Maybe<Scalars["String"]>;
};

export type MemberGroupsListRelationFilter = {
  every?: InputMaybe<MemberGroupsWhereInput>;
  none?: InputMaybe<MemberGroupsWhereInput>;
  some?: InputMaybe<MemberGroupsWhereInput>;
};

export type MemberGroupsWhereInput = {
  AND?: InputMaybe<Array<MemberGroupsWhereInput>>;
  NOT?: InputMaybe<Array<MemberGroupsWhereInput>>;
  OR?: InputMaybe<Array<MemberGroupsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<IntFilter>;
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

export type MemberWhereInput = {
  AND?: InputMaybe<Array<MemberWhereInput>>;
  NOT?: InputMaybe<Array<MemberWhereInput>>;
  OR?: InputMaybe<Array<MemberWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  centerAffiliation?: InputMaybe<EnumCentreAffiliationTypeFilter>;
  centre?: InputMaybe<CentreRelationFilter>;
  centreId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  currentAddress?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderTypeFilter>;
  id?: InputMaybe<IntFilter>;
  insta?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  isMember?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  memberGroups?: InputMaybe<MemberGroupsListRelationFilter>;
  membershipType?: InputMaybe<EnumMembershipTypeFilter>;
  messenger?: InputMaybe<StringFilter>;
  middleName?: InputMaybe<StringFilter>;
  permanentAddress?: InputMaybe<StringFilter>;
  phonePrimary?: InputMaybe<StringFilter>;
  phoneSecondary?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  refugeName?: InputMaybe<StringFilter>;
  sanghaJoinDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  viber?: InputMaybe<StringFilter>;
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
  createCentre: Centre;
  createGroup: Group;
  createMember: Member;
  createRole: Role;
  createUser: User;
  initiateResetPassword: ResponseStatus;
  login: Auth;
  refreshToken: Token;
  removeCentre: Centre;
  removeGroup: Group;
  removeMember: Member;
  removeRole: Role;
  removeUser: User;
  resetPassword: ResponseStatus;
  updateCentre: Centre;
  updateGroup: Group;
  updateMember: Member;
  updateRole: Role;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationCreateCentreArgs = {
  createCentreInput: CreateCentreInput;
};

export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};

export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput;
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

export type MutationRemoveCentreArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveGroupArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveMemberArgs = {
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

export type MutationUpdateCentreArgs = {
  updateCentreInput: UpdateCentreInput;
};

export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput;
};

export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput;
};

export type MutationUpdateRoleArgs = {
  updateRoleInput: UpdateRoleInput;
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

export type Query = {
  __typename?: "Query";
  centre: Centre;
  centres: Array<Centre>;
  group: Group;
  groups: Array<Group>;
  hello: Scalars["String"];
  helloWorld: Scalars["String"];
  me: User;
  member: Member;
  members: Array<Member>;
  role: Role;
  roles: Array<Role>;
  user: User;
  users: Array<User>;
};

export type QueryCentreArgs = {
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

export type QueryRoleArgs = {
  where?: InputMaybe<RoleWhereInput>;
};

export type QueryRolesArgs = {
  where?: InputMaybe<RoleWhereInput>;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type ResetPasswordInitiateInput = {
  userName: Scalars["String"];
};

export type ResetPasswordInput = {
  password: Scalars["String"];
  token: Scalars["String"];
  userId: Scalars["Int"];
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
  /** Identifies the date and time when the object was last updated. */
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

/** Type of the role */
export enum Role_Type {
  Default = "DEFAULT",
  System = "SYSTEM"
}

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

export type UpdateGroupInput = {
  description: Scalars["String"];
  id: Scalars["Int"];
  memberIds: Array<Scalars["Int"]>;
  name: Scalars["String"];
  visible: Scalars["Boolean"];
};

export type UpdateMemberInput = {
  active: Scalars["Boolean"];
  centerAffiliation: Scalars["String"];
  centreId?: InputMaybe<Scalars["Int"]>;
  currentAddress?: InputMaybe<Scalars["String"]>;
  dob?: InputMaybe<Scalars["DateTime"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName: Scalars["String"];
  gender?: InputMaybe<Scalars["String"]>;
  groupIds?: InputMaybe<Array<Scalars["Int"]>>;
  id: Scalars["Int"];
  insta?: InputMaybe<Scalars["String"]>;
  isMember: Scalars["Boolean"];
  lastName: Scalars["String"];
  membershipType?: InputMaybe<Scalars["String"]>;
  messenger?: InputMaybe<Scalars["String"]>;
  middleName?: InputMaybe<Scalars["String"]>;
  permanentAddress?: InputMaybe<Scalars["String"]>;
  phonePrimary?: InputMaybe<Scalars["String"]>;
  phoneSecondary?: InputMaybe<Scalars["String"]>;
  photo?: InputMaybe<Scalars["String"]>;
  refugeName?: InputMaybe<Scalars["String"]>;
  sanghaJoinDate?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  viber?: InputMaybe<Scalars["String"]>;
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
  /** Identifies the date and time when the object was last updated. */
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
    members: Array<{
      __typename?: "Member";
      id: number;
      firstName: string;
      lastName: string;
      middleName?: string | null;
      centerAffiliation: CentreAffiliation_Type;
      currentAddress?: string | null;
      dob?: any | null;
      email?: string | null;
      createdAt: any;
      gender?: Gender_Type | null;
      insta?: string | null;
      isMember: boolean;
      active: boolean;
      membershipType?: Membership_Type | null;
      messenger?: string | null;
      permanentAddress?: string | null;
      phonePrimary?: string | null;
      phoneSecondary?: string | null;
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
    middleName?: string | null;
    centerAffiliation: CentreAffiliation_Type;
    currentAddress?: string | null;
    dob?: any | null;
    email?: string | null;
    createdAt: any;
    gender?: Gender_Type | null;
    insta?: string | null;
    isMember: boolean;
    active: boolean;
    membershipType?: Membership_Type | null;
    messenger?: string | null;
    permanentAddress?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
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
    middleName?: string | null;
    centerAffiliation: CentreAffiliation_Type;
    centreId?: number | null;
    currentAddress?: string | null;
    dob?: any | null;
    email?: string | null;
    gender?: Gender_Type | null;
    insta?: string | null;
    isMember: boolean;
    active: boolean;
    membershipType?: Membership_Type | null;
    messenger?: string | null;
    permanentAddress?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
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
            name: "centerAffiliation",
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
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "dob",
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
            name: "permanentAddress",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "phonePrimary",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "phoneSecondary",
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
            name: "createCentre",
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
                name: "createCentreInput",
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
      members {
        id
        firstName
        lastName
        middleName
        centerAffiliation
        currentAddress
        dob
        email
        firstName
        createdAt
        gender
        insta
        isMember
        active
        membershipType
        messenger
        permanentAddress
        currentAddress
        phonePrimary
        phoneSecondary
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
      middleName
      centerAffiliation
      currentAddress
      dob
      email
      firstName
      createdAt
      gender
      insta
      isMember
      active
      membershipType
      messenger
      permanentAddress
      currentAddress
      phonePrimary
      phoneSecondary
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
      middleName
      centerAffiliation
      centreId
      currentAddress
      dob
      email
      firstName
      gender
      insta
      isMember
      active
      membershipType
      messenger
      permanentAddress
      currentAddress
      phonePrimary
      phoneSecondary
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

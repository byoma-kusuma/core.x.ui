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

export type ChangePasswordInput = {
  newPassword: Scalars["String"];
  oldPassword: Scalars["String"];
};

export type CreateMemberInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"];
};

export type CreateRoleInput = {
  name: Scalars["String"];
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
export enum GenderTypes {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
  PreferNotToSay = "PREFER_NOT_TO_SAY"
}

export type LoginInput = {
  password: Scalars["String"];
  userName: Scalars["String"];
};

export type Member = {
  __typename?: "Member";
  active: Scalars["Boolean"];
  centerAffiliation: Scalars["String"];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  currentAddress?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  firstName: Scalars["String"];
  gender?: Maybe<GenderTypes>;
  id: Scalars["ID"];
  insta?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  isDeleted: Scalars["Boolean"];
  isMember: Scalars["Boolean"];
  lastName: Scalars["String"];
  membershipType?: Maybe<Scalars["String"]>;
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
  viber?: Maybe<Scalars["String"]>;
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
  centerAffiliation?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  currentAddress?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumGenderTypeFilter>;
  id?: InputMaybe<StringFilter>;
  insta?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  isMember?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
  membershipType?: InputMaybe<StringFilter>;
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

export type Mutation = {
  __typename?: "Mutation";
  changePassword: User;
  createMember: Member;
  createRole: Role;
  login: Auth;
  refreshToken: Token;
  removeMember: Member;
  removeRole: Role;
  updateMember: Member;
  updateRole: Role;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput;
};

export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRefreshTokenArgs = {
  token: Scalars["JWT"];
};

export type MutationRemoveMemberArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveRoleArgs = {
  id: Scalars["Int"];
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
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  password?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
  helloWorld: Scalars["String"];
  me: User;
  member: Member;
  members: Array<Member>;
  role: Role;
  roles: Array<Role>;
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

export type Role = {
  __typename?: "Role";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** Identifies the date and time when the object was last updated. */
  isDeleted: Scalars["Boolean"];
  name: Scalars["String"];
  type: Role_Type;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
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
  id?: InputMaybe<StringFilter>;
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

export type UpdateMemberInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]>;
  id: Scalars["Int"];
};

export type UpdateRoleInput = {
  id: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** Identifies the date and time when the object was last updated. */
  isDeleted: Scalars["Boolean"];
  role: Role;
  status: Status;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
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
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  member?: InputMaybe<MemberRelationFilter>;
  memberId?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  passwordHistory?: InputMaybe<PasswordHistoryRelationFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumUserStatusFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me: { __typename?: "User"; userName: string };
};

export type LoginMutationVariables = Exact<{
  userName: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "Auth"; accessToken: any; refreshToken: any };
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

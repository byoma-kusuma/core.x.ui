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

export type LoginInput = {
  password: Scalars["String"];
  userName: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword: User;
  createRole: Role;
  login: Auth;
  refreshToken: Token;
  removeRole: Role;
  signup: Auth;
  updateRole: Role;
  updateUser: User;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
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

export type MutationRemoveRoleArgs = {
  id: Scalars["Int"];
};

export type MutationSignupArgs = {
  data: SignupInput;
};

export type MutationUpdateRoleArgs = {
  updateRoleInput: UpdateRoleInput;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
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
  role: Role;
  roles: Array<Role>;
};

export type QueryHelloArgs = {
  name: Scalars["String"];
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

export type SignupInput = {
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  userName: Scalars["String"];
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

export type UpdateRoleInput = {
  id: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  roleName?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** Identifies the date and time when the object was last updated. */
  isDeleted: Scalars["Boolean"];
  lastName?: Maybe<Scalars["String"]>;
  role: Role;
  status: Status;
  /** Unique key associated with the object. */
  uniqueKey?: Maybe<Scalars["String"]>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars["DateTime"];
  userName: Scalars["String"];
};

export type UserDetailRelationFilter = {
  is?: InputMaybe<UserDetailWhereInput>;
  isNot?: InputMaybe<UserDetailWhereInput>;
};

export type UserDetailWhereInput = {
  AND?: InputMaybe<Array<UserDetailWhereInput>>;
  NOT?: InputMaybe<Array<UserDetailWhereInput>>;
  OR?: InputMaybe<Array<UserDetailWhereInput>>;
  avatar?: InputMaybe<StringFilter>;
  birthday?: InputMaybe<StringFilter>;
  company?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  notes?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  secondaryEmail?: InputMaybe<StringFilter>;
  steetAddress2?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  uniqueKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBy?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  zip?: InputMaybe<StringFilter>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  detail?: InputMaybe<UserDetailRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringFilter>;
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
  me: {
    __typename?: "User";
    firstName?: string | null;
    lastName?: string | null;
    userName: string;
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
            name: "signup",
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
          },
          {
            name: "updateUser",
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
            name: "lastName",
            type: {
              kind: "SCALAR",
              name: "Any"
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
      firstName
      lastName
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

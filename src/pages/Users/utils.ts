import { UsersQuery } from "../../generated/graphql";
import { getMemberFullName } from "../Members/utils";

export function formatUserListData(data: UsersQuery | undefined) {
  if (!data) return [];
  return data.users.map((r) => ({
    ...r,
    fullName: getMemberFullName(r.member),
    email: r.member.email
  }));
}

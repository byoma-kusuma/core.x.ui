import { GroupQuery, MembersQuery } from "../../generated/graphql";
import { getMemberFullName } from "../Members/utils";

export function formatGroupMembersListData(data: GroupQuery | undefined) {
  if (!data) return [];
  return data.group.members.map((r) => ({
    ...r,
    fullName: getMemberFullName(r),
    combinedPhone:
      r.phonePrimary && r.phoneSecondary
        ? `${r.phonePrimary}, ${r.phoneSecondary}`
        : r.phonePrimary || r.phoneSecondary,
    userName: r.user?.userName,
    userStatus: r.user?.status
  }));
}

export function formatGroupAddMemberListData(
  data: MembersQuery | undefined,
  group: GroupQuery | undefined
) {
  if (!data || !group) return [];
  const groupMembersHash = group.group.members.reduce((acc, cur) => {
    acc[cur.id] = true;
    return acc;
  }, {} as Record<number, boolean>);
  return data.members
    .filter((m) => !groupMembersHash[m.id])
    .map((r) => ({
      ...r,
      fullName: getMemberFullName(r),
      combinedPhone:
        r.phonePrimary && r.phoneSecondary
          ? `${r.phonePrimary}, ${r.phoneSecondary}`
          : r.phonePrimary || r.phoneSecondary,
      userName: r.user?.userName,
      userStatus: r.user?.status
    }));
}

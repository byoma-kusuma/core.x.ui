import { MembersQuery } from "../../generated/graphql";
import { completeTrim } from "../../utils/formatters";

export function getMemberFullName(member?: {
  firstName: string;
  lastName: string;
  middleName?: string | null;
}) {
  if (!member) {
    console.error("member is undefined at getMemberFullName");
    return "";
  }
  return completeTrim(
    `${member.firstName} ${member.middleName || ""}${member.lastName}`
  );
}

export function formatMemberListData(data: MembersQuery | undefined) {
  if (!data) return [];
  return data.members.map((r) => ({
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

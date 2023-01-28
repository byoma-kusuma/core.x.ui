import { completeTrim } from "../formatters/commonFormatters";

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

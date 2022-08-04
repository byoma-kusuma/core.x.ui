export function completeTrim(s: string) {
  return s.replace(/ +/g, " ");
}

export function getMemberFullName(member: {
  firstName: string;
  lastName: string;
  middleName?: string | null;
}) {
  return completeTrim(
    `${member.firstName} ${member.middleName || ""}${member.lastName}`
  );
}

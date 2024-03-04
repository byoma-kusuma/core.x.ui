/* eslint-disable @typescript-eslint/no-explicit-any */

import { MemberDocument, MemberQuery } from "generated/graphql";
import React from "react";

import { useQuery } from "urql";
import { getMemberFullName } from "utils/member";

import MemberDetailForm from "./memberFormContainerComponents/MemberDetailsForm";
import MemberUserSection, {
  MemberUserSectionProps
} from "./memberFormContainerComponents/MemberUserSection";

interface Props {
  height: number;
  id?: number;
}

export default function MemberFormContainer(props: Props) {
  const { id } = props;

  const [{ data }] = useQuery<MemberQuery>({
    query: MemberDocument,
    pause: !id,
    variables: { id }
  });

  const memberFormUserSectionProps: MemberUserSectionProps = {
    memberId: id,
    doesMemberHasUser: Boolean(data?.member.user),
    memberName: data ? getMemberFullName(data?.member) : null,
    memberUserRoleName: data?.member.user?.role.name,
    memberUserName: data?.member.user?.userName
  };

  return (
    <>
      <MemberUserSection {...memberFormUserSectionProps} />
      <MemberDetailForm {...props} />
    </>
  );
}

import { Paper, styled } from "@mui/material";
import { UserDocument, UserQuery } from "generated/graphql";
import * as React from "react";
import { useQuery } from "urql";

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2),
  minHeight: "480px"
}));

interface UserFormContainerProps {
  id?: string;
}

export default function UserFormContainer(props: UserFormContainerProps) {
  const { id } = props;

  const [{ data }] = useQuery<UserQuery>({
    query: UserDocument,
    pause: !id,
    variables: { id }
  });

  return <RootStyle elevation={1}>{data?.user.userName}</RootStyle>;
}

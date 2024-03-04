/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PhotoUploader from "components/PhotoUploader";
import {
  useCreateUserMutation,
  useRequestPasswordResetMutation
} from "generated/graphql";
import { useConfirm } from "material-ui-confirm";
import React from "react";
import GqlApiHandler from "services/GqlApiHandler";

export interface MemberUserSectionProps {
  memberId?: number;
  doesMemberHasUser: boolean;
  memberUserName?: string;
  memberUserRoleName?: string;
  memberName: string | null;
}

const UserInfoItemStyle = styled("div")(() => ({
  width: "100%"
}));

const MemberUserSection: React.FC<MemberUserSectionProps> = (props) => {
  const [{ fetching: creatingUser }, createUserMut] = useCreateUserMutation();
  const [{ fetching: resettingPassword }, passwordResetMut] =
    useRequestPasswordResetMutation();

  const confirm = useConfirm();

  const handleUserCreate = (memberName: string, memberId?: number) => {
    if (!memberId) return;

    confirm({
      description: (
        <Typography>
          Are you sure you want to create an administrator for the user{" "}
          {memberName}?
        </Typography>
      ),
      title: "Confirm admin creation",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(async () => {
      new GqlApiHandler(
        await createUserMut({
          createUserInput: { memberId }
        })
      )
        .onSuccess(({ notiSuccess }) => {
          notiSuccess("User successfully created!");
        })
        .onError(({ notiErr }) => notiErr());
    });
  };

  const handleUserPasswordReset = (
    passwordResetProps: MemberUserSectionProps
  ) => {
    confirm({
      description: (
        <Typography>
          Are you sure you want to reset the password for the user{" "}
          {passwordResetProps.memberUserName}?
        </Typography>
      ),
      title: "Confirm password reset",
      confirmationButtonProps: {
        color: "primary",
        variant: "contained"
      },
      confirmationText: "Confirm"
    }).then(async () => {
      new GqlApiHandler(
        await passwordResetMut({
          userName: passwordResetProps.memberUserName ?? ""
        })
      )
        .onSuccess(({ notiSuccess }) => {
          notiSuccess(
            `Password reset instructions successfully sent to ${passwordResetProps.memberUserName}!`
          );
        })
        .onError(({ notiErr }) => notiErr());
    });
  };
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <PhotoUploader height={"calc(100vh - 200px)"}>
          {props.memberId && (
            <UserInfoItemStyle style={{ paddingBottom: "16px" }}>
              <Typography variant="subtitle1">User</Typography>
              {props.doesMemberHasUser ? (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box>
                    <Link component="button" variant="subtitle2">
                      {props.doesMemberHasUser}
                    </Link>
                    <br />
                    <Typography variant="body2" fontSize={12}>
                      {props.memberUserRoleName}
                    </Typography>
                  </Box>
                  <LoadingButton
                    variant="contained"
                    size="small"
                    sx={{ ml: "8px" }}
                    loading={resettingPassword}
                    onClick={() => {
                      handleUserPasswordReset(props);
                    }}
                  >
                    Reset Password
                  </LoadingButton>
                </Box>
              ) : (
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" color="GrayText">
                    No user has been created for this member.
                  </Typography>
                  <Box>
                    <LoadingButton
                      variant="contained"
                      size="small"
                      sx={{ ml: "8px" }}
                      loading={creatingUser}
                      onClick={() => {
                        handleUserCreate(
                          props.memberName as string,
                          props.memberId
                        );
                      }}
                    >
                      Create
                    </LoadingButton>
                  </Box>
                </Box>
              )}
            </UserInfoItemStyle>
          )}
        </PhotoUploader>
      </Grid>
    </>
  );
};

export default MemberUserSection;

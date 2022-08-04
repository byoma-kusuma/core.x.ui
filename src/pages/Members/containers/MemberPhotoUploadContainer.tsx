import { LoadingButton } from "@mui/lab";
import { styled, Switch, Typography } from "@mui/material";
import * as React from "react";
import PhotoUploader from "../../../components/PhotoUploader";

const ItemStyle = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-bewteen",
  alignItems: "center",
  width: "100%"
}));

interface Props {
  height: number;
  memberId?: string;
}

export default function MemberPhotoUploadContainer(props: Props) {
  const { height, memberId } = props;
  return (
    <PhotoUploader height={height}>
      {memberId && (
        <ItemStyle style={{ paddingBottom: "16px" }}>
          <div>
            <Typography variant="subtitle1">User</Typography>
            <Typography variant="body1" color="GrayText">
              No user has been created for this member.
            </Typography>
          </div>
          <LoadingButton variant="contained">Create</LoadingButton>
        </ItemStyle>
      )}
      <ItemStyle>
        <div>
          <Typography variant="subtitle1">Member Status</Typography>
          <Typography variant="body1" color="GrayText">
            Disabling this will make the member inactive (i.e. Member is not
            affiliated to the organization)
          </Typography>
        </div>
        <Switch defaultChecked />
      </ItemStyle>
    </PhotoUploader>
  );
}

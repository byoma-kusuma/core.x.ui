import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "components/Iconify";
import * as React from "react";

const RootStyle = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2)
}));

const PhotoHolderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6),
  textAlign: "center"
}));

const DottedWrapper = styled("div")(() => ({
  borderRadius: "50%",
  border: "1px dashed lightgrey",
  height: "156px",
  width: "156px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const PhotoHolder = styled("div")(({ theme }) => ({
  borderRadius: "50%",
  border: "1px solid lightgrey",
  height: "136px",
  width: "136px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  flexDirection: "column",
  backgroundColor: theme.palette.grey[500_12],
  transition: "0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.grey[500_32]
  }
}));

export interface PhotoUploaderProps {
  children: React.ReactNode;
  height?: number | string;
  photo?: string;
}

export default function PhotoUploader(props: PhotoUploaderProps) {
  const { children, height, photo } = props;
  return (
    <RootStyle elevation={1} sx={{ height }}>
      <PhotoHolderContainer>
        <DottedWrapper>
          {photo ? (
            <a href={photo} target="_blank" rel="noopener noreferrer">
              <img
                src={photo}
                alt="Uploaded Photo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
            </a>
          ) : (
            <div>
              <PhotoHolder>
                <Iconify
                  icon="eva:camera-outline"
                  sx={{ height: 24, width: 24, color: "GrayText" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "GrayText", mt: "8px" }}
                >
                  Upload photo (*.jpeg, *.jpg, *.png, *.gif)
                </Typography>
              </PhotoHolder>
            </div>
          )}
        </DottedWrapper>
      </PhotoHolderContainer>
      {children}
    </RootStyle>
  );
}

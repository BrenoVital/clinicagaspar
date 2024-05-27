import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxIcon = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: 1,
}));

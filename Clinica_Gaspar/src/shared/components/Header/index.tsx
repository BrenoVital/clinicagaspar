import { Box } from "@mui/material";
import BottomMenu from "./components/TopMenu/BottomMenu";
import TopMenu from "./components/TopMenu";

export default function Header() {
  return (
    <Box>
      <TopMenu />
      <BottomMenu />
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import { BoxIcon } from "./style";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function TopMenu() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <BoxIcon>
        <EmailIcon fontSize="small" />
        <Typography variant="caption" color="ButtonFace">
          algum.email@algum.email.com.br
        </Typography>
      </BoxIcon>
      <BoxIcon>
        <WhatsAppIcon fontSize="small" />
        <Typography variant="caption" color="ButtonFace">
          (11) 99999-9999
        </Typography>
      </BoxIcon>
      <BoxIcon>
        <FmdGoodIcon fontSize="small" />
        <Typography variant="caption" color="ButtonFace">
          Rua Alguma Coisa, 123
        </Typography>
      </BoxIcon>
    </Box>
  );
}

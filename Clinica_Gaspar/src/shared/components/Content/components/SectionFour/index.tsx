import { Box, Container, Typography } from "@mui/material";

export default function SectionFour() {
  return (
    <Box sx={{ padding: 4 }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
          Serviços
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Nossa clínica de fisioterapia possui um portfólio completo de
          serviços.
        </Typography>
      </Container>
    </Box>
  );
}

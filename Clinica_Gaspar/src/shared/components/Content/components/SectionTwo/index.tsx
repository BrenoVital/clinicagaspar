import { Box, Container, Typography } from "@mui/material";

export default function SectionTwo() {
  return (
    <Box sx={{ padding: 4 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Clínica Gaspar
        </Typography>
        <Typography variant="body1">
          Somos uma clínica de fisioterapia multidisciplinar focada <br />
          em melhorar sua qualidade de vida. Como podemos <br />
          ajudar você?
        </Typography>
      </Container>
    </Box>
  );
}

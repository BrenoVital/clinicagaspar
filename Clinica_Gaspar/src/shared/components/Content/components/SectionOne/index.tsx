import { Box, Button, Container, Typography } from "@mui/material";

export default function SectionOne() {
  return (
    <Box
      sx={{ padding: 4, backgroundColor: "primary.main", textAlign: "center" }}
    >
      <Container>
        <Typography variant="h1" sx={{ fontSize: "2rem", mb: 2 }}>
          Terapia manual, rpg, reabilitação funcional <br /> e outros recursos
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<i className="fas fa-arrow-right"></i>}
        >
          Conheça a Fisioterapia
        </Button>
      </Container>
    </Box>
  );
}

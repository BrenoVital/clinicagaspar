import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function SectionFive() {
  const serviceDetails = [
    {
      imgSrc: "Assets/Images/folha.png",
      title: "Fisioterapia",
      description:
        "Torcicolo, dores na coluna, ombro ou joelhos, gastrite nervosa, incômodos causados por stress.",
    },
    {
      imgSrc: "Assets/Images/diamante.png",
      title: "Osteopatia",
      description:
        "Nossos profissionais oferecem o olhar individualizado e suas necessidades e objetivos pessoais.",
    },
    {
      imgSrc: "Assets/Images/alerta.png",
      title: "Bike fit",
      description:
        "Evolução orientada para ciclismo, crossfit, lutas, tênis, natação, basquete, entre outros esportes.",
    },
    {
      imgSrc: "Assets/Images/trauma.png",
      title: "RNPB",
      description:
        "Utilizamos a Naturopatia para buscar o reequilíbrio, e a melhora constante de qualidade de vida.",
    },
  ];
  return (
    <Box sx={{ padding: 4, backgroundColor: "background.default" }}>
      <Container>
        <Grid container spacing={4}>
          {serviceDetails.map((detail, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={detail.imgSrc}
                  alt={detail.title}
                  title={detail.title}
                  style={{ width: "100px", marginBottom: "16px" }}
                />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {detail.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {detail.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Conheça
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

import { Box, Container, Grid, Typography } from "@mui/material";

export default function SectionThree() {
  const services = [
    {
      imgSrc: "Assets/Images/cruz.png",
      title: "Tratamento da Dor",
      description:
        "Torcicolo, dores na coluna, ombro ou joelhos, gastrite nervosa, incômodos causados por stress.",
    },
    {
      imgSrc: "Assets/Images/coracao.png",
      title: "Cuidado com a Saúde",
      description:
        "Nossos profissionais oferecem um olhar individualizado às suas necessidades e objetivos pessoais.",
    },
    {
      imgSrc: "Assets/Images/bicicleta.png",
      title: "Aumento de Performance",
      description:
        "Evolução orientada para ciclismo, corrida, crossfit, lutas, tênis, natação, vôlei, basquete, entre outros esportes.",
    },
    {
      imgSrc: "Assets/Images/lotus.png",
      title: "Equilibrio Corporal",
      description:
        "Utilizamos a Naturopatia para buscar o reequilíbrio somatoemocional, melhorando sua qualidade de vida.",
    },
  ];
  return (
    <Box sx={{ padding: 4, backgroundColor: "background.paper" }}>
      <Container>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  title={service.title}
                  style={{ width: "100px", marginBottom: "16px" }}
                />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

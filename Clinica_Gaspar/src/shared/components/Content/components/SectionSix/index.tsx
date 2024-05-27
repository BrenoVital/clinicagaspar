import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SectionSix() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Nome:", name);
    console.log("Telefone:", phone);
    console.log("Email:", email);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "secondary.main", color: "white" }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
          Está com alguma dúvida? Quer mais informações?
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
          Estamos prontos para ajudar você. Seja qual for sua necessidade,
          preencha o formulário e entre em contato. Responderemos o mais breve
          possível.
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Nome"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            label="Telefone"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
            fullWidth
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Enviar email
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

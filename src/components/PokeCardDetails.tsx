import React from "react";
import {Card, CardContent, CardMedia, Typography, Box, Chip, Grid, Stack, Button} from "@mui/material";

interface PokemonCardProps {
  nom: string;
  nomJap: string;
  image: string;
  types: string[];
  stats: string[];
  resistances: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ nom, nomJap, stats, image, types, resistances }) => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
      <CardMedia component="img" image={image} alt={nom} sx={{ height: 200, objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {nom} ({nomJap})
        </Typography>
        <Box mb={2}>
          <Typography variant="subtitle1" fontWeight="bold" color="primary">
            Stats :
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {stats.map((type, index) => (
              <Grid item key={index}>
                <Chip label={type} variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle1" fontWeight="bold" color="primary">
            Types :
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {types.map((type, index) => (
              <Grid item key={index}>
                <Chip label={type} color="secondary" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" color="primary">
            Résistances :
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {resistances.map((resistance, index) => (
              <Grid item key={index}>
                <Chip label={resistance} color="success" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
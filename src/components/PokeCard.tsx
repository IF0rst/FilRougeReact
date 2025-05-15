import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as React from "react";

type PokeCardProps = {
    name : string,
    image : string
}

const PokeCard : React.FC<PokeCardProps> = ({ name, image }) => {
    return (
        <Card sx={{ width: 280, borderRadius: '16px', boxShadow: 3, overflow: 'hidden' }}>
            <CardMedia
                component="img"
                height="180"
                image={image}
                alt={name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ backgroundColor: '#f8f8f8', textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PokeCard;
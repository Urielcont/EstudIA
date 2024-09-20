import { Card, CardContent, Typography } from "@mui/material";

const RegistredChildren = () => {
    return (
        <Card sx={{
            borderRadius: 5,
            minWidth: "100%"
        }}>
            <CardContent>
                <Typography >
                   Bienvenido Usuario
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RegistredChildren;

import { useState } from "react";
import { Card, CardContent, IconButton, Typography, Modal, Box } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { ResponsiveBar } from '@nivo/bar';

const StatisticsCard = () => {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const data = [
        {
            materia: 'Matemáticas',
            aciertos: 10,
        },
        {
            materia: 'Ciencias',
            aciertos: 8,
        },
        {
            materia: 'Historia',
            aciertos: 12,
        },
    ];

    return (
        <>
            <Card sx={{
                borderRadius: 5,
                width: "600px", // Ajusta el ancho según sea necesario
                height: "100%", // Ajusta la altura según sea necesario
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        color: '#7FAFC9',
                    }}
                    onClick={handleOpenModal}
                >
                    <Add />
                </IconButton>
                <CardContent>
                    <Typography variant="h5">
                        Aciertos en Materias
                    </Typography>
                
                    <Box sx={{ height: "180px", width: '100%' }}>
                        <ResponsiveBar
                            data={data}
                            keys={['aciertos']}
                            indexBy="materia"
                            margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
                            padding={0.3}
                            colors={{ scheme: 'nivo' }}
                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Materias',
                                legendPosition: 'middle',
                                legendOffset: 32,
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Aciertos',
                                legendPosition: 'middle',
                                legendOffset: -40,
                            }}
                            enableLabel={false}
                        />
                    </Box>
                </CardContent>
            </Card>

            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Registro de Estudio
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Aquí puedes agregar información adicional sobre el tiempo de estudio.
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default StatisticsCard;

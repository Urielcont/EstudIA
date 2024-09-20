import { useState } from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const SubjectsTable = () => {
    const [subjectsData] = useState([
        { materia: "Matemáticas", aciertos: 8, errores: 3, tiempo: "15 minutos", consejo: "18 minutos" },
        { materia: "Ciencias", aciertos: 10, errores: 3, tiempo: "20 minutos", consejo: "18 minutos" },
        { materia: "Lenguaje", aciertos: 7, errores: 3, tiempo: "18 minutos", consejo: "18 minutos" },
    ]);

    return (
        <Card sx={{ height: "100%", width: "100%", borderRadius: 5 }}>
            <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                    Tabla de Materias
                </Typography>
                <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                    <Table sx={{ width: "100%" }} aria-label="tabla de resultados">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><b>Materia</b></TableCell>
                                <TableCell align="center"><b>Aciertos</b></TableCell>
                                <TableCell align="center"><b>Errores</b></TableCell>
                                <TableCell align="center"><b>Tiempo</b></TableCell>
                                <TableCell align="center"><b>Consejo</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subjectsData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{row.materia}</TableCell>
                                    <TableCell align="center">{row.aciertos}</TableCell>
                                    <TableCell align="center">{row.errores}</TableCell>
                                    <TableCell align="center">{row.tiempo}</TableCell>
                                    <TableCell align="center">{row.consejo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default SubjectsTable;

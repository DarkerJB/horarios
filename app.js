const express = require('express')
const app = express()

const PORT = 2325

// Middleware para interpretar datos en formato JSON
app.use(express.json())

// Rutas
app.get("/aprendiz", (req, res) => {
    res.send(`
        <h2>Jair González Buelvas</h2>
        <h3>Programa: Tecnología en Análisis y Desarrollo de Software.</h3>
        Ficha No. 2995403
    `)
})

app.get("/instructor", (req, res) => {
    res.send(`
        <h2>Guillermo de la Peña Ruiz.</h2>
        <h3>Líder Ficha 2995403.</h3>
    `)
})

app.get("/lunes", (req, res) => {
    res.send(`
        <h2>Competencia: Algoritmos 2.</h2>
        <h3>Instructor: Edwin Bustamante Marín.</h3>
        Resultado de Aprendizaje: Desarrollar procesos lógicos a través de la implementación de algoritmos.
    `)
})

app.get("/martes", (req, res) => {
    res.send(`
        <h2>Competencia: Fomentar cultura emprendedora según habilidades y competencias personales.</h2>
        <h3>Instructor: Wilson Hurtado Ramírez.</h3>
        Resultado de Aprendizaje: Establecer características y competencias emprendedoras personales de acuerdo con sus
potencialidades, objetivos y el entorno.
    `)
})

app.get("/miercoles", (req, res) => {
    res.send(`
        <h2>Competencia: Bases de Datos y Programación Orientada a Objetos.</h2>
        <h3>Instructor: Guillermo de la Peña Ruiz.</h3>
        Resultado de Aprendizaje: Modelar las funciones del software de acuerdo con el informe de requisitos.
    `)
})

app.get("/jueves", (req, res) => {
    res.send(`
        <h2>Competencia: Validación de documentos.</h2>
        <h3>Instructor: Walver Rodríguez.</h3>
        Resultado de Aprendizaje: Determinar las características técnicas de la interfaz gráfica del software adoptando estándares.
    `)
})

app.get("/viernes", (req, res) => {
    res.send(`
        <h2>Competencia: English.</h2>
        <h3>Instructor: Jonny Alejando Barco.</h3>
        Resultado de Aprendizaje: Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y
laborales según los criterios establecidos por el Marco Común Europeo de Referencia para las Lenguas.
    `)
})

app.get("*", (req, res) => {
    res.status(404).send(`
        <h1>Error 404 - Página no encontrada</h1>
        <h2>La ruta que intentas acceder no existe.</h2>
        Verifica la URL e intenta nuevamente.
    `)
})

// Crear el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
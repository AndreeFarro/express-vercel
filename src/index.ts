import express from 'express'


const app = express();
const port = 3000;



app.get("/", (req, res) =>  {
    res.send('Express + TypeScript Server');
})

app.get("/test", (req, res) =>  {
    res.send('Testeo - Cambio de pagina');
})


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
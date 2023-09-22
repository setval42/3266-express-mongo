import "dotenv/config";
import app from "./src/app.js"


const PORT = 3000;

const rotas = {
    "/": "Curso de NodeJS"
}

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// })

app.listen(PORT, () => {
    console.log("Servidor escutando!");
})
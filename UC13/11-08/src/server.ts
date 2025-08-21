import express, {Application} from "express";
import router from "./routes/UserRoutes";
import routerProduct from "./routes/ProductRoutes";

const app: Application=express(); //Criado o objeto express

const PORT:number = 3000; // Definido porta utilizada pelo servidor Backend

app.use(express.json()); // Definido que a API vai usar Json

app.use(router); //Definido que a API vai utilizar as rotas do UserRoutes
app.use(routerProduct); 

//Definido que o servidor vai 'escutar' (Listen) na porta especificada
app.listen(PORT, ():void =>{
    console.log(`Rodando na porta ${PORT}`)
})
import express from "express";
import livrosRoutes from "./livroRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJs"));

    app.use(express.json(), livrosRoutes);
};


export default routes;
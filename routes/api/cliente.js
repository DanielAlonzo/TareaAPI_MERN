const express = require("express");
const routes =  express.Router();
const replica_mongodb = require("../../db/replica_mongo.json");


//Rutas de la API
//funcion GET
routes.get("/cliente",(req, res)=>{

    res.json(replica_mongodb.cliente);
});

//funcion POST
routes.post("/cliente", (req, res)=>{
    const nuevoCliente={
        nombre: req.body.nombre,
        id: req.body.id,
        direccion: req.body.direccion,
        email: req.body.email,
        telefono: req.body.telefono,
    };
    replica_mongodb.cliente.push(nuevoCliente);
    res.json(replica_mongodb.cliente);
});

//funcion PUT
routes.put("/cliente", (req, res)=>{
    replica_mongodb.cliente.some((elemento) =>{
        if(elemento.id==req.body.nuevo_id){
            (elemento.nombre=req.body.nuevo_cliente),
            (elemento.id=req.body.nuevo_id),
            (elemento.direccion=req.body.nueva_direccion),
            (elemento.email=req.body.nuevo_email),
            (elemento.telefono=req.body.nuevo_telefono);
        }
        
    });
    res.json(replica_mongodb.cliente);
});


//funcion DELETE
routes.delete("/cliente",(req, res)=>{

    const index_delete = replica_mongodb.cliente.indexOf(
        (element) => element.id === req.body.nuevo_id
    );
    replica_mongodb.cliente.splice(index_delete,1);
    res.json(replica_mongodb.cliente);
});

module.exports = routes;
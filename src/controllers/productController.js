const fs = require("fs");
const path = require("path");

const db= require("../../db/products.json");



const productController={
    productlist: (req,res)=>{
            const filePath = path.join(__dirname, '../../db/products.json');

            // Leer el archivo JSON
                fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                console.error("Error al leer el archivo JSON:", err);
                return res.status(500).send('Error al cargar los productos');
    }
    // Convertir JSON a objeto de JavaScript
    const productos = JSON.parse(data);

            res.render("product/productList", {productos}); 
        });
    },

    productDetail:(req,res)=>{
        // Lee el archivo JSON
        fs.readFile('../../db/products.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Error al leer el archivo JSON", err);
                res.status(500).send('Error en el servidor');
                return;
            }
    
            // Parsea los datos JSON
            const productos = JSON.parse(data);
    
            // Renderiza la vista EJS y pasa los productos
            res.render('productos', { productos: productos.productos });
        });
    }
    
    

}


module.exports=productController;
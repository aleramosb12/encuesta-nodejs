const express = require('express');
const router = express.Router();
const { Client} = require('pg');



router.get('/signin2',(req,res) => {
    res.render('index')

})

router.post('/registrar',(req,res) => {
    console.log(req.body);
    console.log( req.body.pregunta1a);

   
    let configProducto = {
        user: process.env.DB_PRODUCTO_USER || 'postgres',
        host: process.env.DB_PRODUCTO_HOST || 'localhost',
        database: process.env.DB_PRODUCTO_DATABASE || 'postgres',
        password: process.env.DB_PRODUCTO_PASSWORD || 'A3a775aa',
        port: process.env.DB_PRODUCTO_PORT || 5432,
      }
      
    let client = new Client(configProducto);
    client.connect();


    try {

         client.query('insert into tesis (nombre,edad,sexo,pregunta,respuesta1,respuesta2,respuesta3) values ' +
        '($1	,$2	    ,$3	    ,$4	    ,$5	    ,$6  	,$7     ),'+
        '($8	,$9	    ,$10	 ,$11	,$12	,$13	,$14    ),'+
        '($15	,$16	,$17	,$18	,$19	,$20	,$21    ),'+
        '($22	,$23	,$24	,$25	,$26	,$27	,$28    ),'+
        '($29	,$30	,$31	,$32	,$33	,$34	,$35    ),'+
        '($36	,$37	,$38	,$39	,$40	,$41	,$42    ),'+
        '($43	,$44	,$45	,$46	,$47	,$48	,$49    ),'+
        '($50	,$51	,$52	,$53	,$54	,$55	,$56    ),'+
        '($57	,$58	,$59	,$60	,$61	,$62	,$63    ),'+
        '($64	,$65	,$66	,$67	,$68	,$69	,$70    ),'+
        '($71	,$72	,$73	,$74	,$75	,$76	,$77    ),'+
        '($78	,$79	,$80	,$81	,$82	,$83	,$84    ),'+
        '($85	,$86	,$87	,$88	,$89	,$90	,$91    ),'+
        '($92	,$93	,$94	,$95	,$96	,$97	,$98    ),'+
        '($99	,$100	,$101	,$102	,$103	,$104	,$105    ),'+
        '($106	,$107	,$108	,$109	,$110	,$111	,$112    ),'+
        '($113	,$114	,$115	,$116	,$117	,$118	,$119    )'
        ,
    [
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS NATURALES.Jugos y agua de frutas con azúcar',req.body.pregunta1a,req.body.pregunta1b,req.body.pregunta1c,
    req.body.nombres,req.body.edad,req.body.sexo,'INFUSIONES.Infusiones con azúcar',req.body.pregunta2a,req.body.pregunta2b,req.body.pregunta2c,
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS Y NECTAR ENVASADOS.cifrut',req.body.pregunta3a,req.body.pregunta3b,req.body.pregunta3c,
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS Y NECTAR ENVASADOS.tampico',req.body.pregunta4a,req.body.pregunta4b,req.body.pregunta4c,
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS Y NECTAR ENVASADOS.frugos',req.body.pregunta5a,req.body.pregunta5b,req.body.pregunta5c,
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS Y NECTAR ENVASADOS.watts',req.body.pregunta6a,req.body.pregunta6b,req.body.pregunta6c,
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS Y NECTAR ENVASADOS.Chicha morada',req.body.pregunta7a,req.body.pregunta7b,req.body.pregunta7c,
    req.body.nombres,req.body.edad,req.body.sexo,'JUGOS Y NECTAR ENVASADOS.Aquarius',req.body.pregunta8a,req.body.pregunta8b,req.body.pregunta8c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Coca cola',req.body.pregunta9a,req.body.pregunta9b,req.body.pregunta9c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Inca Kola',req.body.pregunta10a,req.body.pregunta10b,req.body.pregunta10c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Spritte',req.body.pregunta11a,req.body.pregunta11b,req.body.pregunta11c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Pepsi',req.body.pregunta12a,req.body.pregunta12b,req.body.pregunta12c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Guaranná',req.body.pregunta13a,req.body.pregunta13b,req.body.pregunta13c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Big Cola	',req.body.pregunta14a,req.body.pregunta14b,req.body.pregunta14c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Sporade',req.body.pregunta15a,req.body.pregunta15b,req.body.pregunta15c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Gatorade',req.body.pregunta16a,req.body.pregunta16b,req.body.pregunta16c,
    req.body.nombres,req.body.edad,req.body.sexo,'GASEOSAS.Paworade',req.body.pregunta17a,req.body.pregunta17b,req.body.pregunta17c

    ]
        )
////////////////////////////////////

        client.query('insert into tesis2 (nombre,pregunta,respuesta) values ($1	,$2	    ,$3), ($4	,$5	    ,$6), ($7	,$8	    ,$9)' ,
        [req.body.nombres,'1',req.body.pregunta2aa,req.body.nombres,'2',req.body.pregunta2bb,req.body.nombres,'3',req.body.pregunta3cc])

//////////////////////////////////

client.query('insert into tesis3 (nombre,pregunta,respuesta1) values '+
' ($1	,$2	,$3	         ),'+
' ($4	,$5	,$6	            ),'+
' ($7	,$8	,$9         ),'+
' ($10	,$11	,$12           ),'+
' ($13	,$14	,$15           )'


,
[
    req.body.nombres,'Desayuno.prepracion1',req.body.pregunta1a1,
    req.body.nombres,'MEDIA MAÑANA.prepracion1',req.body.pregunta2a1,
   req.body.nombres,'ALMUERZO.prepracion1',req.body.pregunta3a1,
    req.body.nombres,'MEDIA TARDE.prepracion1',req.body.pregunta4a1,
   req.body.nombres,'CENA.prepracion4',req.body.pregunta5a1

])


res.send('Encuenta se registro con exito')

    
        console.info("Fin de ejecucion del metodo ProductoDestination del objeto ProductoDAO" );
      
    
      } catch (error) {
        res.send('Encuenta se registro sin exito')

        console.info("Error de ejecucion a base de datos" + error);
    
      } 

      

})

module.exports = router;
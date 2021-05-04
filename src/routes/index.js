const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
    
    if(req.session.login_usuario !== undefined){
        res.redirect('dashboard') ;
    }else{
        res.render('login')
    }

})

router.post('/ouath', (req, res) => {

axios.post('http://localhost:3000/seguridad/oauth2', {

  usuario: req.body.login_usuario,
  contrasena: req.body.login_contrasena,
  id_empresa: req.body.login_usuario
  }).then(function (response) {

      if (response.data.statusCode === 2) {
          req.session.login_usuario = req.body.login_usuario
              res.redirect('dashboard')

      }else{
          res.redirect('login')

      }
  })
  .catch(function (error) {
      console.log(error);
  })
})


router.get('/dashboard', (req, res) => {

    if(req.session.login_usuario !== undefined){
        res.render('dashboard') ;
    }else{
        res.redirect('login')
    }

})


module.exports = router;
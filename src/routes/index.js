const express = require('express');
const router = express.Router();
const app = express();



router.get('/login',(req,res) => {
    res.render('login')
})

router.post('/dashboard',(req,res) => {
    console.log("app.locals.login_usuario",app.locals.login_usuario);
    let login_usuario = req.body.login_usuario;
    req.flash("login_usuario",login_usuario)

    req.body.login_usuario? res.render('dashboard',{login_usuario}):res.redirect('login')
})


module.exports = router;
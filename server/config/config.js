// ======================
//Puerto
//=======================


process.env.PORT = process.env.PORT || 3000

// ======================
//Entorno
//=======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// ======================
//Base de datos
//=======================

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://nescafe_user:abc123456@ds111648.mlab.com:11648/nescafe'
}

process.env.URLDB = urlDB
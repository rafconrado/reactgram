const multer = require("multer");
const path = require("path");

// Configuração do destino para armazenar imagens
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos";
    }

    cb(null, `uploads/${folder}/`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // Permite apenas formatos PNG e JPG
      return cb(new Error("Por favor, envie apenas imagens nos formatos PNG ou JPG."));
    }
    cb(null, true);
  },
});

module.exports = { imageUpload };

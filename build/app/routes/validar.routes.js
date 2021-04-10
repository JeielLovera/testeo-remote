"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidarController_1 = require("../controller/ValidarController");
const EnviarCorreoController_1 = require("../controller/EnviarCorreoController");
// import { AdministradorController } from '../controllers/administradorController'
const controller = new ValidarController_1.ValidarController;
const enviarcorreocontroller = new EnviarCorreoController_1.EnviarCorreoController;
const router = express_1.Router();
router.post('/', controller.validarDermatologo);
router.post('/correo/', enviarcorreocontroller.enviarcorreo);
exports.default = router;

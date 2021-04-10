"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviarCorreoController = void 0;
var nodemailer = require("nodemailer");
class EnviarCorreoController {
    constructor() {
        this.enviarcorreo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let objmensaje = req.body;
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: 'app.suncare@gmail.com',
                    pass: 'fpwprwsxcuqsusxy',
                },
            });
            yield transporter.sendMail({
                from: '"Equipo de Gestión de accesos de SunCare" <app.suncare@gmail.com>',
                to: objmensaje.correo,
                subject: objmensaje.asunto,
                html: objmensaje.mensaje,
            });
            return res.json({ "response": objmensaje.correo, "mensaje": objmensaje.mensaje, "enviado": true });
        });
    }
}
exports.EnviarCorreoController = EnviarCorreoController;

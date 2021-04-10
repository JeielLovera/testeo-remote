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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidarController = void 0;
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = require("jsdom");
class ValidarController {
    constructor() {
        this.validarDermatologo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let solicitud = false;
            let data = {};
            let consultarPor = req.body;
            let url = `https://200.48.13.39/cmp/php/detallexmedico.php?id=${consultarPor.cmp}`;
            let respuesta = yield axios_1.default.get(url);
            const dom = new jsdom_1.JSDOM(respuesta.data);
            // console.log('--->', dom.)
            let cmp = dom.window.document.getElementsByTagName('td')[0].getElementsByTagName('center')[0].innerHTML;
            let apellido = dom.window.document.getElementsByTagName('td')[1].innerHTML;
            let nombre = dom.window.document.getElementsByTagName('td')[2].innerHTML;
            data = {
                cmp: cmp,
                nombre: nombre,
                apellido: apellido,
            };
            console.log('Datos del api--->');
            console.log('cod--->', cmp);
            console.log('nom--->', nombre);
            console.log('ape--->', apellido);
            console.log('Datos por la cual preguntar--->');
            console.log('cod--->', consultarPor.cmp);
            console.log('nom--->', consultarPor.nombres);
            console.log('ape--->', consultarPor.apellidos);
            if (consultarPor.cmp != cmp)
                return res.json({ "respuesta": solicitud, "data": data });
            if (consultarPor.nombres != nombre)
                return res.json({ "respuesta": solicitud, "data": data });
            if (consultarPor.apellidos != apellido)
                return res.json({ "respuesta": solicitud, "data": data });
            solicitud = true;
            return res.json({ "respuesta": solicitud, "data": data });
        });
    }
}
exports.ValidarController = ValidarController;

import * as LeilaoService from "../services/LeilaoService";
import * as UsuarioService from "../services/UsuarioService";
import * as LanceService from "../services/LanceService";
import { Request, Response } from "express";

export async function createLance(req: Request, res: Response){
   const { email, leilaoId, valor } = req.body;

   const usuario = await UsuarioService.findUsuario(email);
   if(!usuario) return res.status(400).json({error: "Não foi encontrado um usuário com este e-mail"});

   const leilao = await LeilaoService.findLeilao(leilaoId);
   if(!leilao) return res.status(400).json({error: "Não foi encontrado leilão com este ID"});


   const lance = await LanceService.createLance(usuario, leilao, valor);

   return res.status(200).json({lance: lance});
}

export async function listLance(_req: Request, res: Response){
    const lances = await LanceService.listLance();
    return res.status(200).json({lances: lances});
}
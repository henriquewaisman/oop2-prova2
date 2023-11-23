import * as LeilaoService from "../services/LeilaoService";
import * as UsuarioService from "../services/UsuarioService";
import { Request, Response } from "express";

export async function createLeilao(req: Request, res: Response){
   const { email, produto, preco, datalimite } = req.body;
   const usuario = await UsuarioService.findUsuario(email);

   if(!usuario) return res.status(400).json({error: "Não foi encontrado um usuário com este e-mail"});

   try {
       const date = new Date(datalimite);

       const leilao = await LeilaoService.createLeilao(usuario, produto, preco, date);

       return res.status(200).json({leilao: leilao});
   } catch (_e){
       return res.status(400).json({error: "Data inválida"});
   }
}

export async function listLeilao(_req: Request, res: Response){
    const leiloes = await LeilaoService.listLeilao();
    return res.status(200).json({leiloes: leiloes});
}
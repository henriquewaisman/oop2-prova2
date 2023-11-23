import express from "express";
import * as LeilaoController from "../controllers/LeilaoController";

const router = express.Router();
router.post("/leiloes", LeilaoController.createLeilao);
router.get("/leiloes", LeilaoController.listLeilao);

export default router;
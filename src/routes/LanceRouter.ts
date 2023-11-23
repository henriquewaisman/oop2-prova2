import express from "express";
import * as LanceController from "../controllers/LanceController";

const router = express.Router();
router.post("/lances", LanceController.createLance);
router.get("/lances", LanceController.listLance);

export default router;
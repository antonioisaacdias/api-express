import { Router } from "express";
import { criar, buscarPorId, listar, atualizar, deletar } from "../controllers/clienteController.js";

const router = Router();

router.post("/", criar);
router.get("/", listar);
router.get("/:id", buscarPorId);
router.put("/:id", atualizar);
router.delete("/:id", deletar);

export default router;

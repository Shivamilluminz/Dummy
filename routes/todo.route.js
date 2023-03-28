import express from "express";
import { addTodo, getAllTodo, todoCompleted } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add", addTodo);
router.get("/gettodo", getAllTodo);
router.post('/completed', todoCompleted);


export default router;

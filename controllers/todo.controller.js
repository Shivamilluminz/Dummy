import Todo from "../models/todo.model.js";
import mongoose from "mongoose";

export const addTodo = async (req, res) => {
  console.log(req.body, "req");
  try {
    const newTodo = new Todo({
      name: req.body.name,
    });

    await newTodo.save();
    res.status(201).send("Todo has been created.");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const getAllTodo = async (req, res) => {
    try {
      const todos = await Todo.find();
     
      res.status(200).send(todos);
    } catch (error) {
      res.status(500).send("Something went wrong");
    }

}

export const todoCompleted = async (req, res) => {
    let { status , id} = req.query;
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: req.query.id },
            { completed: status },
            {new :true}
        )

        await todo.save();

        return res.status(200).json(todo);
    } catch (error) {
        console.log(error, "error");
        return res.status(500).send("Something went wrong");
    }
}
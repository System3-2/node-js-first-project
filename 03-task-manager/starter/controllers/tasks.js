const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const task = await Task.find({}, (error, data) => {
    if (error) {
      res.status(500).json({ msg: error.message });
    } else {
      res.status(200).json({ tasks: data });
    }
  });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID }, (error, data) => {
      if (!data) {
        return res.status(404).json({ msg: "Task not found" });
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);

    if (!task) {
      res.status(404).json({ msg: "Task not found" });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const tasks = Task.deleteOne({ _id: taskID }, (error, data) => {
      if (!data) {
        return res.status(404).json({ msg: "Task not found" });
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "../services/EmployeeService.js";

export const create = async (req, res) => {
  const employee = req.body;
  try {
    await createEmployee(employee);
    res.send(`Employee ${employee._id} created`);
  } catch (err) {
    res.status(500).json({ error: error });
  }
};

export const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await getEmployeeById(id);
    res.send(employee);
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const employees = await getEmployees();
    if (res) res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = (req, res) => {
  updateEmployee();
};

export const deleteById = (req, res) => {
  const id = req.query.id;
  try {
    deleteEmployee(id);
    res.send(`Employee ${id} was deleted`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

import {
  createUser,
  getUsers,
  login,
  verifyToken,
} from "../services/UserService.js";

export const create = async (req, res) => {
  const employee = req.body;
  try {
    await createUser(employee);
    res.send(`User created ${employee.user._id} created`);
  } catch (err) {
    res.status(500).json({ error: error });
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await getUsers();
    if (res) res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  const user = req.body;
  const u = await login(user);
  res.json(u);
};

export const verify = async (req, res) => {
  const { token } = req;
  const user = await verifyToken(token);
  res.json(user);
};

import Cliente from "../models/Cliente.js";

export const criar = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body ?? {};

    if (!nome || !email) {
      return res.status(400).json({ error: "nome e email são obrigatórios" });
    }

    const novoCliente = await Cliente.create({ nome, email, telefone });
    return res.status(201).json(novoCliente);
  } catch (err) {
    if (['SequelizeValidationError', 'SequelizeUniqueConstraintError'].includes(err.name)) {
      return res.status(400).json({
        error: "Erro de validação",
        details: err.errors.map(e => e.message),
      });
    }
    console.error(err);
    return res.status(500).json({ error: "Erro ao criar cliente" });
  }
};

export const listar = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    return res.status(200).json(clientes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar clientes" });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    return res.status(200).json(cliente);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar cliente" });
  }
};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    await cliente.update({ nome, email, telefone });
    return res.status(200).json(cliente);
  } catch (err) {
    if (['SequelizeValidationError', 'SequelizeUniqueConstraintError'].includes(err.name)) {
        return res.status(400).json({ error: "Erro de validação", details: err.errors.map(e => e.message) });
    }
    console.error(err);
    return res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
};

export const deletar = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    await cliente.destroy();
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao deletar cliente" });
  }
};
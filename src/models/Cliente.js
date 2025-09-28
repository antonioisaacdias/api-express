import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Cliente = sequelize.define("Cliente", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(120),
    allowNull: false,
    validate: { notEmpty: { msg: "O nome é obrigatório" } },
  },
  email: {
    type: DataTypes.STRING(160),
    allowNull: false,
    validate: { isEmail: { msg: "O email deve ser válido" } },
    unique: { msg: "Email já cadastrado" },
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true,
      validate: {
        len: { args: [8, 30], msg: "Telefone deve ter entre 8 e 30 caracteres" },
      },
  },
}, {
  tableName: "clientes",
  timestamps: true,
  underscored: true,
});

export default Cliente;
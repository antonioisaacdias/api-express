import app from './src/app.js';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';

dotenv.config();

const PORT = process.env.PORT;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("📦 Conexão com o banco estabelecida com sucesso!");

    await sequelize.sync();
    console.log("📑 Modelos sincronizados");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Erro ao conectar no banco:", err.message);
  }
};

start();
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vida: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fuerza: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    velocidad: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

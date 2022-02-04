'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_morning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_morning.init({
    latin: DataTypes.TEXT,
    arti: DataTypes.TEXT,
    arab: DataTypes.TEXT,
    jumlah: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tb_morning',
  });
  return tb_morning;
};
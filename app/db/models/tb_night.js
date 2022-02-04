'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_night extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_night.init({
    latin: DataTypes.TEXT,
    arti: DataTypes.TEXT,
    arab: DataTypes.TEXT,
    jumlah: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tb_night',
  });
  return tb_night;
};
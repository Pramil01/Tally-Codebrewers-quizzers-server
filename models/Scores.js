module.exports = (sequelize, DataTypes) => {
  const Scores = sequelize.define("Scores", {
    qId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  });

  return Scores;
};

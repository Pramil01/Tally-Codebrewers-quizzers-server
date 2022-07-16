module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("Questions", {
    qId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questions: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Questions;
};

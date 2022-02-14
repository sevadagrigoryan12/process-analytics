'use strict';

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('EventHistory', {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      orgId: {
        type: Sequelize.STRING(75),
      },
      userId: {
        type: Sequelize.STRING(75),
      },
      videoId: {
        type: Sequelize.STRING(75),
      },
      eventType: {
        type: Sequelize.STRING(),
      },
      time: {
        type: Sequelize.STRING(75),
      },
      watchedDuration: {
        type: Sequelize.STRING,
      },
      totalDuration: {
        type: Sequelize.STRING,
      },
      searchedApp: {
        type: Sequelize.STRING,
      },
      videoSize: {
        type: Sequelize.STRING,
      },
      videoFormat: {
        type: Sequelize.STRING(75),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.dropTable('EventHistory');
  },
};

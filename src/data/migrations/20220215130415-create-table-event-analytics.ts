'use strict';

module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    return queryInterface.createTable('EventAnalytics', {
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
      viewsCount: {
        type: Sequelize.BIGINT,
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

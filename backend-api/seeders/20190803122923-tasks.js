'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Tasks', [
      {
        title: 'Congratulations',
        description: 'You',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Just',
        description: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The',
        description: 'Login',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Exercise',
        description: '!!!!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

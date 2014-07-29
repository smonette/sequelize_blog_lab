module.exports = {
  // what to do to create the migration
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished

    // make sure that the table is pluralized
    migration.createTable('authors',
        {id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        // created and updated are REQUIRED
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING

      }).complete(done)
  },
  // what to do to reverse the migration or change
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('authors')
    .complete(done)
  }
}

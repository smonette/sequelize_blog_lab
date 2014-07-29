module.exports = {
  // what to do to create the migration
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished

    // make sure that the table is pluralized
    migration.createTable('posts',
        {id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        authorId: {
          type: DataTypes.INTEGER,
          foreignKey: true
        },
        // created and updated are REQUIRED
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        writtenOn: DataTypes.DATE,
        // STRING defaults to varchar(255)
        title: DataTypes.STRING,
        // For large posts we need more space
        body: DataTypes.TEXT

      }).complete(done)
  },
  // what to do to reverse the migration or change
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.dropTable('posts')
    .complete(done)
  }
}

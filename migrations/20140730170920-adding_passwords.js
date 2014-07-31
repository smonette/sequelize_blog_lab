module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.addColumn(
        'authors',
        'password',
        {
          type: DataTypes.STRING,
          allowNull: false
        }
      )
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
      migration.removeColumn('authors', 'password')

    done()
  }
}

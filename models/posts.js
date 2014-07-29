function Post(sequelize, DataTypes){
  return sequelize.define('post', {
    name: DataTypes.STRING
  });
};




// Post
//     .findOrCreate({postTitle: 'kangaroo', postContent: 'australia', author: ''})
//     .success(function(){
//     });


module.exports = Post;
const {get} = require('axios');

module.exports = async function Api(userID){
  const userData = await get(`https://jsonplaceholder.typicode.com/users/${userID}`).then(obj => obj.data) //User informations
  const userPosts = await get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`).then(obj => obj.data) //User Posts
  userData.posts = userPosts //User informations + Posts
  return userData
}
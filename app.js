// var knex = require('knex')({
//   client: 'pg',
//   connection: 'postgres://development:development@127.0.0.1:5432/test_db'
// })

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'test_db'
  }
});

knex
.from('famous_people')
.select('*').where('first_name', 'like', '%Paul%').then(function(people){
  //do something here
  for(var index in people){
    console.log(people[index].id + ' ' + people[index].first_name)
  }
});
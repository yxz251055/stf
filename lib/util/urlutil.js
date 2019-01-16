var url = require('url')
var r = require('rethinkdb')

/* eslint guard-for-in:0 */
module.exports.addParams = function(originalUrl, params) {
  var parsed = url.parse(originalUrl, true)
  parsed.search = null
  // TODO: change to ES6 loop
  for (var key in params) {
    parsed.query[key] = params[key]
  }
  return url.format(parsed)
}

module.exports.removeParam = function(originalUrl, param) {
  var parsed = url.parse(originalUrl, true)
  parsed.search = null
  delete parsed.query[param]
  return url.format(parsed)
}

module.exports.islogin = function(name,password,callback){
  console.log(name,password);
  var canLogin = false;
  var index = 0;
  r.connect({host:'localhost',port:28015},function(err,conn){
    r.db('stf').table('users').run(conn,function(err,cursor){
      cursor.each(function(err,users){
        if(name == users.name && password == users.password){
          index ++;
          canLogin = true;
          callback(canLogin);
        }else{
          if(cursor._responseIndex == 0 && index == 0){
            callback(canLogin);
          }
        }
      })
    })
  })
}
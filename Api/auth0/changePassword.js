function changePassword(email, newPassword, callback) {
    const bcrypt = require('bcrypt');
    const MongoClient = require('mongodb@3.1.4').MongoClient;
    const client = new MongoClient('mongodb+srv://pfcoinplus:'+configuration.pass+'@cluster0.resjtyz.mongodb.net/?retryWrites=true&w=majority');
  
    client.connect(function (err) {
      if (err) return callback(err);
  
      const db = client.db('dbcoin');
      const users = db.collection('users');
  
      bcrypt.hash(newPassword, 10, function (err, hash) {
        if (err) {
          client.close();
          return callback(err);
        }
  
        users.update({ email: email }, { $set: { password: hash } }, function (err, result) {
          client.close();
          if (err) return callback(err);
          callback(null, result.result.n > 0);
        });
      });
    });
  }
  
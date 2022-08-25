function verify (email, callback) {
    const MongoClient = require('mongodb@3.1.4').MongoClient;
    const client = new MongoClient('mongodb+srv://pfcoinplus:'+configuration.pass+'@cluster0.resjtyz.mongodb.net/?retryWrites=true&w=majority');
  
    client.connect(function (err) {
      if (err) return callback(err);
  
      const db = client.db('dbcoin');
      const users = db.collection('users');
      const query = { email: email, email_verified: false };
  
      users.update(query, { $set: { email_verified: true } }, function (err, result) {
        client.close();
  
        if (err) return callback(err);
        callback(null, result.result.n > 0);
      });
    });
  }
  
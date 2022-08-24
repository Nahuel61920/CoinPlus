function remove(id, callback) {
    const MongoClient = require('mongodb@3.1.4').MongoClient;
    const client = new MongoClient('mongodb+srv://pfcoinplus:'+configuration.pass+'@cluster0.resjtyz.mongodb.net/?retryWrites=true&w=majority');
  
    client.connect(function (err) {
      if (err) return callback(err);
  
      const db = client.db('dbcoin');
      const users = db.collection('users');
  
      users.remove({ email: id }, function (err) {
        client.close();
  
        if (err) return callback(err);
        callback(null);
      });
    });
  
  }
  
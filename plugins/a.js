class PluginTest1 {
  constructor() {
  }
  async print(MongoClient, url, dbName, fs, __dirname, hoge) {

    async function returnHTML() {
      let result = '0';
      await MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {     
        const db = client.db(dbName);
        const collection = db.collection('article');
        result += '1';
        collection.find({}).toArray( (err, docs) => {
          result += '2';
          for (const doc of docs) {
            // app.get('/' + doc.link.substring(0, doc.link.length - 5), (req, res) => {
            //   res.sendFile(__dirname + '/html/' + doc.link);
            // });
            result += '3';
  
            return doc.link;
  
            // fs.readFile(__dirname + '/html/' + doc.link, (err, data) => {
            //   //result += data;
            //   return data;
            // });
        
  
  
          }
          result += '4';
          return result;
  
        });
        result += '5';
        return result;
  
      });
    
  
  
  
  
      return 'plugin-a:' + result;
      }
    return await returnHTML();
  }
};

exports = PluginTest1;
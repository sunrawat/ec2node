const { MongoClient } = require("mongodb");
const connectionString = "mongodb+srv://suraj:12345@dockerdb.hoh98.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let dbConnection;
module.exports = {
    connectToServer: (callback)=>{
        client.connect((err, db)=>{
            if(err || !db) {
                return callback(err);
            } 
            dbConnection = db.db("sample");
            console.log("connected to db...Happy CRUD!!");
            return callback();
        });
    },
    getDb: ()=>{    
        return dbConnection;
    }
}

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";
const dbname = "nodeJs";

const client = new MongoClient(uri);

async function main() {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Berhasil')
  
  // Choose DB
  const db = client.db(dbname)

  // Menambahkan
  const insertResult = await db.collection('Siswa').insertOne({
    nama: "Meidina Paramitha",
    email: "Meidinaparamitha@gmail.com"
  })

  const findResult = await db.collection('Siswa').find({}).toArray();
  console.log(findResult, insertResult)
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

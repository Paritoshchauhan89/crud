import mongoose from "mongoose"

const Connnection = async (username,password)=>{
const URL=`mongodb+srv://${username}:${password}@stmteam.sxbjhcj.mongodb.net/STMCONFERENCE?retryWrites=true&w=majority`;

    try{
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Database connection sucessfully');
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connnection


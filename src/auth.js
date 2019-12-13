const dataStreamer = (request, cb) =>{
let allTheData = "";
request.on("data", chunk => {
    allTheData+=chunk;
});
request.on("end", () => {
    cb(allTheData)
});
}

/*const bcrypt = require("bcrypt");


const hashedPassword = (password, callback) => {
    bcrypt.genSalt(12,(err,salt)=>{
        if(err){
         callback(err)
        } else{
            bcrypt.hash(password,salt,(err , hash)=>{
                if(err){
                    callback(err)
                } else{
                    callback(null,hash)
                }
            })
        };
    })
};

const comparePasswords = (password, hashedPassword, callback) => {
bcrypt.compare(password, hashedPassword, (err, result)=>{ 
if(err){
    callback(err)
} else {
    callback(null,result)
}
});
};


module.exports = {
    hashedPassword,
    comparePasswords
};*/

module.exports = {
    dataStreamer
}

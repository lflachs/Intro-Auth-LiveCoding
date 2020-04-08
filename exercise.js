const jwt = require('jsonwebtoken');

function returnWilderToken(wilderObject){
    const accessToken = jwt.sign(wilderObject, "myPassword")
    console.log(accessToken)
}

returnWilderToken({name:"Mia", lastName:"Yin", campus:"Berlin" })

function decodeWilderToken(token){
    jwt.verify(token, "myPassword", (err, wilder)=>{
        if(err) {
            throw new Error(err); 
        }
        console.log(wilder)
    })
}

decodeWilderToken(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWlhIiwibGFzdE5hbWUiOiJZaW4iLCJjYW1wdXMiOiJCZXJsaW4iLCJpYXQiOjE1ODYzNTgyMTN9.3yhEWRxWVHUORNG71f9hVsfvyaFfxY35_DMC_thVe9g`);
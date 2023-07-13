const bcrypt = require('bcrypt');

module.exports = {
  signup: (req, res) => {
    const {email, password} = req.body
    // start hashing
    const saltRounds = 10;

    // what am i hashing  plus rounds
    bcrypt.hash(password, saltRounds, (err, passwordHash) => {
      let newDatabaseEntry = {};
      newDatabaseEntry.email = email;
      newDatabaseEntry.passwordHash = passwordHash
      newDatabaseEntry.destiny = destinies[Math.floor(Math.random() * destinies.length)]
      console.log('\nNew Database Entry: ');
      console.log(newDatabaseEntry);
      database.push(newDatabaseEntry);
      res.status(200).send({sucess: true})
    })
    // let newDatabaseEntry = {}
    // newDatabaseEntry.email = email
    // newDatabaseEntry.password = password
    // newDatabaseEntry.destiny = destinies[Math.floor(Math.random() * destinies.length)]
    // console.log('\nNew database entry: ')
    // console.log(newDatabaseEntry)
    // database.push(newDatabaseEntry)
    // res.status(200).send({success: true})
  },
  login: (req, res) => {
    const {email, password} = req.body
    let userData

    for (let i=0; i<database.length; i++) {
      if (email === database[i].email) {
        userData = database[i]
      }
    }

    if (!userData) {
      res.status(200).send({success: false, message: 'invalid username'})
    } else {
      // const destinyIntro = "Your final destiny is to "
      // res.status(200).send({success: true, destiny: userData.destiny, intro: destinyIntro})
      bcrypt.compare(password, userData.passwordHash, (err, result) => {
        if(!err) {
          if(result) {
            const destinyIntro = 'your final destiny is to';
            res.status(200).send({success: true, destiny: userData.destiny, intro: destinyIntro})
          }else {
            res.status(200).send({success: false, message: 'invalid password or username'})
        }
        }else {
          console.log('error during bycrypt.compare(): ' + err) 
          res.status(400).send({success:false})
        }
      })
    }
  }
}


const database = [
  {
    email:'john@gmail.com',
    password:'1234asdf',
    destiny:'becoming the new Santa'
  },
  {
    email:'sallybonnet@yahoo.com',
    passwordHash:'funpassword',
    destiny:'becoming best friends with Martha Stewart'
  },
]


const destinies = [
  'become a well-respected bartender',
  'cure cancer',
  'become a bear whisperer',
  'become a hoarder',
  'become the lead in a high-budget film, filling in for Henry Cavill when he unexpectedly goes MIA',
  'summit Everest',
  'become the next Bruce Willis',
]
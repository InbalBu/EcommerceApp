import bcrypt from 'bcryptjs';
import axios from 'axios';
import client from '../src/lib/client.js'


const createUserOnSanity = async (req, res) => {
    try {
        const userDoc = {
            _type: 'user',
            name: req.body.name,
            email: req.body.name
        
          }
         await client.createIfNotExists(userDoc);
          res.status(200).send({ message: 'success' })

    }
    catch (error) {
        res.status(500).send({ message: 'error', data: error.message })

    }

  }

  

  export default createUserOnSanity

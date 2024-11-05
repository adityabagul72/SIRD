const mouModel = require('../models/mou.model.js')

async function getAllMous(req,res){
    try {
        const mous = await mouModel.find();
        res.json(mous);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

module.exports={getAllMous}
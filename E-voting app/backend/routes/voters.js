const router = require('express').Router();
let Voter = require('../models/voternm.model');

router.route('/').get((req, res) => {
  Voter.find()
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const votername = req.body.votername;
  const fathername = req.body.fathername;
  const aadharcardno = req.body.aadharcardno;
  const voterid = req.body.voterid;
  const dob = Date.parse(req.body.dob);
  const newVoter = new Voter({votername,aadharcardno,fathername,dob,voterid});

  newVoter.save()
    .then(() => res.json('Voter added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

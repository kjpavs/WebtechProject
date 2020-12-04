const router = require('express').Router();
let Voterchoice = require('../models/voterchoice.model');

router.route('/').get((req, res) => {
  Voterchoice.find()
    .then(voterchoices => res.json(voterchoices))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const votername = req.body.votername;
  const voterid = req.body.voterid;
  const choice = req.body.choice;

  const newVoterchoice = new Voterchoice({
    votername,
    voterid,
    choice,
  });

  newVoterchoice.save()
  .then(() => res.json('Voterchoice added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Voterchoice.findById(req.params.id)
      .then(voterchoice => res.json(voterchoice))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Voterchoice.findByIdAndDelete(req.params.id)
      .then(() => res.json('Voterchoice deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    Voterchoice.findById(req.params.id)
      .then(voterchoice => {
        voterchoice.votername = req.body.votername;
        voterchoice.choice = req.body.choice;
        voterchoice.voterid = req.body.voterid;
  
        voterchoice.save()
          .then(() => res.json('Voterchoice updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

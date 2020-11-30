const router = require('express').Router();
let Voterchoice = require('../models/voterchoice.model');

router.route('/').get((req, res) => {
  Voterchoice.find()
    .then(voterchoices => res.json(voterchoices))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const votername = req.body.votername;
  const aadharcardno = req.body.aadharcardno;
  const choice = req.body.choice;
  const date = Date.parse(req.body.date);

  const newVoterchoice = new Voterchoice({
    votername,
    aadharcardno,
    choice,
    date,
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
        voterchoice.aadharcarno = req.body.aadharcardno;
        voterchoice.date = Date.parse(req.body.date);
  
        voterchoice.save()
          .then(() => res.json('Voterchoice updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
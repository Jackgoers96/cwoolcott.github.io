const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
    // search db for the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    // if there isn't a match
    if (!userData) {
      // unspecific error... 
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // NPM bcrypt to compare password to previous password
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // if False  then return unspecific error... 
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // if match then youre in. 
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

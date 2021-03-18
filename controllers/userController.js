const db = require("../model");
const passport = require("../passport");



module.exports = {
  getUser: (req, res, next) => {
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  findById: function (req, res) {
    db.User.findOne({ _id: req.params.id })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(422).json(err));
  },


  register: (req, res) => {
    const newUser = {};

    newUser.username = req.body.username;
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.password = req.body.password;
    newUser.email = req.body.email;

    db.User.findOne({ username: newUser.username }, (err, user) => {
      if (err) {
        console.log(err)
      } else if (user) {
        res.json({
          error: `use another username: ${newUser.username}`
        });
      }

      else {
        db.User.findOne({ email: newUser.email }, (err, user) => {
          if (err) {
            console.log(err)
          } else if (user) {
            res.json({
              error: `use another email: ${newUser.email}`
            })
          } else {
            db.User.create(newUser)
            
          
              .then((response) => res.json(response))
              
                          
              .catch(err => res.status(422).json(err));

              
          }
        });
      }
    });
  },



  logout: (req, res) => {
    if (req.user) {
      req.logout()
      res.json({ msg: 'logging out' })
    }else{
      res.json({msg : 'not logged in yet'})
    }
  },

  auth: function (req, res) {
    if (req.isAuthenticated()) {

      return res.json(req.user);
    } else {
      return res.json("no user logged in!")
    }
  },


  login: (req, res) => {
    var userInfo = {
      id: req.user._id,
      username: req.user.username
    };
    res.json(userInfo);
  },

  myEvents: (req, res) => {
    db.User.find({ _id: req.params.id })
        .populate("events")
        .then(event => res.json(event))
        .catch(err => res.json(err))

  }
};




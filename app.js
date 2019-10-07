const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
// const tweets = require("./routes/api/tweets");
const events = require("./routes/api/events");
const bodyParser = require('body-parser');
const User = require('./models/User');
// const Tweet = require('./models/Tweet');
const Event = require('./models/Event');

const comments = require("./routes/api/comments");
const Comment = require('./models/Comment');

const passport = require('passport');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {

      const newEvent = new Event({
        organizer: "5d4dff0e446df212481a9ec",
        title: "aaaa",
        description: "aaaaaaa",
        location: "aaaaaaa",
        image_url: "aaaaaaa",
        requirements: "raaaaaaas",
        event_date: "aaaaaaa",
        event_time: "aaaaaaa",
      });
      console.log("aaaaaaaaaaaaaaaaa");
      console.log(newEvent);
      newEvent.save().then(the_event => res.json(the_event));


});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
// app.use("/api/tweets", tweets);
app.use("/api/events", events);
app.use("/api/comments", comments);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

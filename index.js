const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./schema/UserModel");
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/getUsers", async (req, res) => {
  try {
    const list_user = await User.find({});
    res.status(200).send(await list_user);
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.get("/getOnlyUsers/:id", async (req, res) => {
  try {
    const list_user = await User.findById(req.params.id);
    res.status(200).send(await list_user);
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.post("/createUsers", async (req, res) => {
  try {
    const create_user = await User.create(req.body);
    return res.status(201).send({ create_user });
  } catch (err) {
    return res.status(400).send({ error: `Failed ${err}` });
  }
});

app.put("/alterUsers/:id", async (req, res) => {
  try {
    const list_user = await User.findById(req.params.id, function (err, user) {
      if (err) {
        console.error("error, no entry found");
      }
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.telefone = req.body.telefone;
      user.data_nascimento = req.body.data_nascimento;
      user.phone_number = req.body.phone_number;
      user.save();
    });

    res.status(200).send(await list_user);
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.delete("/deleteUsers/:id", async (req, res) => {
  try {
    const list_user = await User.findById(req.params.id);
    const deleted = list_user.delete();
    res.status(200).send(await deleted);
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.listen(port, () =>
  console.log(`Server running,link: http://localhost:${port}`)
);

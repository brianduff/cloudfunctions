import express from 'express';


function getUsers(_, res) {
  res.send(["alice", "bob"])
}

function getDefault(_, res) {
  res.send("Hello!")
}

const app = express();
app.use('/users/', getUsers)
app.use(getDefault)

// The main function export for cloud functions
export const hello = app

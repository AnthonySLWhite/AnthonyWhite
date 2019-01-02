// ----- Package Imports ----- //
import express from 'express';
import compression from 'compression';
import chalk from 'chalk';
// ----- File Imports ----- //
import tools from './tools/tools';
// ----- End Imports ----- //

const port = process.env.PORT || 3000;
// console.log(`Port: ${port} `);
const app = express();

// mongoose.connect("mongodb://srv-captain--mongo-db/mydatabase", { useMongoClient: true });
// <-------------- compression --------------> //
app.use(compression());

app.use(
  express.static(tools.comingSoonPath()),
  (req, res, next) => {
    next();
  },
);

// app.use(express.static(tools.publicPath()));

app.get('/express_backend', (req, res) => {
  res.send({
    express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT!!!!!',
  });
  console.log('Connection successful!');
});

app.listen(port, () => {
  console.log(
    chalk.white.bgRed(`Server started on port ${port} ...`),
  );
});

export default app;

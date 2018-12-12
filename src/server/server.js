// ----- Package Imports ----- //
import express from 'express';
import chalk from 'chalk';
import path from 'path';
// ----- File Imports ----- //

// ----- End Imports ----- //

const port = process.env.PORT || 2021;
console.log(`Port: ${port} `);
const app = express();

app.use(express.static(path.resolve(__dirname, './../', 'publicDist')));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  console.log('Connection successful!');
});

app.listen(port, () => {
  console.log(chalk.white.bgRed(`Server started on port ${port} ...`));
});

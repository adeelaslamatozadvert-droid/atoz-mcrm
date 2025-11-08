// process.on('uncaughtException', console.error);
// process.on('unhandledRejection', console.error);

// require('module-alias/register');
// const mongoose = require('mongoose');
// const { globSync } = require('glob');
// const path = require('path');

// // Make sure we are running node 7.6+
// const [major, minor] = process.versions.node.split('.').map(parseFloat);
// if (major < 20) {
//   console.log('Please upgrade your node.js version at least 20 or greater. 👌\n ');
//   process.exit();
// }

// // import environmental variables from our variables.env file
// require('dotenv').config({ path: '.env' });
// require('dotenv').config({ path: '.env.local' });

// mongoose.connect(process.env.DATABASE);

// // const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// mongoose.connection.on('error', (error) => {
//   console.log(
//     `1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url`
//   );
//   console.error(`2. 🚫 Error → : ${error.message}`);
// });

// const modelsFiles = globSync('./src/models/**/*.js');

// for (const filePath of modelsFiles) {
//   require(path.resolve(filePath));
// }

// // Start our app!
// const app = require('./app');
// app.set('port', process.env.PORT || 8888);
// const server = app.listen(app.get('port'), () => {
//   console.log(`Express running → On PORT : ${server.address().port}`);
// });



process.on('uncaughtException', console.error);
process.on('unhandledRejection', console.error);

require('module-alias/register');
const mongoose = require('mongoose');
const { globSync } = require('glob');
const path = require('path');
require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

const app = require('./app');

// ✅ Connect MongoDB
mongoose.connect(process.env.DATABASE)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const modelsFiles = globSync('./src/models/**/*.js');
for (const filePath of modelsFiles) {
  require(path.resolve(filePath));
}

// ✅ Listen on Render-compatible port
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Express running on port ${PORT}`);
});

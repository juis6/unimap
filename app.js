import Dotenv from 'dotenv'
import Express from 'express'
import Layouts from 'express-ejs-layouts'
import Override from 'method-override'

import rootRoute from './routes/root.js'
import homeRoute from './routes/home.js'

Dotenv.config();

const PORT = process.env.PORT
const app = Express();

app.set('view engine', 'ejs');
app.set('layout', 'layouts/base-layout');

app.use(Express.static('public'));
app.use(Layouts);
app.use(Override('_method'))

app.use('/', rootRoute)
app.use('/', homeRoute)

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
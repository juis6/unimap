import Express from 'express'

const router = Express.Router();
const mainLayout = 'layouts/base-layout.ejs'

router.get('/home', (req, res) => {
    try {
        const locals = { title: 'home.ejs' }
        res.render('home', { locals, layout: mainLayout })
    } catch (error) {
        console.error(error)
    }
});

export default router
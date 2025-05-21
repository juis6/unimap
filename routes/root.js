import Express from 'express'

const router = Express.Router();
const mainLayout = 'layouts/base-layout.ejs'

router.get('/', (req, res) => {
    try {
        const locals = { title: 'root.ejs' }
        res.render('root', { locals, layout: mainLayout })
    } catch (error) {
        console.error(error)
    }
});

export default router
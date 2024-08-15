import Router from 'express'
import getToken from './getToken.js'
import getDetail from './getDetail.js'
import axios from 'axios'
const route = Router()



route.get('/cred', async (req, res) => {
    const data = req.body.data
    const response = await getToken()
    const detail = await getDetail(data, response)

    res.json({
        detail
    })

})

export default route
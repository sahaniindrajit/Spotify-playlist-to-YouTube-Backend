import Router from 'express'
import getToken from '../functions/getSpotifyToken.js'
import getDetail from '../functions/getDetail.js'
import googleRoute from './getYoutubeToken.js'

const route = Router()
route.use('/google', googleRoute)


route.get('/playlist', async (req, res) => {
    const data = req.body.data
    const response = await getToken()
    const detail = await getDetail(data, response)


    //const link = await searchYoutube('Dave not Dave cold blood')

    res.json({
        detail
    })

})

export default route
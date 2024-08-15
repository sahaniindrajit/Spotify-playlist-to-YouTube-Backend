import Router from 'express'
import getToken from './getToken.js'
import axios from 'axios'
const route = Router()

route.get('/cred', async (req, res) => {
    const data = req.body.data
    const response = await getToken()


    const songsData = await axios.get(`https://api.spotify.com/v1/playlists/${data}/tracks`, {
        headers: {
            'Authorization': `Bearer ${response}`
        }
    })

    const name = await songsData.data

    res.json({
        msg: name
    })


})

export default route
const { request, response } = require("express")
const fetch = require('node-fetch');

const url = process.env.APIURL;

const getClimates = async (req = request, res = response) => {
    try {
        const { codes } = req.query;

        const arratOfPromises = codes.map(code => {

            const params = new URLSearchParams();
            params.append('query', code);
            params.append('access_key', process.env.APIKEY);

            const response = fetch(`${url}/current?${params}`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                },
                params, 
            });

            return response; 
        });



        const response = await Promise.all(arratOfPromises).then(async (res) => {
            return Promise.all(
                res.map(async (data) => await data.json())
            )
        })

        return res.status(200).json({
            ok: true,
            data : response,
        })
    } catch (error) {
        console.log("Controller climate error: ", error);
    }
}

module.exports = {
    getClimates
}
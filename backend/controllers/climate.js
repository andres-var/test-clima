const { request, response } = require('express');
const fetch = require('node-fetch');

const url = process.env.APIURL;

const getClimates = async (req = request, res = response) => {
    try {
        const { codes } = req.query;

        const arratOfPromises = codes.map((code) => {
            const params = new URLSearchParams();
            params.append('query', code);
            params.append('access_key', process.env.APIKEY);

            const responseItem = fetch(`${url}/current?${params}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                params,
            });

            return responseItem;
        });

        const responseData = await Promise.all(arratOfPromises).then(async (resData) => Promise.all(
            // eslint-disable-next-line no-return-await
            resData.map(async (data) => await data.json()),
        ));

        return res.status(200).json({
            ok: true,
            data: responseData,
        });
    } catch (error) {
        console.error('Controller climate error: ', error);
        return res.status(500).send({ error });
    }
};

module.exports = {
    getClimates,
};

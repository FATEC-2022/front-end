exports.postData = async(req, res) => {

    const { data } = req.body;

    const result = await

        res.status(200).json({
        status: 'success',
        data: {
            data: 'dados'
        }
    });
};
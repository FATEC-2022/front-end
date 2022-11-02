exports.getData = async(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            data: 'dados'
        }
    });
}
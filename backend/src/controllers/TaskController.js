const getAll = (req, res) => {
    return res.status(200).json({ message: 'controller está tudo certo.' });
};

module.exports = {
    getAll,
};

const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined) {
        return res
            .status(400)
            .json({ message: 'the field "title" is required' });
    }

    if (body.title === '') {
        return res
            .status(400)
            .json({ message: 'the field "title" cannot be empty' });
    }

    next();
};

module.exports = {
    validateBody,
};

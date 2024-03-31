const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resovle(requestHandler(req, res, next))
        .catch(err => next(err));
    }
};

export {asyncHandler};

/*
// Using try..catch
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    }
    catch(error) {
        res.status(err.code || 500).json(
            {
                success:false,
                message:err.message
            }
        )
    }
}
*/
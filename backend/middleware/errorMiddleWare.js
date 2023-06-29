const notFound = (req,res,next) => {
    const error = new Error(`NOT FOUND - ${req.originalUrl}`);
    res.status(404)
    next(error)
}


const errorHandler = (err,req,res,next) => {
    let statusCOde = res.statusCode === 200 ?  500 : res.statusCode
    let message = err.message;


    if(err.name === "CastError" && err.kind === "ObjectId") {
        statusCOde = 404
        message = "Resourse Not found"
    }
    res.status(statusCOde).json({
         message,
         stack:process.env.NODE_ENV === "production" ? null : err.stack
    })
}


export {
    notFound,
    errorHandler
}
const allowedOrigins = {
    'development': [
        'http://localhost:3000'
    ],
    'production': [
        'https://www.goalgetter.onrender.com',
    ]
}
console.log(allowedOrigins[process.env.NODE_ENV])
module.exports = allowedOrigins[process.env.NODE_ENV]
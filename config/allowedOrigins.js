const allowedOrigins = {
    'development': [
        'http://localhost:3000'
    ],
    'production': [
        'https://goalgetter.onrender.com',
        'https://main.d2bnuhkq75x64n.amplifyapp.com'
    ]
}
console.log(allowedOrigins[process.env.NODE_ENV])
module.exports = allowedOrigins[process.env.NODE_ENV]
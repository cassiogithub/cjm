const { UNAUTHORIZED } = require("../constants/http-status");

module.exports = function verifyJWT(request, response, next){
    const authHeader = request.headers['Authorization'];

    const [, token] = authHeader.split(' ');

    if (!token) return response.status(UNAUTHORIZED).json({ message: 'No token provided.' });
    
    jwt.verify(token, process.env.JWT_SECRET, function(err) {
      if (err) return response.status(UNAUTHORIZED).json({ message: 'Failed to authenticate token.' });
      
      next();
    });
}
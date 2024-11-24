const {validateToken}=require("./jwt");

    function cookieValidation(req, res, next) {
        const cookieValue = req.cookies["token"];  // Corrected the way to access the cookie
        if (!cookieValue) {
            console.log("no token");
            req.user = null;  // Ensure that user is set to null if no token is found
            return next(); 
        }
    
        try {
            const payload = validateToken(cookieValue);  // Validate the token
            req.user = payload;  // Attach the payload to the request object
            console.log(req.user);
        } catch (error) {

            console.error('Token validation failed:', error);  // Optionally log the error
            // Clear invalid token (optional)
        res.clearCookie("token");
        req.user = null;
        }
    
        next();  // Proceed to the next middleware
    }
    
    module.exports = {
        cookieValidation,
    };
    
   

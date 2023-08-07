my-soa-app/
|-- services/
|   |-- user-service/
|   |   |-- controllers/
|   |   |   |-- UserController.js
|   |   |
|   |   |-- models/
|   |   |   |-- UserModel.js
|   |   |
|   |   |-- routes/
|   |   |   |-- userRoutes.js
|   |   |
|   |   |-- index.js
|   |
|   |-- product-service/
|   |   |-- controllers/
|   |   |   |-- ProductController.js
|   |   |
|   |   |-- models/
|   |   |   |-- ProductModel.js
|   |   |
|   |   |-- routes/
|   |   |   |-- productRoutes.js
|   |   |
|   |   |-- index.js
|   |
|   |-- ...
|
|-- shared/
|   |-- utils/
|   |   |-- ValidationUtils/
|   |   |   |-- validateEmail.js
|   |   |   |-- ...
|   |   |
|   |   |-- LoggingUtils/
|   |   |   |-- logEvent.js
|   |   |   |-- ...
|   |
|   |-- constants/
|   |   |-- ErrorMessages.js
|   |   |   |-- USER_NOT_FOUND
|   |   |   |-- ...
|   |   |
|   |   |-- ServiceNames.js
|   |   |   |-- USER_SERVICE
|   |   |   |-- ...
|   |
|   |-- middlewares/
|   |   |-- AuthMiddleware.js
|   |   |   |-- authenticateUser.js
|   |   |   |-- ...
|   |   |
|   |   |-- RateLimitMiddleware/
|   |   |   |-- rateLimitRequests.js
|   |   |   |-- ...
|   |
|   |-- errors/
|   |   |-- NotFoundError/
|   |   |   |-- NotFoundError.js
|   |   |   |-- ...
|   |   |
|   |   |-- ValidationError/
|   |   |   |-- ValidationError.js
|   |   |   |-- ...
|
|-- config/
|   |-- database/
|   |   |-- connectToDatabase.js
|   |   |-- ...
|   |
|   |-- services/
|   |   |-- serviceConfig.js
|   |   |-- ...
|
|-- app.js
|-- package.json
|-- .gitignore
|-- README.md

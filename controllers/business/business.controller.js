// const businessService = require('../../services/business/business.service');

// exports.create = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to create new business' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessData = req.body;
//         const newBusiness = await businessService.createBusiness(businessData);
//         res.json(newBusiness);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.update = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to update business' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessData = req.body;
//         const updatedBusiness = await businessService.updateBusiness(id, businessData);
//         res.json(updatedBusiness);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findAll = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to list business' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businesses = await businessService.findAllBusiness();
//         res.json(businesses);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findById = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to find a specific business' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const business = await businessService.findBusinessById(id);
//         res.json(business);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // business state

// exports.createState = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to create new business state' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessStateData = req.body;
//         const newBusinessState = await businessService.createBusinessState(businessStateData);
//         res.json(newBusinessState);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.updateState = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to update business state' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessStateData = req.body;
//         const updatedBusinessState = await businessService.updateBusinessState(id, businessStateData);
//         res.json(updatedBusinessState);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findAllState = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to list business state' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessesState = await businessService.findAllBusinessState();
//         res.json(businessesState);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findStateById = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to find a specific business state' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessState = await businessService.findBusinessStateById(id);
//         res.json(businessState);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // business employee

// exports.createEmployee = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to create new business employee' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessEmployeeData = req.body;
//         const newBusinessState = await businessService.createBusinessEmployee(businessEmployeeData);
//         res.json(newBusinessState);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.updateEmployee = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to update business employee' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessEmployeeData = req.body;
//         const updatedBusinessEmployee = await businessService.updateBusinessEmployee(id, businessEmployeeData);
//         res.json(updatedBusinessEmployee);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findAllEmployee = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to list business employee' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessesEmployee = await businessService.findAllBusinessEmployee();
//         res.json(businessesEmployee);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findEmployeeById = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to find a specific business employee' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessEmployee = await businessService.findBusinessEmployeeById(id);
//         res.json(businessEmployee);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // business user

// exports.createUser = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to create new business user' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessUserData = req.body;
//         const newBusinessUser = await businessService.createBusinessUser(businessUserData);
//         res.json(newBusinessUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.updateUser = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to update business user' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessUserData = req.body;
//         const updatedBusinessUser = await businessService.updateBusinessUser(id, businessUserData);
//         res.json(updatedBusinessUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findAllUser = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to list business user' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const businessesUser = await businessService.findAllBusinessUser();
//         res.json(businessesUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.findUserById = async (req, res) => {
//     /* 	#swagger.tags = ['Business']
//         #swagger.description = 'Endpoint to find a specific business user' */

//     /* #swagger.security = [{
//             "apiKeyAuth": []
//     }] */
//     try {
//         const { id } = req.params;
//         const businessUser = await businessService.findBusinessUserById(id);
//         res.json(businessUser);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
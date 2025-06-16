const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({
      success: true,
      data: response,
      message: "Successfully created a new user",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroy({
      userId: req.params.userId,
      password: req.body.password,
    });

    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a user",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a user",
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );

    return res.status(200).json({
      success: true,
      data: response,
      message: "Successfully signed in",
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(error.statusCode).json({
      data: {},
      success: false,
      message: error.message,
      err: error.explanation,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "User is authenticated and token is valid",
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to verify authentication",
      err: error,
    });
  }
};

const isAdmin = async (req, res) => {
  try {
    const response = await userService.isAdmin(req.body.id);
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully fetched whether user is admin or not",
    });
  } catch (error) {
    console.log("Something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch whether user is admin or not",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  signIn,
  isAuthenticated,
  isAdmin,
};

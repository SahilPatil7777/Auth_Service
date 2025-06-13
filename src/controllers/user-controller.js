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
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a new user",
      err: error,
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
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to sign in",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  signIn,
};

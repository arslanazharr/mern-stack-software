const home = async (req, res) => {
  try {
    res.status(200).send({
      message: "Welcome to the home page",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };

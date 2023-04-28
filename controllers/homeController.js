exports.sendReqParam = (req, res) => {
  let dri = req.params.drinks;
  res.send(`Im Kühlschrank ist: ${dri}`);
};

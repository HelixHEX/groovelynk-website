const generateRandomString = function (length:number) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const convertToTime = (time_ms: number) => {
  const minutes = Math.floor(time_ms / 60000);
  const seconds = ((time_ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
};

export { generateRandomString, convertToTime };
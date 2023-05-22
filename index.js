import figlet from 'figlet';
console.log(figlet)
figlet("intocode", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
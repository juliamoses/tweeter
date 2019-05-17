"use strict";

const Chance = require("chance");
const chance = new Chance();

var axios = require('axios');


module.exports = {

  generateRandomUser: async () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;

    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }


    const newUser = (await axios.get('https://randomuser.me/api/')).data.results[0]

    const avatars = {
      small:   newUser.picture.large,
      regular: newUser.picture.medium,
      large:   newUser.picture.thumbnail,
    }
   

    return {
      name: userName,
      handle: userHandle,
      avatars: avatars
    };
  }
};

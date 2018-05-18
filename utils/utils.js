module.exports.add = (a,b) => a + b;

module.exports.square = (x) => x*x+1;

module.exports.names = (user, fullName) =>{
    var names = fullName.split(" ");
    user.firstName = names[0];
    user.secondName = names[1];
    return user;
};
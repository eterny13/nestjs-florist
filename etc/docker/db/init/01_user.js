// Define an user.
let user = {
  user: 'florist',
  pwd: 'florist',
  roles: [{
    role: 'readWrite',
    db: 'florist'
  }]
};
// Execute mongodb command to create the above user.
db.createUser(user);

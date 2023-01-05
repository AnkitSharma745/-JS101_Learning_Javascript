// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username = "Ankit4041"
let password = 7894561154
let database_username = "Ankit4041"
let database_password = 7894561154
if (username == database_username) {
  if (password == database_password) {
    console.log("You can login ")
  }
}
else {
  console.log("You can not login ")
}
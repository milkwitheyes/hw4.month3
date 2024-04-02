
let users = [
  {id: 1, name: "Вася",admin:false,},
  {id: 2, name: "Петя",admin:false,},
  {id: 3, name: "Маша",admin:false,},
];
users.forEach(user=>{
    if (user.name === "Маша") {
        user.admin = true;
    }
})

console.log(users);
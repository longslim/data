// variable = is a name used to denote or represent a value or datatypes
//keyword = it's a built-in js word that cannot be used as a variable nane

// document.write() = write on webpage

// const firstName = "John"
//const lastName = "Doe"

// console.log(firstName +" " + lastName)

// DataTypes:
// Primitive = Strings, Number, Boolean, Arrays, Undefined, Null, Symbol.
// Non-Primitive = Object, Function.

// const data= {
//     useOne :[ firstname= "Ade",
//         lastname="john",
//         age=50,
//         phoneNumber= "000030049944",
//         gender= "male",
//         email= "adejohn@gmail.com",
//         password= "rdvsc455"

//     ],
//     usetwo :[ firstname= "Ade",
//         lastname="john",
//         age=50,
//         phoneNumber= "000030049944",
//         gender= "male",
//         email= "adejohn@gmail.com",
//         password= "rdvsc455"

//     ],
//     usethree :[ firstname= "Ade",
//         lastname="john",
//         age=6,
//         phoneNumber= "049944",
//         gender= "male",
//         email= "adejohn@gmail.com",
//         password= "rdvsc455"

//     ],
//     usefour :[ firstname= "Ade",
//         lastname="john",
//         age=50,
//         phoneNumber= "000030049944",
//         gender= "male",
//         email= "adejohn@gmail.com",
//         password= "rdvsc455"

//     ]
// }

// x=(data.usethree[0])
// y=(data.usethree[5])
// z=(data.usethree[6])


// a=(data.usetwo[0])
// b=(data.usetwo[5])
// c=(data.usetwo[6])

// console.log(`${x} email is ${y} and password is ${z}`)
// console.log(`${a} email is ${b} and password is ${c}`)

const data =[
    {
        FirstName : "Mr",
        LastName : "Oluwatofunmi",
        Email : "doejohn@gmail.com",
        Phone_Number : "0987654",
        Age : 16,
        Gender : "Male",
        UserName : "doejhn",
        Password : 122223,
    },
    {
        FirstName : "Mr",
        LastName : "Samson",
        Email : "doohn@gmail.com",
        Phone_Number : "0987654",
        Age : 49,
        Gender :"Male",
        UserName : "doeohn",
        Password : "1222ss23",
    },
    {
        FirstName : "Mr",
        LastName : "Akande",
        Email : "djohn@gmail.com",
        Phone_Number : "0987654",
        Age : 48,
        Gender :"Male",
        UserName : "dojohn",
        Password : "12aa2223",
    },
    {
        FirstName : "Mr",
        LastName : "Adebayo",
        Email : "debajohn@gmail.com",
        Phone_Number : "1230987654",
        Age : 49,
        Gender :"Male",
        UserName : "bayojohn",
        Password : "aaa122223",
    },
    {
        FirstName : "Miss",
        LastName : "Precious",
        Email : "doejo@gmail.com",
        Phone_Number : "0987654",
        Age : 24,
        Gender : "Male",
        UserName : "dejohn",
        Password : "p122223p",
    },
    {
        FirstName : "Mr",
        LastName : "Haleem",
        Email : "doeohn@gmail.com",
        Phone_Number : "0987654",
        Age : 25,
        Gender : "Male",
        UserName : "oejohn",
        Password : "1hh22223",
    },
    {
        FirstName : "Mr",
        LastName : "Sammy",
        Email : "samohn@gmail.com",
        Phone_Number : "098777654",
        Age : 30,
        Gender : "Male",
        UserName : "oeohn",
        Password : "129ss7223",
    },
    {
        FirstName : "Mr",
        LastName : "Isreal",
        Email : "doereal@gmail.com",
        Phone_Number : "0987659876",
        Age : 28,
        Gender : "Male",
        UserName : "realohn",
        Password : "122223rrr",
    },
    {
        FirstName : "Mr",
        LastName : "Daniel",
        Email : "doeoiel@gmail.com",
        Phone_Number : "0231987654",
        Age : 27,
        Gender : "Male",
        UserName : "danjohn",
        Password : "122vv223",
    },
]

data.forEach(data => {
    console.log(`${data.FirstName} ${data.LastName} email is ${data.Email} and password is ${data.Password}`)})
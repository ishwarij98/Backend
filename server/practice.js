import axios from "axios";

// let arr = [{
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: [Object]
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: [Object]
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: [Object]
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications'
//     }
//   }]

// let data = arr.map((x) => {
//    return x.name;
// })
// console.log(data);

async function githubAPI() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(res.data)
    }
    catch (err) {
    console.log(err);
    }
}   
githubAPI()
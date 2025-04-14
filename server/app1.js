import axios from "axios";

// async function serverCall() {
//     try {
//         let response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         console.log(response.data);
//         // console.log("hello");
//     }
//     catch (error) {
//       console.log(error);
//       console.log(error.message);
      
//     }
// }
// serverCall();


async function githubAPI() {
    try {
        let response = await axios.get("https://api.github.com/users/ishwarij98");
        console.log(response.data);
    }
    catch (error) {
        console.log(error.message);
    }
}
githubAPI();
// import fetch from "node-fetch";

// export default function handler(req, res) {
// 	// const Http = new XMLHttpRequest();
// 	// const url='https://api.github.com/repos/Yurizaki/pf2-frontend/commits';
// 	// Http.open("GET", url);
// 	// Http.send();
// 	// Http.onreadystatechange = (e) => {
// 	//   res.status(200).json({ latestCommit: result[0].sha })
// 	// }

// 	fetch("https://api.github.com/repos/Yurizaki/pf2-frontend/commits")
// 		.then((res) => res.json())
// 		.then((result) => {
// 			if (result) {
// 				if (result[0]) {
// 					if (result[0].sha) {
// 						res.status(200).json({ latestCommit: result[0].sha });
// 					}
// 				}
// 			}
// 		});
// }

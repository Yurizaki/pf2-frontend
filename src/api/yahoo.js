import fetch from "node-fetch";

export default function handler(req, res) {
	fetch(`https://query2.finance.yahoo.com/v8/finance/chart/AAPL?interval=1d&period1=1632960000&period2=1633478400`)
		.then((response) => response.json())
		.then((resultData) => {
			res.status(200).json(resultData);
		});
}

import { execQuery } from '../dbConnection.js'

export const repo = {
	getData : async(req, res) => {
		try {
			if (!req.query.code) { throw new Error("'code' query parameter is required."); }

			console.log("req",  req.query.code);
			const code = '%' + req.query.code + '%';
			const result = await execQuery("select dept_code as code, dept_name as name from dept_master  where dept_code like ?", [code]);

			res.send(result);
		}
		catch (err) {
			res.status(404).send("[Error] repository.js : " + err.message);
		}
	}
}
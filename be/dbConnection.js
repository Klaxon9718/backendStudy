import dotenv from 'dotenv';
import mysql from 'mysql'

dotenv.config();

//DB Pool 생성
const dbPool = mysql.createPool({
			connectionLimit : process.env.DB_CONNECT_LIMIT,
			host  : process.env.DB_HOST,
			user : process.env.DB_USER,
			password : process.env.DB_PW,
			database : process.env.DB_NAME
  		});


//Connection 연결
const dbConnect = () => {
	return new Promise( async(resolve, reject) => {
		await dbPool.getConnection((err, connection) => {
			if (err) { 
				reject("[ERROR] dbConnect : " + err.message, err.sql); 
			} 
			else { 
				resolve(connection); 
			}
	  	});
	});
} 


//쿼리 실행
export const execQuery = async(query, params = []) => {
	try {
		//connection pool과 연결
		const connection = await dbConnect();

		//쿼리 실행과 결과 반환
		return new Promise((resolve, reject) => {
				connection.query(query, params,  (error, results, f) => {	//쿼리 실행
				if (error) { reject(error); }
				else { resolve(results); }
			});
		})
		.finally(
			connection.release() // 쿼리 실행 후, connecion 연결 반환, // 성공/실패 여부와 관계없이 연결 해제
		)
	} catch (err) {
		throw new Error("[ERROR] execQuery : " + err.message);
	}
};

//쿼리 실행
export const exec = (query, params = []) => {
	return new Promise((resolve, reject) =>{
		dbPool.getConnection((err, conn) => {
			conn.query(query, params, (error, results) => {
				conn.release();
				if(error) reject(error);
				else resolve(results);
			})
		})
	})
	.catch((err) => {
		throw new Error("[ERROR] exec : " + err.message);
	});
};



/**
1. execQuery vs exec
성능 차이는 미세한 차이로, 실제 운영 환경에서는 두 방식 간의 성능 차이는 거의 느껴지지 않을 것입니다.
둘 다 MySQL 서버와의 연결을 풀에서 가져오는 데 시간 소모가 발생하므로, 
연결 자체에서 발생하는 성능 차이는 거의 동일합니다.

다만, execQuery는 async/await를 사용하고 Promise를 중첩하기 때문에, 
불필요한 Promise 객체를 추가로 생성할 수 있습니다. 
Promise 객체가 추가로 생성되면서 미세한 성능 저하가 있을 수 있으나, 
이는 대규모의 반복적인 작업에서만 눈에 띄게 차이를 만들 수 있습니다.

가독성과 유지보수성 측면에서 execQuery가 더 나은 선택입니다. 
성능에 민감한 시스템에서 정말 큰 차이가 필요하다면 더 많은 테스트와 최적화가 필요할 수 있습니다.
 */

  
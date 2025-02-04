import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { dataAPI } from "@shared/api/publicAPI";

export function DataPage () {

	const { data: datas, isLoading, isError, error, refetch: refetchData } = useQuery({
		queryKey: ['dataPages', 'test'],
		queryFn: () => dataAPI.getData(),
		retry: 0,	//재시도 없음
		enabled: false
	  });

	  	
	// useEffect(()=>{

	// },[datas]);
	  
	// 로딩 중일 때 표시
	if (isLoading) {
		return <p> Loading data... </p>;
	}
	// 에러 발생 시 표시
	if (isError) {
		return(
			<div>
				<h1 style={{border:"10px"}}> [DATAPAGE ERROR] : {error.name} <br/> {error.message}</h1>
				<p>{error.stack} </p>
			</div> 
			)
	}

	const btnclick = () => {
		refetchData();
	}


	return(
		<div>
			<h1 style={{background: 'yellowgreen'}}>DataPage</h1>
			<button onClick={btnclick}>요청 전송 버튼</button>
			{ datas ?
			(
				datas.map((data) => (
				<div key={data.id} style={{ marginBottom: '10px' }}>
					<p style={{background: 'yellow'}}> {data.code}</p>
					<p style={{background: 'yellow'}}> {data.name}</p>
				</div>
				))
			) : (
				<p>No data available</p>
			)}
		</div>
	)
}
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { nasaAPI } from "../../../shared/api/publicAPI";


export function MainPage () {
	
	const { data: nasaData, isLoading, isError, error } = useQuery({
		queryKey: ['main','nasa'],
		queryFn: () => nasaAPI.getMain(5),
		retry: 0	//재시도 없음
	  });
	  
	// 로딩 중일 때 표시
	if (isLoading) {
		return <p> Loading data... </p>;
	}
	// 에러 발생 시 표시
	if (isError) {
		return <p> ERROR! : {error.message} </p>
	}
	
	return(
		<div>
			<h1 style={{background: 'green'}}>MainPage</h1>
			{nasaData && nasaData.length > 0 ? (
				nasaData.map((data) => (
				<div key={data.id} style={{ marginBottom: '10px' }}>
					<img src={data.url} alt={`Image ${data.id}`} />
					<p>{data.explanation}</p>
				</div>
				))
			) : (
				<p>No data available</p>
			)}
		</div>
	)
}
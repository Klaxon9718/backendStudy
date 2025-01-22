import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter'

// 인스턴스를 생성할때 config 기본값 설정하기
//https://axios-http.com/kr/docs/config_defaults
const apiInstance = axios.create({
	baseURL: `http://localhost:3000/api`,
});

//NASA API 기본 요청 설정
const nasaInstacne = axios.create({
	baseURL: `http://api.nasa.gov/`,
});



//mainPage
export const nasaAPI = {
	getMain: async (count) => {
		const data = await nasaInstacne.get('planetary/apod/',{
			params :{
				count: count,
				api_key: process.env.REACT_APP_NASA_APIKEY
			}
		})
		.then(response => {
			//여기서는 응답 전처리가 가능하다.
			// 리다이렉트 후 최종 응답 처리
			return response.data; 
		})
		.catch(error => {
			//API관련 오류 발생 시, 해당 페이지로 오류 메시지 전달
			throw new Error(`[nasaAPI ERROR] : ${error}`);
		});

		//리액트 쿼리에서 사용하는 값 반환
		return data;
	}
}

//dataPage
export const dataAPI = {
	getData: async () => {
		try {
		  const data = await apiInstance.get('data/getData',{
			params :{
				code : 'KGA'
			}
		  });
		  return data.data;
		} catch (error) {
		  throw error;
		}
	  },	
}

//showPage
export const showAPI = {
	getShow: async () => {
		const { data } = await apiInstance.post(`show/postShow`);
		return data.result;
	  },
}
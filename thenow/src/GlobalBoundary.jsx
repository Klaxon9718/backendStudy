import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalErrorFallback = ({ error, resetErrorBoundary}) => {
 
	const navigate = useNavigate();
	const navigateToMain = () => {
		navigate('/');
		resetErrorBoundary();
	};

	//자식 컴포넌트에서 발생한 렌더링 에러를 감지
	return (
		<div>
			<h1>에러가 발생했습니다.</h1>
			<pre>{error.message}</pre>
			<button onClick={navigateToMain}>메인으로이동</button>
		</div>
	);
	};

//라우팅 처리관련
//오류 발생 시 GlobalErrorFallback을 실행
//react-query(useQueryErrorResetBoundary)와의 활용
//https://velog.io/@sik02/React-Error-Boundary%EB%A1%9C-Fallback-UI-%EA%B5%AC%EC%84%B1-%EB%B0%8F-%EC%97%90%EB%9F%AC-%EC%B2%98%EB%A6%AC-%EA%B0%9C%EC%84%A0-with-react-query
export const GlobalBoundary = ({children}) => {
  return (
	// <div></div>///
    <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
      	<Suspense fallback={<div>로딩중...</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
};

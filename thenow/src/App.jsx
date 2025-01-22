import { Outlet, Route, Routes } from 'react-router-dom';
import { GlobalBoundary } from './GlobalBoundary.jsx';

import { HeaderComponent } from './widgets/HeaderComponent';
import { FooterComponent } from './widgets/FooterComponent';

import { MainPage } from './pages/MainPage/ui/MainPage';
import { DataPage } from './pages/DataPage/ui/DataPage';
import { ShowPage } from './pages/ShowPage/ui/ShowPage';

import { NotfoundPage } from './NotfoundPage/index.js';

//부모인 HeaderCompoent, FooterComponent 사이에 자식들이 그려진다.
const OutletContent = () => {
	return(
	<div>
		<HeaderComponent/>
			outletcontent
			<Outlet/>
		<FooterComponent/>
	</div>
	);
}

function App() {
  return (
	<div>
		<GlobalBoundary>
			<Routes>
				<Route element={<OutletContent />}>
					<Route index path='/' element={<MainPage />} />
					<Route path="/dataPage" element={<DataPage />} />
					<Route path="/showPage" element={<ShowPage />} />
				</Route>
			
			<Route path='*' element={<NotfoundPage/>}> </Route>
			</Routes>
		</GlobalBoundary>
	</div>
  );
}

export default App;

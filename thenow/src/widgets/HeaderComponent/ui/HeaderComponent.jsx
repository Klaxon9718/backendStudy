import { Link } from "react-router-dom";


export function HeaderComponent () {
	return(
		<div>
			<h1> This is HEADER </h1>
			<Link to="/dataPage">
        <button>DataPage</button>
      </Link>
      <Link to="/showPage">
        <button>ShowPage</button>
      </Link>
	  <Link to="/">
        <button>MainPage</button>
      </Link>
			{/* <button name="dataPage" onClick={btnClick}>
				DataPage
			</button>
			<button>ShowPage</button> */}
		</div>
	)
}
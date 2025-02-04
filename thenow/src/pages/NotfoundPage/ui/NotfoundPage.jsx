// import { useNavigate } from "react-router-dom";

// export function NotfoundPage() {
//   const navigate = useNavigate();

//   const btnGotoHome = () => {
//     navigate("/"); // 홈으로 이동
//   };

//   return (
//     <div>
//       THIS IS ERROR..
//       <button onClick={btnGotoHome}>Go to Home</button>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export function NotfoundPage() {
	return (
		<Link to={"/"}>NotfoundPage</Link>
	)
}
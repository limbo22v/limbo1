import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// useEffect(() => {
//   if (!localStorage.getItem("token")) {
//     navigate("/authentication");
//   }
// }, []);
const Day9 = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/authentication");
    }
  }, []);
  
  return (
    <div>
      <h2>
        ສະບາຍດີ ມື້ທີ 9
      </h2>
    </div>
  )
}
export default Day9;
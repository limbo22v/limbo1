import { useEffect, useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const Day10 = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [user, setUser] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    //   const navigate = useNavigate();
    useEffect(() => {
        fecthMyUser();
    }, []
    )
    const fecthMyUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get(`${API_URL}/users/me`, { headers: { Authorization: `Bearer ${token}` } })
            setUser(res.data.data.data)
        } catch (error) {
            localStorage.removeItem('token')
        }
    }

    return (
        <div className="container-1">
            <h1>ໂພຟາຍຂອງຂ້ອຍ</h1>
            <div className="container">

                <img className="profile-image" width={200} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZP9zTf75vBmTD9BJWQmf3DjamXGuvzw44w&s"></img>
                <div className="info"><h2>Fullname: {user?.first_name}   {user?.surname}</h2>

                    <p><strong>Email: {user?.email}</strong></p>
                    <p><strong>Contact: {user?.phone_number}</strong></p>
                </div>
                <div className="footer">
                    <h4>ນີ້ແມ່ນໂພຟາຍຂອງຂ້ອຍຕອນຂ້ອຍຝຶກອົບຮົມໃຫ້ເປັນຊ່ຽວຊານໄອທີ ປະຈຳປີ 2024
                        ຂໍຂອບໃຈມາຍັງໂຄງການທີ່ການສະໜັກສະໜູນ
                        ຂໍຂອບໃຈມາຍັງກະຊວງເຕັກໂນໂລຊີ ແລະ ການສື່ສານ ທີ່ອຳນວຍຄວາມສະດວກເລື່ອງການ
                        ປະສານງານ, ດ້ານສະຖານທີ່
                        ຂໍຂອບໃຈມາຍັງອາຈານທີ່ໃຫ້ການສິດສອນຖ່າຍທອດຄວາມຮູ້ໃຫ້ແກ່ພວກຂ້າພະເຈົ້າ
                        ຂໍຂອບໃຈຜູ້ຊ່ວຍຄູຝຶກທຸກທ່ານພ້ອມດ້ວຍໝູ່ເພື່ອນທີ່ໄດ້ໃຫ້ການຊ່ວຍເຫຼືອຂ້າພະເຈົ້າ
                    </h4>
                </div>
            </div>
            <style jsx>{`
            .container {
                min-height: 100vh;
                background-color: #F7EED3;
                padding: 20px;
                max-width:600px;
                text-align: left;
                margin:0 auto;
                display:flex;
                flex-direction:column;
                align-item:left;


                }
            .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 15px;
          }
            .info {
            border-raduis: 20px;
                    padding: 15px;
                    margin-bottom:15px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.5);
                    background-color: #CBE2B5;
             }
            .footer {
                background-color: #B4E380;
                padding: 1px;
                max-width:600px;
                text-align: left;
                margin:4 ;
                display:flex;
                flex-direction:column;
                align-item:center;
                
                }
            `}
            </style>
        </div>

    )
}
export default Day10;
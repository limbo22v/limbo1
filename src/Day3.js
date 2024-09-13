import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {
    const [formData, setFormDate] = useState({
        name: "",
        surname: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        message: "",
    });

    const handleChang = (e) => {
        const { name, value } = e.target;
        setFormDate((prevData) => ({ ...prevData, [name]: value,}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formData.name == "" || 
            formData.surname == "" || 
            formData.email == "" || 
            formData.dateOfBirth == "" || 
            formData.gender == "" || 
            formData.message == "" 
        ) {
            return Swal.fire ({
                    title: "ທ່ານປ້ອນຂໍ້ມູນບໍ່ຄົບ",
                    text: "ກະລູນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ",
                    icon: "warning",
                    confirmButtonText: 'ຕົກລົງ'
                });
             }
         //ຖ້າລູກຄ້າວ່າຈະສົ່ງຂໍ້ມູນແທ້ບໍ?
         const isSubmit = await Swal.fire ({
            title: "ທ່ານຈະສົ່ງຂໍ້ມູນແທ້ບໍ",
            text: 'ຂໍ້ມູນທ່ານຈະຖືກສົ່ງເຂົ້້າລະບົບຫຼັງບ້ານ',
            icon: "question",
            confirmButtonText: 'ຕົກລົງ',
            showCancelButton: 'ຍົກເລີກ',
            showCloseButton: true,
            showCancelButton:true
         });

         if (!isSubmit.isConfirmed) {
            return;
        }
        onSubmit(formData);
        setFormDate({
            name: "",
            surname: "",
            email: "",
            dateOfBirth: "",
            gender: "",
            message: "",
        })
        Swal.fire({
            title: "ສຳເລັດ",
            text: 'ຂໍ້ມູນທ່ານໄດ້ສົ່ງສຳເລັດແລ້ວ',
            icon: 'success',
            confirmButtonText: 'ຕົກລົງ'

        });

    };
    
    return (
        <form className="form" onSubmit={handleSubmit} >
            <input onChange={handleChang} value={formData.name} type="text" name="name" placeholder="ຊື່"  ></input>
            <input onChange={handleChang} value={formData.surname} type="text" name="surname" placeholder="ນາມສະກຸນ"  ></input>
            <input onChange={handleChang} value={formData.dateOfBirth} type="date" name="dateOfBirth" placeholder="ວັນເດືອນປີເກີດ"  ></input>
            <input onChange={handleChang} value={formData.email} type="email" name="email" placeholder="ອິເມວ"  ></input>

            <select onChange={handleChang} value={formData.gender} name="gender"   >
                <option value=""> ເລືອກເພດ </option>
                <option value="ຊາຍ"> ຊາຍ </option>
                <option value="ຍິງ"> ຍິງ </option>
                <option value="ອື່ນໆ"> ອຶ່ນໆ </option>
            </select>
            <textarea onChange={handleChang} value={formData.message} type="message" name="message" placeholder="ຂໍ້ຄວາມ"  ></textarea>
            <button type="submit" >ສ່ົ່ງ</button>
        </form>
    );
};
const Day3 = () => {
    const [submission, setSubmissions] = useState([]);
    const handleSubmit = (formData) => {
        setSubmissions([...submission, formData]);
    }
    return (
        <div className="container" >
            <h2>ຟອມໃຫ້ຄຳເຫັນ</h2>
            <Form onSubmit={handleSubmit}></Form>
            <div className="submissions" >
                <h3>ຂໍ້ມູນທີ່ໄດ້ຮັບ</h3>
                {submission.map((ss, index) => (
                    <div className="submission-item">
                        <p> <strong>ຊື່: </strong> {ss.name} </p>
                        <p> <strong>ນາມສະກຸນ: </strong> {ss.surname} </p>
                        <p> <strong>ວັນເດືອນປີເກີດ: </strong> {ss.dateOfBirth} </p>
                        <p> <strong>ເພດ: </strong> {ss.gender} </p>
                        <p> <strong>ຂໍ້ຄວາມ: </strong> {ss.message} </p>
                    </div>
                ))}

            </div>
            <style jsx>
                {`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f0f0f0;
                    padding: 20px;
                    max-width: 600px;
                    text-align: left;
                    margin: 0 auto;

                }
                .form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 300px;
                    padding: 20px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    margin-bottom: 20px                 
                }
                .form input,              
                .form textarea, 
                .form select {
                    margin: 10px auto;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    font-size: 16px;
                }
                .form textarea {
                    min-height: 100px;
                    resize: vertival;
                }
                .form button {
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #4caf50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                    font-family: phetsarath OT;  

                    }
                    .submissions {
                    width: 100%;
                    max-width: 500px;
                    margin-top: 20px;
                    text-align: left;
                    }
                    .submission-item {
                    background-color: white;
                    border-radius: 8px;
                    padding: 15px;
                    margin-bottom: 15px;
                    box-shadow: 0 0 5px rgba (0,0,0,0,0.1);
                    background-image: url("https://img.lovepik.com/background/20211021/large/lovepik-color-abstract-background-image_400726603.jpg");
                    }
                `}

            </style>
        </div>
    )
}

export default Day3;
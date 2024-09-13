import { useEffect, useState } from "react";

function BasicForm() {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        alert(`ຊື່ທີ່ຖືກສົ່ງ:${name} `);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    type="text"
                    placeholder="ກະລູນາປ້ອນຊື່ຂອງທ່ານ"
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <button type="submit" >ສົ່ງຂໍ້ມູນ</button>
            </form>
        </div>
    )
}

const MultipleInputForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const handleChang = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value, }))
    }

    const handleSubmitData = (e) => {
        e.preventDefault();
        alert(`ຂໍ້ມູນຖືກສົ່ງ ${JSON.stringify(formData)}`)

    }

    return (
        <div>
            <form onSubmit={handleSubmitData} >

                <input name="firstName" placeholder="ຊື່" value={formData.firstName} onChange={handleChang} ></input>
                <input name="lastName" placeholder="ນາມສະກຸນ" value={formData.lastName} onChange={handleChang}></input>
                <input name="email" placeholder="email" value={formData.email} onChange={handleChang}></input>
                <button type="submit">ສົ່ງຂໍ້ມູນ</button>

            </form>
        </div>
    )
}

const SetlectAndRadio = () => {
    const [selectedFruit, setSetectFruit] = useState('');
    const [gender, setGender] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <select
                    value={selectedFruit}
                    onChange={(e) => setSetectFruit(e.target.value)}
                >
                    <option value="" >ເລືອກໝາກໄມ້</option>
                    <option value="ໝາກແອັບເປີນ">ໝາກແອັບເປີນ</option>
                    <option value="banໝາກກ້ວຍdfa">ໝາກກ້ວຍ</option>
                    <option value="ໝາກກ້ຽງ">ໝາກກ້ຽງ</option>

                </select>
                {selectedFruit && <h4>ໝາກໄມ້ທີ່ທ່ານເລືອກ: {selectedFruit}</h4>}
                <div>
                    <input onChange={(e) => setGender(e.target.value)}
                        type="radio" id="male" name="gender" value="ຊາຍ"></input>
                    <label>ຊາຍ</label>
                    <input onChange={(e) => setGender(e.target.value)}
                        type="radio" id="female" name="gender" value="ຍິງ"></input>
                    <label>ຍິງ</label>
                </div>
                {gender && <h4>ເພດຂອງທ່ານແມ່ນ: {gender}</h4>}
                <button type="submit">ສົ່ງຂໍ້ມູນ</button>

            </form>
        </div>
    );
}

const ProductSearch = () => {
    const [sortOrder, setSortOrder] = useState("asc");
    const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });
    const [searchTerm, setsearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const products = [
        {
            id: 1, name: "ໂທລະສັບມືຖື", price: 5
        },
        {
            id: 2, name: "ແທັບແລັດ", price: 7
        },
        {
            id: 3, name: "ໂນດບຸກ", price: 9
        },
        {
            id: 4, name: "ໂຕະ", price: 10
        },
        {
            id: 5, name: "ລຳໂພງບູທູດ", price: 3
        },

    ];

    const [results, setResults] = useState([...products]);

    useEffect(() => {
        handleSearch();
    }, [sortOrder, priceFilter, currentPage]);

    const handleSearch = () => {
        let filterProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ); setResults(filterProducts)
        // Filter by price min
        if (priceFilter.min !== "") {
            filterProducts = filterProducts.filter(
                (product) => product.price >= parseInt(priceFilter.min)
            );
        }
        // Filter by price max
        if (priceFilter.max !== "") {
            filterProducts = filterProducts.filter(
                (product) => product.price >= parseInt(priceFilter.max)
            );
        }
        filterProducts.sort((a, b) => {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });
        setResults(filterProducts);

    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    }

    const handlePriceFilterChange = (e) => {
        setPriceFilter({ ...priceFilter, [e.target.name]: [e.target.value] });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(results.length / itemsPerPage);

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>

                <input type="text" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}
                ></input>

                <button type="submit">ຄົ້ນຫາ</button>

            </form>

            <div>
                <label>
                    ຈັດລຽງຕາມລາຄາ: <select onChange={handleSortChange}>
                        <option value="asc">ລາຄາ(ຕ່ຳ-ສູງ)</option>
                        <option value="desc">ລາຄາ(ສູງ-ຕ່ຳ)</option>
                    </select>
                </label>
            </div>

            <div>
                <label>ລາຄາຕ້ຳສຸດ:
                    <input type="number" name="min" value={priceFilter.min} onChange={handlePriceFilterChange}
                    ></input>
                </label>
                <label>ລາຄາສຸງສຸດ:
                    <input type="number" name="max" value={priceFilter.max} onChange={handlePriceFilterChange}
                    ></input>
                </label>
            </div>
            <ul>
                {currentItems.map((product, index) => (
                    <li key={product.id}>
                        {index + 1}. {product.name}, ລາຄາ: {product.price} Lak
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1} >
                    ກ່ອນໜ້າ
                </button>

                <span>
                    ໜ້າ {currentPage} ຈາກ {totalPages}
                </span>

                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages} >
                    ຖັດໄປ
                </button>

            </div>
        </div >
    )

}


const Day6 = () => {
    return (
        <div>
            <p>ມື້ທີ 6 ຮຽນການສ້າງ from & Controlled Components</p>
            <h2>ແບບຟອມພື້ນຖານ</h2>
            <BasicForm></BasicForm>
            <h2>ແບບຟອມທີ່ມີຫຼາຍອິນພຸດ</h2>
            <hr></hr>
            <MultipleInputForm></MultipleInputForm>
            <h2>ການເລືອກ Radio ແລະ Dropdown</h2>
            <hr></hr>
            <SetlectAndRadio></SetlectAndRadio>
            <hr></hr>
            <ProductSearch></ProductSearch>
            <style jsx>
                {`
                    .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    }    
                    form {
                   margin-bottom: 20px;                 
                    }
                   input, 
                   select {
                   margin: 10px, 0;
                   paddding: 5px;
                    }      
                   form button {
                   margin-top: 10px;
                   padding: 5px 10px;
                   background-color: #4caf50;
                   color: white;
                   border: none;
                   border-radius: 5px;
                   cursor: pointer;
                   }  
                   .error {
                   color: red;
                   font-size: 20px;

                   }     
                   ul {
                   list-style-type: none;
                   padding: 0;
                   }   
                   li {
                   nargin: 5px;
                   padding: 5px;
                   backgroun-color: #f0f0f0;
                   border-radius: 3px;
                   }

                    `}
            </style>
        </div>
    )
}

export default Day6;


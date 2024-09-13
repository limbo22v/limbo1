import React, { useState, useEffect } from "react";

// Functional Counter Component
const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Func update ${count}`
  })

  return (
    <div className="counter">
      <h2>ນີ້ແມ່ນ Functional Counter</h2>
      <p>ຈຳນວນ: {count} </p>
      <button onClick={() => {
        setCount(count + 1);
      }
      }>ເພີ່ມ</button>
      <button onClick={() => {
        setCount(count - 1);
      }
      }>ລົບ</button>
    </div>
  );
};

//Class Component
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  
  }

  componentDidUpdate() {
    document.title = `ຈຳນວນ: ${this.state.count}`;
  }

  render() {
    return (
      <div className="counter" >
        <h2>ນີ້ແມ່ນ class Counter</h2>
        <p>ຈຳນວນ: {this.state.count}</p>

        <button
          className="add-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >ເພີ່ມ</button>

        <button className="del-btn" onClick={() => {
          this.setState({
            count: this.state.count - 1,
          });
        }}
        >ລົບ</button>

      </div>

    );
  }
}
// Function Blogpost
const BlogPost = (props) => {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h1>{props.title} </h1>
      <p> {props.content} </p>
      <button
        onClick={() => {
          setLike(like + 1);
        }}>
        <img
          width={50}
          height={50}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAwFBMVEX////u7u7t7e2Em9Lv7+/s7Oz5+fn09PT8/PwbOZKHntS9vb7z8/HBzOdddbipqare3t6prcwTOJhLXKBjebkAGonm5ucAIora2+YAJ4xDT5aeqMzu8fcmSJ8AMJMAFIprea4AA4MILYtfca84UZ/j5vGztLZEWKASM47R0tXCyNwADIEhQJrS1uXHx8iMmsi0udJXZqN3jskrQJOFjrlyfq2xvt6VncB+jL+enp5SabDP2e9thMJdYqS+wc5mcJ+3pc56AAAQGElEQVR4nN1cDXuiuBYGNiSgzICxgrRKraKCK1arXTuzM3P//7+6+eAjQFCwzu597plOSzQhrycn5z05CSoKE6SpRBAvAHqtpQWdFnSDXUNWSxWbAEkTXoDs2hBroXqBNzFYExWmvShCDe0qKFbQOoHSmz6H2GUVlMEEASqIXSu8APk7QChAXlCEJqUCamxS7+VSE0UsGmI/IgKl8Q6G2KkENFKacIqFCk6F6U0Xda0rDQZUGp5SE020OcnwSMxMgxeaqDUDkIJSaxOhFahSE1UEpTaBUn8DKIuOJYR0LD4J6vrw1UDJhw8hJ3aYxLFjoVtAtRg+rVL9sqb0ONZgasHQjWMdNNrURU1BJoiLWIBXCrUmEMYO7ykT5DgqrLWH9faoXMiaa1Syj0Wv9cx5skKmCVYtbcIKIG8C9B1SqgLjmGhIUyVNxC4N1mU2IfUcVM2QO9IM0OOymlJxYhV8hmY+BUqPDRkmcoP4XwOFYiDHRN6LwT0ImRZ0GagaIRc2FTdhUhQ3BpImZULWSqCYwRup9RtCAdIC4SaxUK+VFuCuYfCYOG69CRQK2Y2zXsp+SnRNLT06HxHgXMCkGDF37zI/pYojmvWi1txzo0dvJmTgZtOYyWQ5KaPS+2oTqLsSchmUI5j5fjFcD2f7EqqdA9qCuhshA8FHDUaYirfeCKDcFeoM6tPDV8y9yRCbYRj6GEdjAVWfeKv28RQL9rLPoNJCZugqDyNTULRWBqrWRAQVBjMyE8ezAE+XBah4pVaawIZeKIengWg6P4UCrBdgvRYvQFFTwYz19479UwEK2Y60FyTeOOsla9PeeWoy5ymAWqegJkPzuVCV0e93cJ5CjdtpxihAoUMKSvnL88+Fqnb2P819UlDGyDwU/sqx3X8V1CH1D7MgLCagY8fdQX0uyCuDSpsOfL/wVbq9ax/kNcamkqi1ORx2ZKA2W6/w63DVbw6HK/0rDGLuCVlBqasF1DUpNgHj3KPDWQ5qPPVfBVC2mzlPJqLyq8q7lWb0BpoRQC3D4EEK6p/iPtnwEVCL/HWjbzv/KCgxFl5inLoEAgoPRVDxvQn5YoJDjIWXI5yxSxVUSVMiIdec/LW8TmNmqUjllBYNZx9vclDBoayptqmgbHjEKECtRgF57FoLHGgBiqurIT5mjFe2qRWhZKEXQ+wyy1+lvWSg2nl0eXoxFlbGmwDPsuvxMcivuaYAUOvBk9KdZjQWYmU0w9RWaIr14LgFJuOER7kXJ35KYGRAMzEAgTtwH3SZ6Fx4QSuuSRMkrvjGAV7nLmtjeuVInXDkzs0SMTeDcmPHcS8I+exGabm+CIICxyDwxDidd+/s2muqkkJhNKLvXOWawFJaY+PjnwXGsx8lkiaxm4JqImRNkbBveh27l1a9MkEHwaJIQByES1k1x2nqMi00EjIU51RLOfvBh1Cc4vVEWs+NQRGndCBkKM82XZSxvz2KqhnhhRwUQXUT9znd9URWfP6TUEYF4dTEiUF3UO51E6/JDAu+ksjfo+DcUJVa+6XUu9Sm4IVsU5OQ5fq6ZNd7z/+rsTba8b9ym5LNPkO/mNmRyibajsoO4ISD81Mu+03ZSJ3YaJ59Kcbysry7lRMjD55KrxiH7XZrRjTZwX6Z4at4V7hyRUIWYoAGj15ijuWmSZKik+S4fS5jUibhy7Mgo2DrPYqq3PVRJ0IWR29wNE1za2KT/SH/IzN/YZGhSkwcvFeVtxyL8uv9SLQlGJ1ja6AL9wm8P3kh/TfIdpQuVgbm1j9ddf/LWYCHheNS7V03UEWy8Mtou36Qy9ctD52MU2D6NT1JBB6wsDo1Vn1wZfhEQ0clUObXnlweTDxLkmQQBbhi402SbMWob2Xr5cgzj2+l27V6SVNfe39IZU1nFzEmHJiDVphqQTvosl0LKpqSYnqbbnFAZXpuYLiajKeizyfLmy7ZYbUFqN6PLT58vH+8DqThiVT22BN06n4bd+E+tcXw9b6aQS2uvCxLH5cCrH58M6gmTYX4KKZ/r8smxNtQdJ9xvwsht7GpHsaHbmR0omwzF1DptlshZD0lZCgRtwWot3nQGC3JZZLsDwEOhVmx2sl6hzkhl/bJqn5KblKjL91AUXkIRJe2s13ReWrtPXoDqO/bl+7BKc15TItS/M29kWYahi80/e6YWMq/mIDOt3SbsDv3SUG9TYU0Twd5Dby/BVCrq6C0Dpp6O9ZjlVagsFfMP8fup9O+suMgyz9dB9X7YV5YFVyQd+yJCf/VhfNT5WSUorUAhXG7yKAsyRSHRYmAgjzLxUcxj1VuI+TejyjqSDJUyNIwENhvR0DdkZB7D1FX5iOSDDH+KTiSvt2XHCT8BCjcHdTyBW9NAZNr3wxK6hJuGj74gbfiR3Fs25GDuo2QbzT0jY+HGbNBENs2YISsi4SsN5yfuk7IBNRNLmEWbDeZVgBxU0B6ZEvJqnR1ntObnOfG47MPEm9JQXXYrm3FfbjIkXcFZbDuCKjVrYTcEA6HpncDqLOP92lnFJSt3ylKoEs+8uem0AVEJEq3OCYG6vJiNAtEr4N6CMP1Gw3yvObsU4MkjyZZ3qup0NmXa6qcHe46+9bYew6mP3o/5l2n34YE6f4jABko1LdXmnz2iX5Kueqnel+j6SBZzLe9XoQXnVLa8CUwg5lrqbmmViRyuZAd1lvTzJrOnskxeCNLLHmWvFE+5tHQKDBZxKTi+6z71mybIwx+9L7jeReigWCyjqKJWiiqT1jmPqC+4+F48uSbhJJJmAcnXNC1gUQ0mz+bv0xyi6Jzz4YdtmsvgCKe/BhiTF57m26360wOm0uwID+Rt5g/azkodWXbu/bnp9RLhNx7C7dm+MDcJ82zRpj84Ag/HwZNuRdKKWRNCQdRMCz5AxtkW4gN56eEGL2eNCv78jfipf5gK7/tMUwlwDgI3zd1XPTOFhG4PM2j0Qbl/mBHzBw1bEtnY95MyNuvVYbppTozi+2h5MPzceCNZk+bpDQnDcMCSTI4Dz0/ehmkO/jURlZk0XAtvdhEM8nLdhpOw/SnfFVKFibnox/gIMDH8Odi9jrY/9rs94PTbPFzeDQDfz73zQEszNylilK7JGJdIWU99ZuSwxg/l33C+HUW+l5A3wl8b/Q88jwCZh74/sgLZ0/QyvWkAjp6oBMoXUjuj2fDRqnsEJP7LZP9w3AajEYeQeSNiPjm+nDaJ8sJKiaeCsjo2e5VUKXtWnTDfpEgaDIe/9r8IpKMl8uJobB0qyoInXt9UJzSqp6fSqlQ+I2gIR5w7SiQbvJbVnYUygLs5H5ZgE78QZw/RFAR2LBde/l8cqOQqa1WAUiEDd6q83btLXuQBqRcch0SZz07/dgddka72pQBIWiFhwJQKabu27XdNkYNRL1gS0gq0immlXodVDXB0X70CD9omsUENQIR9UQ5z16BFgeaQZa74uxIQGWkv+SbrdWMuaFA9vrApbdM+IYsuIyHg3KI29wJ55LEI1PZ03fZBy7TjAMAP2usfHkJgnmQbuylzzMh2th68Yl4YxJKWgN67S3agFIBcnYMj3iirhX3OTyFrOvWlz/pRqj/alCUZKh0PZ1hxgt5PYqWgILyyPV81goU9QjsZFrX81MpKPpKBgoSLKIxAwbKnHNNdQKlAi3Wux9VkoKq3Nl6YVw77q4pOoSxdhdQtU87/A+Rw02giK8iJNPi/BQV0EFTKl840ordQVG74l3mgQmRgpDr5xuBobUBlX5kCSh+lwIi4H6sHCe4Tsena0ELUIAvruqaAuk72RIPQDAmQeh+M4aW2J4fOJMfPmU1tOugqpi07wsi32suwYKzBXtnzyFY2uBwJHGoFzy+O8JdgNs3lC7c10JTxCVIZx+YLGgIPPfP/M7o13E0Z4c+zMgfnVChLBTv7g2KuATaT1ABZcGPEW0wOnOlGAOfI+KwRu8CQeor1Gm7tgUoyD16GRSYzDzmU/f8w8IBd7EBUd2cgZ3ly1ESVu2qQV6WJZM9LtAelFm2KePDZ12niykwNqmevPApSfbf2Z1G+9yuSMBQPNknPT8lprPbOE8+fGZJUwh9MD35qZ5UJaTq8V4h9QjKmRaitZp7DpeEepnz1EsLhxtpJuc+AZTyGkTUngep4Vhjal/zA3cFYHJgqDa5rYNV/+7cxzQlDt+rx4x6k2kVngIRhfWLVvPfc6Wjvt0lZd1WU2LoYh6ZAc1fjSz7O/lJFXccozSJNfGZGWbvE6P65tyXkGvDl037cJk2BuMje+E4zYQp0suXysj5Fl/cQ75q6HI/FdVA0fFJ+SY5cpi5sOIosXJQdrqxrYgrZENT6GTIk2Y00QbIazcNXybzPWoAxeT5SwYKON/6BiP1fLtWBc2rmdZ+qjR80TYdL57ZzEBNy1LRVOvt2haEzEGJfopoZLP3zWKCEZtihp5MylJk9+luu1oF9TlCrgxfFH6B8MBRsTQicUzMiohm+NlS8ssisVV+DxTT3fZPgEqXhCAP4LifwiWPrloJY7j5ms1A+E5L80E+XPzEZ5H37Mt229sT8gcoP9wA+BLLrCyxNOvMye+DasBKmEd/TOMVa+m/PD+/fORKJ6D6StvtWuhWQUXHR1HCk5XZVCXIsyYhGzKfTTHlkXHfaYLoqn65oKVjUiQ+V3bfuLRdW8rk1fxUZV77JyjjPpofgxseuzwytJuAITRf95v96ZliErfW6OZMftalOyFXZH6CqaaqoEiL2ZzPQIXcEp1ZyBf5QRSwcZ2bk4KPY5ohvoFmrEZQTct2a8k994gNoPHhCZGn6Yfj0tbabYRsfaGheFU8MgYGf4ODGtEX09WMcSZBOYk0GQcCtI/yGH3+52GJctdCE5+r63vImmT4NotZKu+z4mpgAY2/wUDt2eVr2gideDUeVkEwmIXY9/3j8H2jCGs/MvfsHRBBFdu16XZMmhlK92acojF1eAAhgCx+ZbErtuIkf1NCQSB9NSvRytkNIFgm9Ei9i0rrPrq1pqPyV0HRggKBdLsWxq2ycm2FbxmVM+kqzXxmC4ean1IFxeWJ2J1Vu/OdBdE0o94pOyyO328RNnix0gkUiH8vKOSu2GZttyeMHPd3omJ6svkzX1JQ/BHHzNCZ0KtY+22oAIhX+ZYDFBNjRcrKoOlpxPKsiJeoC9Bj9/cYOwAuze7bThoDEC9A/RS9pC6BJsPl56c0lix1qpO4qRfhsjLxqYMrV0bujmX3XcnXXVw+0Mzak+axroIG0fML1y1edOPY1YpIUHd3O1LOU3tAd/orvuNw84OsKol3mmSVX9hFJZt1KFQixW+r/i796rUdR2T33WqXXZ6uNRzeTxdZ7Srl6i36jlHrss35Ka3YSJ3EXLLvmSuui4I7cbJaLBQRq1GrcmKqNSL9Pn08OntkqPHpWtnXXcgKBiT/ii+bgfkXxFS/kkZ8SrCoxaY2/YEXe8nDYZbArvupzINkX3dB92SKpLe41mBiCE0KdhVS8+KynN9Y2iT1U2ww/1++e7Hdt1T+j3wh5D1A/RfrEe2n41g7PgAAAABJRU5ErkJggg=="
        ></img>
      </button>

      <h2> {like} </h2>
    </div>
  )
}
//product component
const ProductComp = (props) => {
  const [like, setLike] = useState(0);
  return (
    <div className="product-card" >
      {/* {props.productDetail.length} */}
      <img
        className="product-main-img"
        src={props.productImg}
      ></img>
      <h1> {props.productTitle} </h1>
      <p>{props.productDesc}</p>
      <p> {props.productPrice} </p>
      <p>this is my index {props.index} </p>
      <button
        onClick={() => {
          setLike(like + 1);
        }}>
        <img
          width={50}
          height={50}
          src="data:image/png;base64,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"
        ></img>
      </button>

      <h2> {like} </h2>
    </div>
  );
}

//Main Component
const Day2 = () => {
  const title = "ນີ້ແມ່ນຫົວຂໍ້";
  const content = 'ນີ້ແມ່ນເນື້ອຫາ';


  const productDetail = [
    {
      title: "ຢ່າງຫຼີ້ນແຄມຂອງ",
      description: "ລາຍລະອຽດຂອງການຂອງຂໍ້ມູນແຄມຂອງ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GlNUleUpzEH5EF3Hw8EgTS5J27Q7jxy5OA&s",
      price: "50.000 kip",
      
    },
    {
      title: "ຢ່າງຫຼີ້ນທາດຫຼວງ",
      description: "ລາຍລະອຽດຂອງການຄ້າ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRCO75W82oI5FEGxiJ751GxL1g2AwgmG9BGksXtGnLxNHeGpwHwt570P4A07NP77_HdU&usqp=CAU",
      price: "50.000 kip",

    },
  ];

  return (
    <div className="app" >
      {productDetail.map((element, index) => (
        <ProductComp
          index = {index + 1}
          productImg={element.img}
          productTitle={element.title}
          productDesc={element.description}
          productPrice={element.price}
        ></ProductComp>
      ))}

      <hr></hr>
      <FunctionalCounter></FunctionalCounter>
      <hr></hr>
      <ClassCounter></ClassCounter>
      <hr></hr>
      <BlogPost
        title={title}
        content={content}
      ></BlogPost>
      <hr></hr>

      <style jsx>
        {`
          .app {  
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }    
            .counter {
            margin: 20px 0;
            padding: 20px;
            border 1px; solid #ddd;
            border-align: 8px;
            background-color: #c3f7e4;
            }


            button {
            padding: 10px; 30px;
            margin: 1px;
            font-size: 16px;
            background-color: #588583;
            color: white;
            border: none;
            border:-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            }
            .add-btn {
              background-color: #edc99a;
            }
            .del-btn {
            background-color: #faa6a5;
            }
            .product-card {
            margin: 20px 0;
            padding: 20px;
            border 1px; solid #ddd;
            border-align: 8px;
            background-color: #c3f7e4;
            }
            .productImg {

            }
      `}
      </style>
    </div>
  );
};

export default Day2;
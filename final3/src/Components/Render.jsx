import React, { useEffect, useState } from "react";

function ListProduct() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      count: 0,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },
    {
      id: 2,
      title: "Fanta",
      price: 5,
      count: 0,
      image:
        "https://www.coca-cola.com.tr/content/dam/one/tr/tr/product-images/fanta-portakal_product_image.png",
    },
    {
      id: 3,
      title: "Sprite",
      price: 5,
      count: 0,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      title: "Ayran",
      price: 3,
      count: 0,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      title: "Salgam",
      price: 4,
      count: 0,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 6,
      title: "Cay",
      price: 3,
      count: 0,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 7,
      title: "Kahve",
      price: 10,
      count: 0,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 8,
      title: "Soda",
      price: 4,
      count: 0,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 9,
      title: "Bisiklet",
      price: 1000,
      count: 0,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },
    {
      id: 10,
      title: "Lüx Kol Saati",
      price: 25000,
      count: 0,
      image:
        "https://www.dogansaatcilik.com.tr/ProductImages/118687/big/seiko-ssc719p-erkek-kol-saati__0296960735052182.jpg",
    },
    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      count: 0,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 12,
      title: "Iskender",
      price: 50,
      count: 0,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12,
      count: 0,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 14,
      title: "Malikane",
      price: 2500000000,
      count: 0,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750000,
      count: 0,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      count: 0,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      count: 0,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 18,
      title: "Ada",
      price: 125000000,
      count: 0,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 22,
      title: "Stadium",
      price: 2500000,
      count: 0,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      id: 23,
      title: "Bitcoin",
      price: 60000,
      count: 0,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
    {
      id: 19,
      title: "Messi Tshirt",
      price: 250,
      count: 0,
      image:
        "https://st2.myideasoft.com/idea/fr/55/myassets/products/366/paris-saint-germain-cup-away-stadium-shirt-2021-22-kids-with-messi-30-printing-ss4-p-12087703-u-6v44pc9ht2ynaiyuv5uk-v-af3dfad2f9b44448a3068821419095db_min.jpg?revision=1628627354",
    },
  ]);
  const [cart, setCart] = useState([]);

  const handleBuyClick = (index) => {
    const newCart = [...cart];
    const selectedProduct = products[index];
    const productInCartIndex = newCart.findIndex(
      (product) => product.id === selectedProduct.id
    );
    if (productInCartIndex !== -1) {
      newCart[productInCartIndex].count++;
    } else {
      newCart.push({ ...selectedProduct, count: 1 });
    }
    setCart(newCart);
    // Tính tổng giá tiền của các sản phẩm đã mua
    const totalPrice = products.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    // Trừ giá trị totalPrice từ giá trị hiện tại của budget
    setBudget((prevBudget) => prevBudget - totalPrice);

    const newProducts = [...products];
    newProducts[index].count++;
    setProducts(newProducts);
  };

  const handleMinusClick = (index) => {
    // Tạo một bản sao mới của giỏ hàng và sản phẩm được chọn
    const newCart = [...cart];
    const selectedProduct = products[index];

    // Tìm kiếm sản phẩm đã chọn trong giỏ hàng
    const productInCartIndex = newCart.findIndex(
      (product) => product.id === selectedProduct.id
    );

    // Nếu sản phẩm đã có trong giỏ hàng và số lượng lớn hơn 0
    if (productInCartIndex !== -1 && newCart[productInCartIndex].count > 0) {
      // Giảm số lượng sản phẩm đi 1
      newCart[productInCartIndex].count--;

      // Cập nhật lại giỏ hàng và danh sách sản phẩm với số lượng mới
      setCart(newCart);
      const newProducts = [...products];
      newProducts[index].count--;
      setProducts(newProducts);

      // Tính tổng giá trị các sản phẩm đã mua và cập nhật lại giá trị của budget
      const totalPrice = products.reduce(
        (acc, product) => acc + product.price * product.count,
        0
      );
      setBudget((prevBudget) => prevBudget + totalPrice);
    }
  };

  const [budget, setBudget] = useState(1000000000000);
  const handleResetCart = () => {
    setCart([]);
    setBudget(1000000000000);
  };
  return (
    <>
      <header>
        <div className="navbar-content">
          <p className="TextMoney">
            To Spend{" "}
            {budget.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
            You have a lot of Moneyyyy!
          </p>
        </div>
      </header>
      <div className="container">
        {products.map((products, index) => (
          <div className="element">
            <img src={products.image} alt="Product" />
            <p>ID: {products.id}</p>
            <p id="name">{products.title}</p>
            <p id="name">Price: ${products.price}</p>
            <span id="price">Total: ${products.price * products.count}</span>
            <div className="buyAndSellContainer">
              <button
                className="btn-sell"
                id="sell"
                onClick={() => handleMinusClick(index)}
              >
                Sell
              </button>
              <span id="amount">{products.count}</span>
              <button
                className="btn-buy"
                id="buy"
                onClick={() => handleBuyClick(index)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1>Cart</h1>
      <table className="textMoney">
        <thead>
          <tr>
            <td>ID</td>
            <td>Tên</td>
            <td>Số lượng</td>
            <td>Giá</td>
            <td>Thành tiền</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <button
                  onClick={() => {
                    const newCart = [...cart];
                    const selectedProduct = newCart[index];
                    if (selectedProduct.count > 1) {
                      selectedProduct.count--;
                    } else {
                      newCart.splice(index, 1);
                    }
                    setCart(newCart);
                  }}
                >
                  -
                </button>
                {product.count}
                <button
                  onClick={() => {
                    const newCart = [...cart];
                    const selectedProduct = newCart[index];
                    selectedProduct.count++;
                    setCart(newCart);
                  }}
                >
                  +
                </button>
              </td>
              <td>${product.price}</td>
              <td>${product.price * product.count}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "center" }}>Tổng tiền:</td>
            <td colspan="4">
              {cart.reduce(
                (accumulator, currentProduct) =>
                  accumulator + currentProduct.price * currentProduct.count,
                0
              )}{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleResetCart}>Reset Cart</button>
    </>
  );
}

export default ListProduct;

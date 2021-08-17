import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./../contexts/cart";
import { CreateProductContext } from "./../contexts/createProduct";
import { LoginContext } from "./../contexts/login";
import { ItemCartContext } from "./../contexts/productDetails";
import axios from "axios";
import "./cart.css";
import { useHistory } from "react-router-dom";
import plusIcon from "./plus.png"
import minusIcon from "./minus.png"
import deleteIcon from "./delete.png"

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const loginContext = useContext(LoginContext);
    const itemCartContext = useContext(ItemCartContext);
    const [total, setTotal] = useState(0);

    const found = cartContext.showData.filter((elem) => {
        return elem.userId === loginContext.userIdLoggedIn;
    });

    const find = found.filter((elem, i) => {
        return elem.userId === loginContext.userIdLoggedIn;
    });

    const findA = find.map((elem) => {
        return elem.product[0];
    });
  const buyCart = () => { };

    return (
        <>
            <div className="checkout">
                {findA.map((elem) => {
                    return (
                        <ProductItem
                            findA={findA}
                            elem={elem}
                            find={find}
                            total={total}
                            setTotal={setTotal}
                        />
                    );
                })}
                <p className="total">Total :{total}</p>
                <p className="buy-button">
                    Buy
                </p>
            </div>
        </>
    );
};
const ProductItem = ({ elem, find, total, setTotal, findA }) => {
    const [qunat, setQunat] = useState(0);
    const itemCartContext = useContext(ItemCartContext);
    const cartContext = useContext(CartContext);
    const [subTotal, setSubTotal] = useState(elem.price * qunat);
    const [oldQuantity, setOldQuantity] = useState(0)


    useEffect(() => {
        let priceElem = findA.reduce(function (acc, elem, i) {
            return acc + elem.price
        }, 0)
        setTotal(priceElem)
    }, []);

    useEffect(() => {
        if (oldQuantity <= qunat) {
            setTotal(total + subTotal)
        } else {
            let x = oldQuantity * elem.price
            setTotal(total - x)
            setTotal(total - subTotal)
        }
        setOldQuantity(qunat)
  const increase = (price) => {
    if (qunat < elem.quantity) {
      setQunat(qunat + 1);
    }
    setSubTotal(price);
  };
  const decrease = (price) => {
    console.log(qunat);
    if (qunat > 0) {
      setQunat(qunat - 1);
    }
    setSubTotal(-price);
  };
<<<<<<< HEAD
  const history = useHistory();
  const deleteItem = (id) => {
    const found = find.filter((elem) => {
      return elem.product[0]._id == id;
    });
    axios
      .delete("http://localhost:5000/show/cart/deleted", {
        data: { id: found[0]._id },
      })
      .then((result) => {})
      .catch((err) => {
        throw err;
      });
  };
  return (
    <>
      <div className="cart-per-item-body" key={elem._id}>
      <img className="product-img" src={elem.image}></img>
        <div>
          <p>{elem.title} </p>
          <p>In Stock : {elem.quantity}</p>
          <p>Cost Per Unit {elem.price}</p>
        </div>
        <div>
          <div className="quantity-controler">
            <img
              src={plusIcon}
              onClick={() => {
                increase(elem.price);
              }}
            />
          </div>
          <p>Item Quantity: {qunat}</p>
          <div className="quantity-controler">
            <img
              src={minusIcon}
              onClick={() => {
                decrease(elem.price);
              }}
            />
          </div>
        </div>
        <div  className="delete-button">
        <img src={deleteIcon}   onClick={(e) => {
=======

    }, [qunat]);

    const increase = (price) => {
        if (qunat < elem.quantity) {
            setQunat(qunat + 1);
        }
        setSubTotal(price);
    };
    const decrease = (price) => {
        if (elem.quantity > 0) {
            if (qunat > 0) {
                setQunat(qunat - 1)
            }
        }
    }

    const deleteItem = (id) => {
        const found = find.filter((elem) => {
            return elem.product[0]._id == id;
        });
        axios
            .delete("http://localhost:5000/show/cart/deleted", {
                data: { id: found[0]._id },
            })
            .then((result) => {
                console.log(result.data);
            })
            .catch((err) => {
                throw err;
            });
        setTotal(total - (elem.price * qunat))
        cartContext.showCart()
    };

    return (
        <>
            <div className="cart-per-item-body" key={elem._id}>
                <img className="product-img" src={elem.image}></img>
                <div>
                    <p>{elem.title} </p>
                    <p>In Stock : {elem.quantity}</p>
                    <p>Cost Per Unit {elem.price}</p>
                </div>
                <div>
                    <div className="quantity-controler">
                        <img src={plusIcon} onClick={() => {
                            increase(elem.price);
                        }} /></div>
                    {/* <button
            className="quantity-controler"
            onClick={() => {
              increase(elem.price);
            }}
          >
            +
          </button> */}
                    <p>Item Quantity: {qunat}</p>
                    <div className="quantity-controler">
                        <img src={minusIcon} onClick={() => {
                            decrease(elem.price);
                        }} /></div>
                    {/* <button
            className="quantity-controler"
            onClick={() => {
              decrease(elem.price);
            }}
          >
            -
          </button> */}
                </div>
                <div className="delete-button">
                    <img src={deleteIcon} onClick={(e) => {
                        deleteItem(elem._id);
                    }} />
                    {/* <button
            className="delete-button"
            onClick={(e) => {
>>>>>>> cb55ab18b3057bf45dbf1c872dc31364aa271220
              deleteItem(elem._id);
            }}
          >
            Delete
          </button> */}
                </div>
                <p>Total Cost : {elem.price * qunat}</p>
            </div>
        </>
    );
};
export default Cart;

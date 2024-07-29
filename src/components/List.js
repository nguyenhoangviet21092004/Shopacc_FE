import axios from "axios";
import { useEffect, useState } from "react";
import HeaderUser from "../layout/HeaderUser";
import ContentUser from "../layout/ContentUser";
import FooterUser from "../layout/FooterUser";
import { ImFire } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

function List() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    async function getAll() {
        const respone = await axios.get('http://localhost:8080/api/shopacc')
        setProducts(respone.data.content);
    }

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function onclick() {
        navigate('/detail')
    }

    useEffect(() => {
        getAll();
    }, [])

    return (<>
        <body>
            <div>
                <HeaderUser />
            </div>

            <div className="content">
                <div className="div-list">
                    <div className="div-list-boder">
                        {products.map((item) => (
                            <Link to={`/detail/${item.id}`} className="link">
                                <div className="div-1-list">
                                    <div className="image-view">

                                        <img width="100%" height="200px" src={item.image} onclick={onclick}></img>

                                    </div>
                                    <hr></hr>
                                    <div className="price-view" >
                                        <span>{formatPrice(item.price)} đ
                                        </span>
                                    </div>
                                    <div className="detail-view">
                                        <div className="detail">
                                            Tướng:  <span>{item.general}</span>
                                        </div>
                                        <div className="detail">
                                            Trang phục: <span>{item.skin}</span>

                                        </div>
                                        <div className="detail">
                                            Rank:   <span>{item.ranks}</span>

                                        </div>

                                    </div>


                                    <div className="description-view">
                                        <span><ImFire className="fire" />{item.description}</span>
                                    </div>

                                </div>
                            </Link>

                        ))
                        }
                    </div>
                </div>

            </div>

            <div>
                <FooterUser />
            </div>
        </body >

    </>)
}

export default List;
import { useParams } from "react-router-dom";
import FooterUser from "../layout/FooterUser";
import HeaderUser from "../layout/HeaderUser";
import axios from "axios";
import { useEffect, useState } from "react";


function Detail() {

    const params = useParams();
    const [products, setProduct] = useState([]);

    const [description, setDescription] = useState();
    const [detail, setDetail] = useState();
    const [price, setPrice] = useState();
    const [general, setGeneral] = useState();
    const [rank, setRank] = useState();
    const [skin, setSkin] = useState();
    const [image, setImage] = useState();
    const [nameGame, setNameGame] = useState();
    const [status, setStatus] = useState();


    const a = Number(products.price);
    const formattedNumber = a.toLocaleString();

    async function findById() {
        const respone = await axios.get(`http://localhost:8080/api/shopacc/${params.id}`)
        setProduct(respone.data);
        setPrice(respone.data.price)
        setImage(respone.data.image)
        setNameGame(respone.data.nameGame)
        setDescription(respone.data.description)
        setDetail(respone.data.detail)
        setGeneral(respone.data.general)
        setRank(respone.data.ranks)
        setSkin(respone.data.skin)
        setStatus(respone.data.status)

    }

    useEffect(() => {
        findById();
    }, [])
    return (
        <>
            <div>
                <HeaderUser />
            </div>
            <div className="content-detail">

                <div className="content-detail-1 row">

                    <div className="detail-image">
                        <img width="100%" height="250" src={image}></img>
                    </div>

                    <div className="detail-content">
                        <div className="game"> Trò chơi :   <span>{nameGame}</span></div><br></br>
                        <div> <span>{description}</span></div>
                        <div> <span className="price">{formattedNumber}</span>đ<br /> </div>
                        <div><span className="gen"> {general}</span></div>
                        <div> <span className="skin">{skin}</span><br /> </div>
                        <div> <span className="rank">{rank}</span><br /> </div>
                        <div> <span className="status">{status}</span><br /></div>


                    </div>
                </div>



                <div className="content-detail-2">

                </div>
            </div>
            <div>
                <FooterUser />
            </div>

        </>
    )
}

export default Detail;
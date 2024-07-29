import { useParams } from "react-router-dom";
import FooterUser from "../layout/FooterUser";
import HeaderUser from "../layout/HeaderUser";
import axios from "axios";
import { useEffect, useState } from "react";


function Detail() {

    const params = useParams();
    const [products, setProduct] = useState([]);

    const [description,setDescription] = useState();
    const [detail,setDetail] = useState();
    const [price,setPrice] = useState();
    const [general,setGeneral] = useState();
    const [rank,setRank] = useState();
    const [skin,setSkin] = useState();


    async function findById() {
        const respone = await axios.get(`http://localhost:8080/api/shopacc/${params.id}`)
        setProduct(respone.data);
        setPrice(respone.data.price)

    }

    useEffect(() => {
        findById();
    },[])
    return (
        <>
            <div>
                <HeaderUser />
            </div>
            <div className="content-detail">

                <div className="content-detail-1">

                    <div className="detail-image">
                        <img width="100%" height="250" src="https://s3-hcm-r1.s3cloud.vn/static/2bDVWL6kIKHsW5M.png"></img>
                    </div>

                    <div className="detail-content">
                        <span>{price}</span>
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
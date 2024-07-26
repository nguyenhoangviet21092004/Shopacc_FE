import "../css/contentUser.css"
import React from "react"
import { ImFire } from "react-icons/im";
import { GiRoundStar } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ContentUser() {

    const navigate = useNavigate();


    async function ListProduct() {

        navigate('/list')
    }

    return (
        <>
            <div className="content">

                <div className="div-content1">

                    <div className="div1-content">

                        <span className="su-kien" ><ImFire className="fire" /> Siêu Sự Kiện Tháng 6 </span>

                        <span className="chao-he">: Chào Hè, Đón Sale - Tài Khoản </span>
                        <span className="ngon">Ngon</span>

                        <span className="giam-gia">, Giảm Giá</span>
                        <span className="soc"> Shock</span>
                    </div>


                </div>

                <div className="div-content2">
                    <div className="image-content">
                        <img className="i" src="https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg" width="650px" height="300px" alt="5I5g2YSPiTsiOJ2.jpeg" loading="eager" data-nuxt-img="" class="ws-select-none ws-rounded-lg ws-w-full !ws-h-[12rem] lg:!ws-h-[19.3rem] !ws-rounded-lg" sizes="(max-width: 320px) 1000px, (max-width: 640px) 300px, (max-width: 768px) 600px, 800px" srcset="https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 300w, https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 600w, https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 800w, https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 1000w, https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 1200w, https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 1600w, https://s3-hcm-r1.s3cloud.vn/static/5I5g2YSPiTsiOJ2.jpeg 2000w" />
                    </div>

                    <div className="image-content2">
                        <img className="i" width="300px" height="140px" src="https://s3-hcm-r1.s3cloud.vn/static/5jjbWxxwVo6qQdz.png" />
                    </div>

                    <div className="image-content3">
                        <img className="i" width="300px" height="140px" src="https://s3-hcm-r1.s3cloud.vn/static/Psk55rRCRESFuvy.png" />

                    </div>

                </div>

                <div className="div-content3">
                    <div className="content3-1">
                        <div className="content3-1-image">
                            <GiRoundStar className="star" />
                            <span>Tài Khoản Liên Quân Tuỳ Chọn</span>
                        </div>

                        <div className="content3-1-word">
                            <span>Với hàng ngàn tài khoản Liên Quân ngon, giá cả hợp lý - Là sự lựa chọn phù hợp cho bạn.</span>
                        </div>

                    </div>

                    <div className="content3-2">
                        <div className="content3-2-div1">
                            <div className="img-content-3">
                                <img width="98%" height="60%" onClick={ListProduct} src="https://s3-hcm-r1.s3cloud.vn/static/asjiZhMmDVCBTSU.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >Siêu Giảm Giá Hàng Ngày</span>

                            </div>

                            <div className="note-content-3">
                                <span >Mỗi Ngày Một Cơ Hội Sở Hữu Tài Khoản Giảm Giá Sốc</span>

                            </div>

                        </div>
                        <div className="content3-2-div2">
                            <div className="img-content-3">
                                <img width="98%" height="60%" src="https://s3-hcm-r1.s3cloud.vn/static/upT03HZcrnpNF15.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >Tài Khoản Liên Quân Sale Dưới 200k</span>

                            </div>

                            <div className="note-content-3">
                                <span >Tài Khoản Tự Chọn Dưới 200k</span>

                            </div>
                        </div>
                        <div className="content3-2-div3">
                            <div className="img-content-3">
                                <img width="98%" height="60%" src="https://s3-hcm-r1.s3cloud.vn/static/5iYV1ZjzwNZep1U.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >TTài Khoản Liên Quân Sale 200k-500k</span>

                            </div>

                            <div className="note-content-3">
                                <span >Tài khoản Tự Chọn Từ 200k-500k</span>

                            </div>
                        </div>
                        <div className="content3-2-div4">
                            <div className="img-content-3">
                                <img width="98%" height="60%" src="https://s3-hcm-r1.s3cloud.vn/static/4zF3SYd3kqlvxcq.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >Tài Khoản Liên Quân Sale 500k-1Tr</span>

                            </div>

                            <div className="note-content-3">
                                <span >Tài Khoản Tự Chọn Từ 500k đến 1Tr</span>

                            </div>
                        </div>
                        <div className="content3-2-div5">
                            <div className="img-content-3">
                                <img width="98%" height="60%" src="https://s3-hcm-r1.s3cloud.vn/static/O9QqydjQ5vocDri.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >Tài Khoản Liên Quân Sale 1Tr-5Tr</span>

                            </div>

                            <div className="note-content-3">
                                <span>Tài Khoản Tự Chọn Từ 1Tr-5Tr</span>

                            </div>
                        </div>
                        <div className="content3-2-div6">
                            <div className="img-content-3">
                                <img width="98%" height="60%" src="https://s3-hcm-r1.s3cloud.vn/static/wpmkTAVGTErn63x.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >Tài Khoản Liên Quân Siêu Vip</span>

                            </div>

                            <div className="note-content-3">
                                <span >Tài Khoản Siêu Vip Trên 5Tr</span>

                            </div>
                        </div>

                        <div className="content3-2-div7">
                            <div className="img-content-3">
                                <img width="98%" height="60%" src="https://s3-hcm-r1.s3cloud.vn/static/upT03HZcrnpNF15.png"></img>
                            </div>
                            <div className="note-content-3-1">
                                <span >Tài Khoản Liên Quân Reg</span>

                            </div>

                            <div className="note-content-3">
                                <span >Tài Khoản Reg - OneChamp</span>

                            </div>
                        </div>


                    </div>



                </div>



            </div>
        </>
    )
}

export default ContentUser;


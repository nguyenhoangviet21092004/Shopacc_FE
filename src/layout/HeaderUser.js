import React from "react";
import "../css/headerUser.css"
import { IoGameController } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { TbAlignBoxRightTopFilled } from "react-icons/tb";



function HeaderUser() {

    return (
        <>
            <div className="header">

                <div className="header1">


                    <div >
                        <div className="logo-game">
                            <IoGameController />
                        </div>
                        <div className="div1">

                            <div className="hang-ngan">
                                <span className="one">Hàng ngàn</span>
                            </div>
                            <div className="tai-khoan">
                                <span className="two">tài khoản </span>
                            </div>
                            <div className="lien-quan">
                                <span className="three"> Liên Quân</span>
                            </div>

                            <span className="ke"> |</span>
                        </div>

                        <div className="box">

                            <TbAlignBoxRightTopFilled />

                        </div>


                        <div className="div2">
                            <div className="hang-ngan">
                                <span className="one">Săn sale</span>
                            </div>
                            <div className="tai-khoan">
                                <span className="two">tài khoản</span>
                            </div>
                            <div className="lien-quan">
                                <span className="three">hăng ngày</span>
                            </div>


                        </div>

                        <span className="ke"> |</span>


                        <div className="like">
                            <AiTwotoneLike />
                        </div>
                        <div className="div3">

                            <div className="hang-ngan">
                                <span className="one">Uy tín - </span>
                            </div>
                            <div className="tai-khoan">
                                <span className="three">Giá tốt</span>
                            </div>
                            <div className="lien-quan">
                                <span className="two">Nhất thị trường</span>
                            </div>
                        </div>



                    </div>

                </div>

                <hr className="hr"></hr>

                <div className="header2">
                    <div className="header3">

                        <div className="logo">
                            <img src="https://s3-hcm-r1.s3cloud.vn/static/image-6a298fbe-7b86-4831-a9ed-87c5143d9fda.png" class="ws-h-12" alt="https://tngshop.vn" width="130px" />
                        </div>


                        <div className="search">

                            <input className="input-search" placeholder="  Nhập tìm kiếm..." />
                            <button className="button-search" >Tìm kiếm</button>


                        </div>
                        <div className="money">
                            <button className="button-money">
                                <div>
                                    <MdOutlineAttachMoney />
                                    <span>Nạp tiền</span>
                                </div>


                            </button>
                        </div>

                        <div className="bell">
                            <FaRegBell />

                        </div>

                        <div className="person">
                            <FaUserLarge />
                        </div>

                        <div className="user">
                            <button className="signin">
                                Đăng nhập /
                            </button>
                            <button className="signup">
                                Đăng kí
                            </button>
                        </div>

                    </div>

                </div>


            </div>




        </>
    )

}
export default HeaderUser;
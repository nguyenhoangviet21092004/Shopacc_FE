import "../css/footerUser.css"
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";




function FooterUser() {
    return (
        <>
            <div className="footer">

                <div className="footer1">
                    {/* <span className="sp">Hỗ trợ các phương thức nạp:
                    </span> */}

                    <div className="atm1">

                    </div>

                    <div className="atm2">

                    </div>

                    <div className="atm3">

                    </div>
                </div>


                <div className="footer2">
                    <div className="footer2-one">
                        <div className="icon-footer">
                            <FaShoppingBag />
                        </div>

                        <div className="note-footer">
                            <span>Sản phẩm, dịch vụ đa dạng, cập nhật liên tục.</span>
                        </div>


                    </div>
                    <div className="footer2-two">
                        <div className="icon-footer">
                            <IoShieldCheckmark />
                        </div>

                        <div className="note-footer">
                            <span>Hàng ngàn khách hàng tin tưởng, ủng hộ.</span>
                        </div>

                    </div>
                    <div className="footer2-three">
                        <div className="icon-footer">
                            <FaPhoneVolume />
                        </div>

                        <div className="note-footer">
                            <span>Trung tâm hỗ trợ nhanh chóng, tận tình 24/7.</span>
                        </div>

                    </div>
                    <div className="footer2-four">
                        <div className="icon-footer">
                            <AiFillLike />
                        </div>

                        <div className="note-footer">
                            <span>Giá rẻ, uy tín, chất lượng nhất thị trường.</span>
                        </div>

                    </div>
                </div>

                <div className="footer3">


                    <div class="ws-text-white ws-py-10">
                        <div className="footer-one">
                            <div className="footer-one-logo">
                                <img src="https://s3-hcm-r1.s3cloud.vn/static/image-6a298fbe-7b86-4831-a9ed-87c5143d9fda.png" width="150" />
                            </div>

                            <div className="footer-one-1">
                                <span>Shop acc game liên quân uy tín giá rẻ, bảo hành trọn đời, nhiều minigame event hấp dẫn, rút quân huy tự động, hỗ trợ 24/24.</span>
                            </div>

                            <div className="footer-one-2">
                                <span>HỆ THỐNG BÁN ACC TỰ ĐỘNG ĐẢM BẢO UY TÍN VÀ CHẤT LƯỢNG.</span>
                            </div>

                            <div className="footer-one-3">
                                <span>Chúng tôi luôn lấy uy tín đặt trên hàng đầu đối với khách hàng, hy vọng chúng tôi sẽ được phục vụ các bạn. Cám ơn!</span>
                            </div>

                            <div className="footer-one-4">
                                <span>Privacy Policy</span>
                            </div>

                            <div className="footer-one-5">
                                <span>Terms of Service</span>
                            </div>
                        </div>
                        <div className="footer-two">
                            <div className="footer-two-1">
                                <span> THÔNG TIN CHUNG</span>
                            </div>

                            <div className="footer-two-2">
                                <div className="v"> Về chúng tôi</div>
                                <div className="v"> Chính sách bán hàng</div>
                                <div className="v"> Chính sách đổi trả</div>
                                <div className="v"> Hướng dẫn nạp tiền</div>
                            </div>


                            <div className="footer-two-3">
                                <span>THỜI GIAN HỖ TRỢ:</span>

                            </div>

                            <div className="footer-two-4">
                                <span>Sáng: 8h00 - 11h30 | Chiều: 13h00 - 21h00</span>

                            </div>


                        </div>
                        <div className="footer-three">
                            <div className="footer-three-1">
                                <span>SẢN PHẨM</span>
                            </div>

                            <div className="footer-three-2">
                                <div className="v">Sale Liên Quân Tháng 5</div>
                                <div className="v">Thử Vận May Tài Khoản</div>
                                <div className="v">Siêu Giảm Giá Hàng Ngày</div>
                                <div className="v">Tài Khoản Sale Dưới 200k</div>
                                <div className="v">Tài Khoản Sale 200k-500k</div>
                            </div>

                        </div>
                        <div className="footer-four">
                            <div className="footer-four-1">
                                <span>HỖ TRỢ KHÁCH HÀNG</span>
                            </div>

                            <div className="footer-four-2">

                            </div>

                        </div>


                        <div className="footer-five">
                            <span>
                                © Copyright 2023

                            </span>
                            <span>
                                Operated by https://tngshop.vn, All Rights Reserved

                            </span>

                        </div>




                    </div>





                </div>
            </div>


        </>
    )

}
export default FooterUser;
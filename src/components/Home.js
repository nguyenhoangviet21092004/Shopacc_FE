import React, { useEffect, useState } from "react";
import HeaderUser from "../layout/HeaderUser";
import FooterUser from "../layout/FooterUser";
import ContentUser from "../layout/ContentUser";
import axios from "axios";

function Home() {

   
    return (
        <>
            <body>
                <div>
                    <HeaderUser />
                </div>

                <div>
                    <ContentUser />

                </div>

                <div>
                    <FooterUser />
                </div>
            </body>
        </>
    )

}
export default Home;
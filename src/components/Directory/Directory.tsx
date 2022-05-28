import React from "react";
import ShopMen from "../../assets/ShopMen.png"
import ShopWomen from "../../assets/ShopWomen.png"
import * as S from './styles'

const Directory = () => {
    return (
        <S.Directory>
            <div className='wrap'>
                    <div className='item' style={{backgroundImage: `url(${ShopWomen})`}}>
                            <a>Shop Womens</a>
                    </div>
                    <div className='item' style={{backgroundImage: `url(${ShopMen})`}}>
                            <a>Shop Mens</a>
                    </div>
            </div>
        </S.Directory>
    )
}

export default Directory;
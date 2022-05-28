import styled from "styled-components";

export const Directory = styled.main`
    height: 100%;

    .wrap {
        display: inline-block;
        width: 100%;
        height: 100%;
    
        .item {
            position: relative;
            width: 50%;
            height: 100%;
            float: left;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

        .item:after {
            content: '';
            position: absolute;
            top: 0; left: 0;
            background: rgba(0, 0, 0, 0.3);
            width: 100%;
            height: 100%;
            z-index: 1;
        }    

        a {
            position: absolute;
            top:50%; left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            z-index: 2;
            font-size: 2rem;
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;
            color: black;
            background: white;
            padding: 10px 15px;
            border: 1px solid black;
        
            &:hover {
            background: rgba(255,255,255,1);
            }
        }
    }
}
`
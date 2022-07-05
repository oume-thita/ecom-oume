import styled from "styled-components";

export const Header = styled.header`
    height: 6.5rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`

export const Wrap = styled.div`
    position: relative;
    height: 100%;
    max-width: 1450px;
    margin: 0 auto;

    .callToActions {
        position: absolute;
        top: 50%; right: 10px;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);

        ul,li {
            margin: 0;
            padding: 0;
        }

        li {
            display: inline-block;
           list-style-type : none;
           margin-right: 1.5rem;

           &:last-child {
               margin-right: 0;
           }

           a {
               font-size: 1.8rem;
               line-height: 1;
               color: black;
               text-decoration: none;
               text-transform: uppercase;
           }
        }
    }
`

export const Logo = styled.div`
    width: 12.0rem;
    position: absolute;
    top: 50%; left: 10px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
`

export const Image = styled.img`
  display: block;
  width: 80%;
  margin-right: 10%;
`;
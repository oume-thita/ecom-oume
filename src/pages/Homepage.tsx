import React from "react";
import styled from "styled-components";
import Directory from "../components/Directory/Directory";


const HomePage = () => {
    return (
        <Wrapper>
            <Directory />
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = styled.div`
    height: calc(100% - 6.5rem - 5.8rem);
`
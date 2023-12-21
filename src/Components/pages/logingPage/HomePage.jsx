import LogingForm from "./LogingForm";
import styled from "styled-components";
import bgburger from "/images/burger-background.jpg";
import Logo from "../../reusable-ui/logo/Logo";

export default function HomePage() {
    return (
        <HomePageStyled>
            <Logo size="home" />
            <LogingForm />
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: url("${bgburger}") rgba(0, 0, 0, 0.5) center / cover;
    background-blend-mode: darken;
    gap: 40px;
`;
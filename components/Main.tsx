import { FunctionComponent } from "react";
import Container from "./layout/Container";

const Main: FunctionComponent = () => {
    return (
        <>
            <style jsx>{`
                main {
                    padding: 40px;
                }
                h1,h4 {
                    text-align: center;
                }
            `}</style>
            <Container 
                tagName="main"
                width="600px" 
                padding="40px"
                id="headline" 
                gap="16px"
            >
                <h1>Designed With next.JS</h1>
                <h4>Gets your system default and saves you theme choice in localStorage</h4>
            </Container>
        </>
    )
}

export default Main
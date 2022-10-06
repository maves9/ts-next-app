import { FunctionComponent } from "react";
import Container from "./layout/Container";

const Main: FunctionComponent = () => {
    return (
        <>
            <style jsx>{`
                main {
                    flex: 1;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                h1, h4 {
                    text-align: center;
                }
                h1 {
                    font-size: 68px;
                }
            `}</style>

            <main>
                <h1>Designed With Next.JS</h1>
                <h4>Gets your system default and saves your theme choice in the cookie storage</h4>
            </main>
        </>
    )
}

export default Main
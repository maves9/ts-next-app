import { FunctionComponent } from "react"
import Main from "./Main"
import Top from "./Top"
import Footer from "./Footer"

const Body: FunctionComponent = () => {
    return (
        <>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                }
            `}</style>

            <div>
                <Top />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default Body
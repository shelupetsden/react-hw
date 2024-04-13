import MainSecondBlock from "../components/MainSecondBlock";
import Layout from "../common/Layout";
import MainFirstBlock from "../components/MainFirstBlock";

const Home = () => {
    return (
        <Layout>
            <div>
                <MainFirstBlock type="home"/>
                <MainSecondBlock/>
            </div>
        </Layout>
    );
}

export default Home;
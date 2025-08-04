import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="title" content="ICBDCC – International Conference on Big-Data and Cloud Computing" />
            <meta name="description" content="Join ICBDCC, the International Conference on Big Data and Cloud Computing, to explore the latest research, trends, and innovations in big data analytics and cloud technologies." />
            <meta name="keywords" content="ICBDCC, Big Data, Cloud Computing, AI Conference, Smart Cities, Federated Learning, Cognitive Systems, Sustainable Technology, Research Conference, Call for Papers" />
            <meta name="author" content="ICBDCC Organizing Committee" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://icbdcc.com/" />
            <meta property="og:title" content="ICBDCC – International Conference on Big-Data and Cloud Computing" />
            <meta property="og:description" content="Join ICBDCC, the International Conference on Big Data and Cloud Computing, to explore the latest research, trends, and innovations in big data analytics and cloud technologies." />
            <meta property="og:image" content="https://icbdcc.com/assets/Images/ICBDCC.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://www.ijatra.com/assets/Images/Favicon.png" />
        </Helmet>
    );
};

export default HelmetComponent;

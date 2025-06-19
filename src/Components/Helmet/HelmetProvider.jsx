import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Journal of Advanced Trends in Robotics and Automation, IJATRA, Robotics research journals, Automation research journal, Advanced robotics journal, Robotics and automation studies" />
            <meta name="description" content="The International Journal of Advanced Trends in Robotics and Automation (IJATRA) publishes high-quality research in robotics, automation, AI, and advanced engineering fields." />
            <meta name="author" content="IJATRA Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Journal of Advanced Trends in Robotics and Automation (IJATRA)" />
            <meta property="og:description" content="The International Journal of Advanced Trends in Robotics and Automation (IJATRA) publishes high-quality research in robotics, automation, AI, and advanced engineering fields." />
            <meta property="og:url" content="https://www.ijatra.com/" />
            <meta property="og:image" content="https://www.ijatra.com/assets/Images/IJATRA.png" />
            <link rel="canonical" href="https://www.ijatra.com/" />
            <link rel="icon" type="image/png" href="https://www.ijatra.com/assets/Images/Favicon.png" />
        </Helmet>
    );
};

export default HelmetComponent;

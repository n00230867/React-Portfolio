import { useLocation } from "react-router-dom";

const PageNotFound = () => {
    const location = useLocation();

    //console.log(location);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page at '{location.pathname}' does not exist.</p>
        </div>
    );
};

export default PageNotFound;
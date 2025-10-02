import { useNavigate } from "react-router-dom";

const NavigationExample = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <h1>Hello from Navigation Example Page</h1>
            <button onClick={handleClick}>Click to Navigate</button>
        </>
    );
};

export default NavigationExample;
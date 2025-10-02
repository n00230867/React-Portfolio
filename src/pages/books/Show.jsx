import { useParams } from "react-router-dom";

const Show = () => {
    let { id, someOtherParam } = useParams();

    return (
        <h1>Hello from books / Show page, the book you are looking at is book {id}, and {someOtherParam}</h1>
    );
};

export default Show;
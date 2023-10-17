import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl">Error!! Page not found</h2>
            <Link to="/"><button className="btn btn-warning">Home</button></Link>
        </div>
    );
};

export default ErrorPage;
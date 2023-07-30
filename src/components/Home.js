import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateAboutButtonClick = () =>{
        // navigate('/about'); // pushing route on stack
        navigate('/about',{replace : true}); // Push route and replace history
    }

    return (
        <div>
            <div>Home Page</div>
            <button onClick={handleNavigateAboutButtonClick}>Navigate to About Page</button>
        </div>
    );
};

export default Home;

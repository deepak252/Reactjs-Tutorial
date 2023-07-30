import {useNavigate} from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () =>{
        navigate(-1);
    }

    return (
        <div>
            <div>About Page</div>
            <button onClick={handleBackButtonClick}>Back</button>
        </div>
    );
}

export default About
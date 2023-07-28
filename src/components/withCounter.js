import { useState, Component} from "react";

// Higher Order Component
const withCounter=(WrappedComponent)=> {
    
    // class NewComponent extends Component{
    //     const [count, setCount] = useState(0);
    //     const incrementCount = () => {
    //         setCount((val) => val + 1);
    //     };
    //     render(){
    //         return <OriginalComponent name = "Deepak"/>
    //     }
    // }

    const WithCounter = (props)=>{
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount((val) => val + 1);
        };

        return <WrappedComponent count={count} incrementCount={incrementCount} />
    }

    return WithCounter
}

export default withCounter;

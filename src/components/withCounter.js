import { useState, Component} from "react";

// Higher Order Component
const withCounter=(WrappedComponent, incrementNumber=1)=> (props)=>{
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount((val) => val + incrementNumber);
        };
        return <WrappedComponent count={count} incrementCount={incrementCount} {...props}/>
}
//// 2.
// const withCounter=(WrappedComponent)=> {
//     const WithCounter = (props)=>{
//         const [count, setCount] = useState(0);
//         const incrementCount = () => {
//             setCount((val) => val + 1);
//         };
//         return <WrappedComponent count={count} incrementCount={incrementCount} />
//     }
//     return WithCounter
// }
//// 3. 
// const withCounter=(WrappedComponent)=> {
//     class NewComponent extends Component{
//         const [count, setCount] = useState(0);
//         const incrementCount = () => {
//             setCount((val) => val + 1);
//         };
//         render(){
//             return <OriginalComponent name = "Deepak"/>
//         }
//     }
//     return WithCounter
// }

export default withCounter;

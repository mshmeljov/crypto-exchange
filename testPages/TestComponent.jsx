import React from 'react';

function Button(props) {
    return <button onClick={props.setCount}>{props.children}</button>
}


function TestComponent(props) {
    // const name = 'TestComponent Name';
const [count, setCount] = React.useState(0);

    return (
    <div>
        {props.head}
        {props.children}
        {props.footer}
        <b>{count}</b>
        <Button setCount={() => setCount(count + 1)}>+</Button>
        <Button setCount={() => setCount(count - 1)}>-</Button>
    </div>
    );
}

// // const TestComponent = () => {
// //     return (<div>TestComponent</div>)
// // }

// class TestComponent extends React.Component {
//     render () {
//         return (<div>TestComponent</div>);
//     }
// }

export default TestComponent;

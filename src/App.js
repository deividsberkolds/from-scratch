import React from 'react';

const function1 = (test,test1) => `Test ${test} ${test1}`

function App() {

    const renderHeader = (arg1) => <div>Test {arg1}</div>;

    return (
        renderHeader(function1('test','test'))
    )
}

export default App;
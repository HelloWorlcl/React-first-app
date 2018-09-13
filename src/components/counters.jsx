import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
    render() {
        const {
            counters,
            onIncrement,
            onIncrementAll,
            onAdd,
            onReset,
            onDelete,
            onDeleteAll
        } = this.props;

        return (
            <div>
                <button
                    onClick={onAdd}
                    className="btn btn-primary btn-sm m-2"
                >
                    Add
                </button>
                <button                    
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                <button
                    onClick={onIncrementAll}
                    className="btn btn-primary btn-sm m-2"
                >
                    Increment All
                </button>
                <button
                    onClick={onDeleteAll}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete All
                </button>
                {counters.map(counter => (
                    <Counter 
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}
 
export default Counters;
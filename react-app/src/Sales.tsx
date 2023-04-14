import Play from './Play';
import Message from './message';

function sales(){
    return (
        <div>
            <div>
                <Message/>
                <Play/>
            </div>
            <div>
                We are making our final sales
                <button>click here</button>
            </div>
        </div>
    );
}

export default sales;
import logo from './logo.svg';
import './App.css';

function App() {

    var name = ["apple","samsung","zoho","mail"]
    var name2 = ["samsung","htc","micromax","ztc"]

    return (
        
        <><div>
            <h1>Mobile Operating</h1>
            <ul>
                {name.map((e) => {
                   return <li>{e}</li>
                

                )}
            </ul>

        </div><div>
                <h1>Manufacturer</h1>
                <ul className='circle'>
                    {name2.map((e) => {
                        <li>{e}</li>
                    }

                    )}
                </ul>

            </div></>



    )
}


export default App;

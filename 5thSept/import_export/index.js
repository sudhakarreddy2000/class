import ReactDOM from 'react-dom/client';
import course, {place, city, n1, n2} from './App'
var total=n1*n2
const clr={
    color:'red'
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h3> Importing and exporting data</h3>
<h4>you selected <span style={clr}>{course}</span> course</h4>
<h4>Place is <span style={clr}>{place}</span> </h4>
<h4>City is <span style={clr}>{city}</span> </h4>
<h4>Total is <span style={clr}>{total}</span> </h4>
</>
)



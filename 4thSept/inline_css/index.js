import ReactDOM from 'react-dom/client';
const clr={
    color:'red',
    border:'1px solid blue',
    backgroundColor:'yellow',
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h2 style={clr}>React</h2>

</>
)


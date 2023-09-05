import ReactDOM from "react-dom";
let marks = prompt("enter marks")
let message
let cssStyle = {}
if (marks <= 40) {
    message = "Failed"
    cssStyle.color = "white"
    cssStyle.height = "100px"
    cssStyle.width = "100px"
    cssStyle.backgroundColor = "red"
    cssStyle.textAlign = "center"
    cssStyle.padding = "200px"
} else if (marks > 40 && marks <= 60) {
    message = "Passed"
    cssStyle.color = "white"
    cssStyle.height = "100px"
    cssStyle.width = "100px"
    cssStyle.backgroundColor = "red"
    cssStyle.textAlign = "center"
    cssStyle.padding = "200px"
} else {
    message = "First class"
    cssStyle.color = "white"
    cssStyle.height = "100px"
    cssStyle.width = "100px"
    cssStyle.backgroundColor = "red"
    cssStyle.textAlign = "center"
    cssStyle.padding = "200px"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <h4 style={cssStyle}>{message}</h4>
    </div>
);
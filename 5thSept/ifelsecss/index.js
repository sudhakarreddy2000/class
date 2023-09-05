import ReactDOM from 'react-dom/client';
let obj=new Date()
let h=obj.getHours()
let greeting
let cssStyle={}
if(h<=12){
    greeting="Good Morning"
    cssStyle.color="green"
    cssStyle.fontFamily="roboto"
    cssStyle.fontSize="2em"
}else if(h>12 && h<=17){
    greeting="Good Afternoon"
    cssStyle.color="red"

}else{
    greeting="Good Evening"
    cssStyle.color="orange"
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h3 style={cssStyle}>{greeting}</h3>
</>
)



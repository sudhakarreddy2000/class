function Contact(){
    return(
        <>

<div className="container">
            <div className="row">
                <div className="col-md-4 bg-primary"><h2>Contact us</h2></div>
                <div className="col-md-8 bg-danger">  
                <form>
            <input type="text" placeholder="First Name "/>
            <br/>
            <input type="text" placeholder="Last Name "/>
            <br/>
            <input type="email" placeholder="Email "/>
            <br/>
            <input type="submit"/>
            <input type="reset"/>
            <br/>
        </form>      
                </div>
            </div>
        </div>


        
        </>
    )
}
export default Contact
import './Card.css'

//function Card(props) {
    const Card = (props) => {
    const classes = 'card ' + props.className; // since this is a custom component, we have to add any classes we use insode component in other elements
                                              // so now on top of Card css class "card" we can add other classes too make them wrok together 
    return <div className={classes}>{props.children}</div> // we are using Card component as a wrapper (instead of div) in the retuurn of the 
                                                            // function. In order to make it work all the content between Card tag passed as an object 
                                                            // and here with {props.children} we tell Card to evaluate the content it is wrapping around 
                                                            // this is a "composition" concept
}

export default Card;

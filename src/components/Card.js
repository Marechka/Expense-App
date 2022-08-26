import './Card.css'

function Card(props) {
    const classes = 'card ' + props.className; // since this is a custom component, we have to add any classes we use insode component in other elements
                                              // so now on top of Card css class "card" we can add other classes too make them wrok together 
    return <div className={classes}>{props.children}</div>
}

export default Card;

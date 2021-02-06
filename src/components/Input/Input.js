const Input = ({classes, elementConfig, value, placeholder}) => <input 
className={classes.InputElement} 
placeholder={placeholder}
{...elementConfig} 
value={value}/>;

export default Input;
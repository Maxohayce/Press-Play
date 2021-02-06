import { Link } from "react-router-dom";
import Field from "./Field/Field";

const Form = ({title, fields, buttons, alternate}) => <form>
    {title}

    {fields.map(({id, elementType, label, name}) => <Field key={id} elementType={elementType} label={label} name={name} /> )}

    {buttons.map(({value, id}) => <button key={id} type="button" >{value}</button>)}
    
    <p>{alternate?.description} <Link to={alternate?.link}>{alternate?.linkText}</Link></p>
    <p>&copy; 2020 PressPlay Incorporated</p>
</form>

export default Form;
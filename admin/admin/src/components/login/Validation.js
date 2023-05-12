const Validation =(values)=>{
    let errors={};
    if (!values.email){
        errors.email='E-mail is required'
    } 
    if (!values.password){
        errors.password='Password is required'
    }
    return console.errors;
};
export default Validation;
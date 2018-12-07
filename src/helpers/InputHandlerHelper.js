
let _setInputState = ({ target }, component) =>{
    const { name, value } = target;
    if( name ){
        let change = {};
        change[name] = value;
        component.setState({ ...change });
    }
    else{
        console.warn('An input element doesn\'t have a name value set, please check your code');
    }
}

export { _setInputState }
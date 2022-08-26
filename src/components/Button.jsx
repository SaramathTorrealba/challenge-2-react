import Button from 'react-bootstrap/Button';

function ButtonComponent(props) {
    return (
    <Button variant="primary">{props.button} </Button>  
    );
  }
  
  export default ButtonComponent;
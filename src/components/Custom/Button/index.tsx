import {SButton} from './style';

interface Props{
    children: any;
    onClick?: () => void;
}

const Button = (props:Props) => {
    const {children , onClick=()=>{} }=props;

  return <SButton onClick={onClick} >{children}</SButton>;
};

export default Button;

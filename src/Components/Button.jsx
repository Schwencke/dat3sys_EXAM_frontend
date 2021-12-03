const Button = ({ text, onClick, disable }) => {
    return (
        <button disabled={disable} onClick={onClick}>{text}</button>
    )
}

export default Button
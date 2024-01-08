export default function Button({
    title="test",
    color="#00beef"
}){
    return(
        <button style={{backgroundColor: color}}>{title}</button>
    )
}
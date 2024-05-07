const Institution = (props) => {
    return (
        <div style= {{background: 'purple', margin: '15px', border: '1px solid white'}}>
            <h2>{props.name}</h2>
            <h3>{props.dates}</h3>
            <p>{props.details}</p>
            
        </div>
    )
}
export default Institution;
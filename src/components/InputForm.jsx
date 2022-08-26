
const InputForm = (props)=>{
    
    return(
    <form>
        <input type="text"placeholder="Usuario" onChange={(e)=> props.setName(e.target.value)} value={props.name}/>
        <div>
        <input type="text"placeholder="Contraseña" onChange={(e)=> props.setPassword(e.target.value)} value={props.password} />
        </div>
    </form>
    )
}
export {InputForm}
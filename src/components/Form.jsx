import { useState } from 'react'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idPurchase, setIdPurchase] = useState("2564dfds")


    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        email === "" ? alert("campo email vacío") : alert(`Registrado con el email, ${email}`)

        console.log("Información enviada")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'>Enviar</button>
            </form>

            <h3>Id de tu compra:{idPurchase}</h3>
        </>
    )
}

export default Form
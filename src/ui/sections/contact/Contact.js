import React, {useState} from 'react';
import './contact.scss';
import {firestore} from '../../../api/firebase/firebase'

const Contact = () => {

    const [name,setName] = useState(null);

    const [project,setProject] = useState(null);

    const [mail,setMail] = useState(null);

    const [phone,setPhone] = useState(null);

    const [com,setCom] = useState(null);

    const [id,setId] = useState(null);



    let nombre = (e) => {

        setName(e.target.value)

    }
    let proyecto = (e) => {

        setProject(e.target.value)

    }
    let email = (e) => {

        setMail(e.target.value)

    }
    let telefono = (e) => {

        setPhone(e.target.value)

    }
    let validador = (e) => {

        e.stopPropagation();

        if(e.keyCode===8){
            
        }else if(e.keyCode<48||e.keyCode>57){
            e.preventDefault();
        }
        
    }
    let comentarios = (e) => {

        setCom(e.target.value);
    }
    let send = (e) => {
        
        if(name.length<2){
            
            e.preventDefault();
            alert('Ingrese un nombre válido');

        }else if(project.length<2){

            e.preventDefault();
            alert('Ingrese tipo de proyecto')

        }else if(mail.length<5){

            e.preventDefault();
            alert('Ingrese un Email válido')

        }else if(phone.length<10){

            e.preventDefault();
            alert('Ingrese un número de teléfono válido')

        }else{
                
            let projectRequest = [];

            let newProject = {'user':{'name':name, 'project':project, 'mail':mail, 'phone':phone},'comments':com};

            const db = firestore;

            db.collection('request').add(newProject)
            .then(({id})=>{

                setId(id);

                alert(`Solicitud de proyecto creada con el identificador: ${id}, te contactaremos a la brevedad, muchas gracias.`)

            })
                .catch((error)=>{
                console.log(error)
            })
        }
        
    }

    return(

        <div className="contact">
            
            <div className="contact__Content">

                <div className="contact__ContentBox">

                    <i className='bx bx-map-pin contact__ContentBoxIcon'></i>
                
                    <h3 className="contact__ContentBoxTitle">Ubicación</h3>
                
                    <span className="contact__ContentBoxDescription">CABA, Argentina</span>

                </div>

                <div className="contact__ContentBox">
                
                    <i className='bx bx-phone contact__ContentBoxIcon'></i>

                    <h3 className="contact__ContentBoxTitle">Teléfono</h3>

                    <span className="contact__ContentBoxDescription">+54 11 51328697</span>
                
                </div>

                <div className="contact__ContentBox">
                
                    <i className='bx bx-mail-send contact__ContentBoxIcon' ></i>

                    <h3 className="contact__ContentBoxTitle">Email</h3>

                    <span className="contact__ContentBoxDescription">diego.alvaradovalle@gmail.com</span>
                
                </div>

                <div className="contact__ContentBox">
                
                    <i className='bx bx-chat contact__ContentBoxIcon'></i>

                    <h3 className="contact__ContentBoxTitle">Chat</h3>

                    <div className="contact__ContentBoxSocial">

                        <a className="contact__ContentBoxSocialRed" href="http://bit.ly/DiegoAlvaradoWpp" target="_blank">
                        
                            <i className="fab fa-whatsapp contact__ContentBoxSocialRedLink"></i>

                        </a>

                        <a className="contact__ContentBoxSocialRed" href="https://www.instagram.com/DAV_Development/" target="_blank">
                        
                            <i className="fab fa-instagram contact__ContentBoxSocialRedLink"></i>

                        </a>

                        <a className="contact__ContentBoxSocialRed" href="https://www.messenger.com/t/102994281880027/?messaging_source=source%3Apages%3Amessage_shortlink" target="_blank">
                        
                            <i className="fab fa-facebook-messenger contact__ContentBoxSocialRedLink"></i>

                        </a>
                    
                    </div>
                
                </div>

            </div>

            <form action="" className="contact__Form">

                <div className="contact__FormInputs">
                    
                    <input type="text" placeholder="Nombre" className="contact__FormInputsInput" maxLength="30" onChange={nombre}></input>

                    <input type="text" placeholder="Proyecto" className="contact__FormInputsInput" maxLength="30" onChange={proyecto}></input>
                    
                </div>

                <div className="contact__FormInputs">
                    
                    <input type="email" placeholder="Email" className="contact__FormInputsInput" onChange={email} maxLength="30"></input>

                    <input type="text" placeholder="Teléfono" className="contact__FormInputsInput" onKeyDown={validador} onChange={telefono} maxLength="12"></input>

                </div>

                <textarea name="" id="" cols="0" rows="7" placeholder="Mensaje" className="contact__FormMessage" onChange={comentarios} maxLength="500"></textarea>

                <input type="submit" value="Enviar" className="contact__FormButton" onClick={send}></input>

            </form>

        </div>
    )
}

export default Contact;
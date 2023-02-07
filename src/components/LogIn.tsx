import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {

    const [name, setName]= useState("")
    const [pass, setPass ] = useState<any>()
    const navigate = useNavigate()

    const getInfo = ()=>{
        const nameValue = localStorage.getItem('name');
        if(name === nameValue){   
            navigate("/saudiday")
        }else if(name.length <3 || pass.length <3){
            alert("من فضلك، أدخل البيانات الصحيحة")
        }else{
            alert("من فضلك، قم بأنشاء حساب جديد")
        }
    }
    const SingUp =()=>{
        navigate("/SingUp")    
    }

    return (
        <div className='mainlogIn'>
            <div className='logIn-form'>
                <fieldset className='logIn-fieldset'>  
                    تسجيل دخول  
                    <input placeholder='الاسم كامل' onChange={e =>{setName(e.target.value)}} ></input>
                    <input placeholder='كلمة المرور' type='password' onChange={e =>{setPass(e.target.value)}}></input>
                    <button type='submit' onClick={getInfo}>أهلًا وسهلًا</button>
                    <a href="" onClick={SingUp}>إنشاء حساب جديد؟*</a>
                </fieldset> 
            </div>

        </div>   
    )
}
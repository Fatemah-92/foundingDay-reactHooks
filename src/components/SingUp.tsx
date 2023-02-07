import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function SingUp() {

    const [name , setName]= useState("")
    const [ pass , setPass ] = useState<any>()
    const [ passAgain , setPassAgain ] = useState<any>()
    const navigate = useNavigate()

    const getInfo = ()=>{
        if(name.length <3 || pass.length <3){
            alert("من فضلك، أدخل البيانات الصحيحة")
        }else if(pass !== passAgain){
            alert("من فضلك، تحقق من كلمة المرور")
        }else{
            localStorage.setItem("name" ,name)
            navigate("/saudiday")
        }
    }

    return (
        <div className='mainlogIn'>
            <div className='logIn-form'>
                <fieldset className='logIn-fieldset'>  
                    تسجيل جديد  
                    <input placeholder='الاسم كامل' onChange={e =>{setName(e.target.value)}} ></input>
                    <input placeholder='كلمة المرور' type='password' onChange={e =>{setPass(e.target.value)}}></input>
                    <input placeholder='إعادة كلمة المرور' type='password' onChange={e =>{setPassAgain(e.target.value)}}></input>
                    <button type='submit' onClick={getInfo}>أهلًا وسهلًا</button>
                </fieldset> 
            </div>

        </div>   
    )
}
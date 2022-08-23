import { useState } from "react"

export default function Form() {



    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState('');


    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPass(e.target.value);

    // const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    // const error = {};

    const [formValid, setFormValid] = useState(false);
    const [formSubmmitd, setformSubmmitd] = useState(false);
    const Submit = (email) => {
        if (name && email && pass) {
            setFormValid(false);
            setformSubmmitd(true);
        } else {
            setFormValid(true);
            setformSubmmitd(false);
        }

        setTimeout(() => {
            setformSubmmitd(false);
        }, 3000);


        console.log(
            'Name :' + name + '|' +
            'Email :' + email + '|' +
            'Password :' + pass + '|'
        )

    }


    return <>
        {!formSubmmitd ?

            <div className="container" >
                <div className="row" >
                    <div className="col-lg-7 col-sm-8 m-auto " >
                        <div className="formOuter bg-success w-100 m-lg-5  mt-5 rounded p-5" >
                            <h3 className="text-center m-auto d-table  text-white">React Form</h3>
                            <div className="fromField mt-4" >
                                <input onChange={handleName} type={"text"} placeholder="Enter Name" className="form-control" />
                            </div>


                            <div className="fromField mt-4" >
                                <input onChange={handleEmail} type="email" required placeholder="Enter email" className="form-control" />
                            </div>


                            <div className="fromField mt-4" >
                                <input onChange={handlePassword} type={"text"} placeholder="Enter Password" className="form-control" />
                            </div>

                            {(pass && pass.length) > 5 ? 'Password Not Valid' : null}

                            <div className="fromField mt-4" >
                                <button onClick={Submit} className={` btn btn-info m-auto d-table shadow-none px-5 `} >Submit</button>
                            </div>
                            <div className="text-center mt-20 d-table  text-white">
                                <h1 >Amarsingh teeja devi </h1>
                            </div>

                            {formValid &&
                                <p className="alert text-center alert-danger mt-4">
                                    {!name && 'Please Enter Your Name.| '}
                                    {!email && 'Please Enter Your Email.|'}
                                    {!pass && 'Please Enter Your Password.|'}
                                </p>
                            }
                        </div>

                    </div>
                </div>
            </div>


            :
            <div className="successSubmit p-4 text-center rounded h4 text-white bg-success w-50 m-auto my-5">
                Your Form has been submitted successfullly.
            </div>}
    </>
} 
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const Auth = () =>{
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    console.log(auth?.currentUser?.email)
    
    const suth = async ()=>{
        try {
        await createUserWithEmailAndPassword(auth, email, pass);
        } catch(err){
            console.log(err);
        }
    };
    const widggl = async ()=>{
        try {
        await signInWithPopup(auth,googleProvider);
        } catch(err){
            console.log(err);
        }
    };
    const out = async ()=>{
        try {
        await signOut(auth,googleProvider);
        } catch(err){
            console.log(err);
        }
    };
    
    return(
        <div>
            
            <div className="container">
	<div className="container">
	<div className="screen">
		<div className="screen__content">
			<div className="login">
            <img src="../img.png" alt="Avatar" className="avatar"/>

				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
				</div>
				<button className="button login__submit" onClick={suth}>
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
                {/* <button className="button login__submit" onClick={out}>
					<span className="button__text">Log out</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button> */}
                <button className="button login__submit" onClick={widggl}>
					<span className="button__text">Log in with google</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</div>
				
			</div>
		</div>
		<div className="screen__background">
			<span className="screen_backgroundshape screenbackground_shape4"></span>
			<span className="screen_backgroundshape screenbackground_shape3"></span>		
			<span className="screen_backgroundshape screenbackground_shape2"></span>
			<span className="screen_backgroundshape screenbackground_shape1"></span>
		</div>		
	</div>
</div>
</div>

    )
}
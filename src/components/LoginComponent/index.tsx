import Avatar from "../Avatar";
import './LoginComponent.css';

const LoginComponent = (props:any) => {
  const {data , actor, logout, login } = props;
 

    return( <>  
  
    <nav id="colorNav">
            <ul> 
                <li>
                <div class="bg-slate-900 text-teal-50/80 rounded-md max-h-12 h-12 w-12  flex flex-col items-center justify-center absolute right-0 mx-4 my-2 cursor-pointer">
                   <Avatar img={props?.img ?? 'locked'} />
                </div>
                <ul>
                    <li><button class="text-teal-50/80 py-3" onClick={props?.actor ? console.log(props?.actor) : login } >{props?.actor ? props?.actor : 'Login'}</button></li>
                   {props?.actor && <li><button class="text-teal-50/80  py-3 " >Option 1</button></li> }
                   {props?.actor && <li><button class="text-teal-50/80  py-3" onClick={() => {}} >Option 2</button></li> }
                     {props?.actor && <li><button class="text-red-500/80  py-3" onClick={!props?.actor ? console.log(props?.actor) : logout } >Logout</button></li> }
                </ul>
            </li>
            </ul>
        </nav>
 
  </>);
  };


export default LoginComponent;
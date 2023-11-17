import Avatar from "../Avatar";
import "./login.styles.css";


const LoginComponent = (props:any) => {
  


    return <div class="bg-slate-900 flex flex-row items-center mx-2 px-2 max-h-12 h-12 max-w-12 w-12 absolute top-0  right-0 rounded-md left-[100%] ">
        <div class="flex">
  
    <a class="mini-photo-wrapper" href="#"> 
    <Avatar width={32} height={32} />   
    </a>
   
    
    <div class="menu-container">
      <ul class="user-menu bg-[#0f172a] text-teal-50/80 transition-all duration-200">
        <div class="profile-highlight  w-full py-1 px-2 m-0 cursor-pointer hover:bg-white/10">
       
          <div class="details">
            <div id="profile-name" onClick={() => props.login()} >{props?.actor ? props.actor : 'Login'}</div>
           
          </div>
        </div>
       {props?.menuItems?.map((item:any) => {   
            return  <li class="user-menu__item py-1 px-2 m-0 cursor-pointer hover:bg-white/10">
            <a class="user-menu-link" href="#">
             
              <div>{item}</div>
            </a>
          </li>     
       })}
      {props?.actor ?  <div class="footer">
          <li onClick={() => props?.logout()} class="user-menu__item  w-full py-1 px-2 m-0 cursor-pointer hover:bg-white/10"><a class="user-menu-link" href="#" style="color: #F44336;">Logout</a></li>
          <li class="user-menu__item py-1 px-2 m-0 cursor-pointer hover:bg-white/10"><a class="user-menu-link" href="#">Settings</a></li>
        </div>: null}
      </ul>
    </div>
  </div></div>;
  };


export default LoginComponent;
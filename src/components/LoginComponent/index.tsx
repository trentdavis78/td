import Avatar from "../Avatar";
import "./login.styles.css";


const LoginComponent = (props:any) => {
  


    return <div class="login_container">
 
  
    <a class="mini-photo-wrapper" href="#"> 
    <Avatar width={32} height={32} />   
    </a>
   
    
    <div class="menu-container" >
      <ul>
        <div class="profile_highlight">
       
          <div class="details">
            <div id="profile-name" onClick={() => props.login()} >{props?.actor ? props.actor : 'Login'}</div>
           
          </div>
        </div>
       {props?.menuItems?.map((item:any) => {   
            return  <li class="user_meun_item">
            <a class="user-menu-link" href="#">
             
              <div>{item}</div>
            </a>
          </li>     
       })}
      {props?.actor ?  <div class="footer">
          <li onClick={() => props?.logout()} class="user-menu__item   "><a class="user-menu-link" href="#" style="color: #F44336;">Logout</a></li>
          <li class="user-menu__item "><a class="user-menu-link" href="#">Settings</a></li>
        </div>: null}
      </ul>
    </div>
 </div>;
  };


export default LoginComponent;
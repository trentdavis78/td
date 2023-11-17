import { createEffect, createSignal } from "solid-js";
import Anchor from "./Anchor";
import Wax from "./Wax";
import Wombat from "./Wombat";
import Locked from "./Locked";

export default function Avatar(props: any) {
const [img, setImg] = createSignal(props?.img ?? 'https://imagedelivery.net/dCSlCQNYRsUOWJPw5n2BPQ/mycloudwallet/32x32');
  switch (props?.img) {
    
    case 'locked':
     setImg(<Locked width={32} height={32} fill="cyan" />);
    break;
     case 'anchor':
      setImg(<Anchor width={32} height={32}  />);
      break;
      case 'wax':
        setImg(<Wax width={32} height={32}  />);
        break;
        case 'wombat':
          setImg(<Wombat width={32} height={32}  />); 
          break;
  }

  createEffect(() => {
    const miniPhotoWrapper = document.querySelector('.mini-photo-wrapper');
    const menuContainer = document.querySelector('.menu-container');
    if (miniPhotoWrapper && menuContainer) {
      miniPhotoWrapper.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
      });
    }
  });


  return (<>
    {img()}
    </> );
}

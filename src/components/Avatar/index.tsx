import { createEffect } from "solid-js";

 
export default function Avatar(props:any) {

    createEffect(() => {
        const miniPhotoWrapper = document.querySelector('.mini-photo-wrapper');
        const menuContainer = document.querySelector('.menu-container');
        if (miniPhotoWrapper && menuContainer) {
            miniPhotoWrapper.addEventListener('click', function() {
                menuContainer.classList.toggle('active');
              });
        }
    });
        

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 145.9 147.8"
    xmlSpace="preserve"
    {...props}
  >
    <radialGradient
      id="a"
      cx={-520.6862}
      cy={646.1411}
      r={8.0484}
      gradientTransform="matrix(0 10.0188 10.0301 0 -6422.284 5236.585)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stop-color="#66fef2" />
      <stop offset={1} stop-color="#00cfdc" />
    </radialGradient>
    <path
      fill="url(#a)"
      d="M36.7 87.7c-8.1-8.1-8.1-21.3 0-29.4l21.6-21.6c8.1-8.1 21.3-8.1 29.4 0l7.6 7.6 21.1-21-7.6-7.6C89-4.1 57-4.1 37.2 15.7L15.6 37.3C-4.2 57-4.2 89 15.6 108.7l7.6 7.6 21.1-21-7.6-7.6z"
    />
    <radialGradient
      id="b"
      cx={-494.7245}
      cy={673.1169}
      r={8.0496}
      gradientTransform="matrix(0 7.1726 7.1817 0 -4746.686 3635.884)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stop-color="#c7a5ea" />
      <stop offset={1} stop-color="#7d4ba3" />
    </radialGradient>
    <path
      fill="url(#b)"
      d="M130.4 37.3l-7.6-7.6-21.1 21 7.6 7.6c8.1 8.1 8.1 21.3 0 29.4l-26-26c-5.8-5.8-15.3-5.8-21.1 0-5.8 5.8-5.8 15.2 0 21l26 26-.6.6c-8.1 8.1-21.3 8.1-29.4 0l-7.6-7.6-21.1 21 7.6 7.6c19.8 19.7 51.8 19.7 71.5 0l.6-.6 21.1-21c19.9-19.7 19.9-51.7.1-71.4z"
    />
  </svg>
  );
}

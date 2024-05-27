import Button from 'react-bootstrap/Button';

export default function ViewMoreBtn({id}) {
    return ( 
      <>
   <a href="https://github.com/cmary2023" target="_blank" rel="noopener noreferrer"> <Button className="glowing-btn" id = {id}><span class='glowing-txt'>VIEW <span class='faulty-letter'>MORE</span></span>
    <div class="icon"><svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg></div>  </Button></a> 
    </>
    )
}
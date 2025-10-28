import PropTypes from "prop-types"; 

 const ButtonPrimary = ({
    href,
    target='_self',
    label,
    icon,
    classes='',
    download

}) => {


    if (href){
        return(
            <a
             href={href}
             target={target}     
             className={ "btn btn-primary " + classes }    
             download={download}   
             >
             {label}
             {icon ? 
             <span className="material-symbols-rounded"
              aria-hidden="true"
              >
                {icon}
             </span>
            
           : undefined 
           }
             
             </a>
        )
    } else{
        return (
            <button  className={ "btn btn-primary " + classes }>
                {label}

                {icon ? 
             <span className="material-symbols-rounded"
              aria-hidden="true"
              >
                {icon}
             </span>
            
           : undefined 
           }
            </button>
        )
    }

}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
    download: PropTypes.string,
}

const ButtonOutline = ({
    href,
    target='_self',
    label,
    icon,
    classes=''

}) => {


    if (href){
        return(
            <a
             href={href}
             target={target}     
             className={ "btn btn-Outline " + classes }       
             >
             {label}
             {icon ? 
             <span className="material-symbols-rounded"
              aria-hidden="true"
              >
                {icon}
             </span>
            
           : undefined 
           }
             
             </a>
        )
    } else{
        return (
            <button  className={ "btn btn-Outline " + classes }>
                {label}

                {icon ? 
             <span className="material-symbols-rounded"
              aria-hidden="true"
              >
                {icon}
             </span>
            
           : undefined 
           }
            </button>
        )
    }

}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}

export {
    ButtonPrimary,
    ButtonOutline

}
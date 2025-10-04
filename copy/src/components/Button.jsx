import PropTypes from "prop-types"; 

 const ButtonPrimary = ({
    href,
    target='_self',
    lable,
    icon,
    classes=''

}) => {


    if (href){
        return(
            <a
             href={href}
             target={target}     
             className={ "btn btn-primary " + classes }       
             >
             {lable}
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
            <button  className={ "btn btn-primary" + classes }>
                {lable}

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
    lable: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}

const ButtonOutline = ({
    href,
    target='_self',
    lable,
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
             {lable}
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
                {lable}

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
    lable: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
}

export {
    ButtonPrimary,
    ButtonOutline

}
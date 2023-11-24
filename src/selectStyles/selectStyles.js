const selectStyles = {
    container:(styles)=>{
        return {
            ...styles,
            width:'100px',
            alignSelf:'center',
        }
    },
    control: (styles) => {
        return {
            transition:'all 0.1s ease',
            backgroundColor:'black', 
            border:'1px solid red',
            borderRadius:'5px',
            fontSize:'inherit',
            width:'100px',
            display:'flex',
            ':hover':{
                boxShadow:'0px 0px 5px 1px red'},
        }
    },
    input:(styles)=>{
        return {
            ...styles,
            color:'white',
        }
    },
    placeholder:(styles)=>{
        return {
            ...styles,
            color:'white',
            opacity:'0.5',
        }
    },
    singleValue:(styles)=>{
        return {
            ...styles,
            color:'white'
        }
    },
    indicatorSeparator:(styles)=>{
        return {
            ...styles,
            backgroundColor:'red',
            marginTop:'7px',
            marginBottom:'7px'
        }
    },
    noOptionsMessage:(styles)=>{
        return {
            ...styles,
            padding:0,
            letterSpacing:5,
            fontSize:'2rem'
        }
    },
    menu:(styles)=>{
        return {
            ...styles,
            backgroundColor:'black',
        }
    },
    menuList:(styles)=>{
        return {
            ...styles,
            overflowX:'hidden',
            backgroundColor:'black',
            maxHeight:'100px',
            scrollBehavior:'smooth',
            border:'1px solid red',
            padding:'5px',
            borderRadius:'5px',
        }
    },
    option: (styles, {isSelected})=>{
        return {
            padding:'5px',
            backgroundColor:"black",
            color: isSelected ? 'red':'white',
            fontSize:'1.3rem',
            borderRadius:'3px',
            cursor:'pointer',
            ':hover':{
                outline:'1px solid red',
                }
        }
    },
};

export default selectStyles;
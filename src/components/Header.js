//  import PropTypes from 'prop-types'; ==> For defining proptypes which are more like data types.
import PropTypes from 'prop-types';
import Button from './Button'

//PASSING DOWN AND USING PROPS
//=============================

// We can also destructure as follows instead of using too many props
//function Header({text})====> And its consumption as ==> <h1>{text}</h1> 
function Header({title,onAdd,showAdd}) {
 


    return (
        <header className = 'header'>
            <h1>{title}</h1> 
            <Button text = {showAdd ? 'Close' : 'Add'} color={showAdd ?'blue':'black'} onClick={onAdd}/>
           
            {/* <button className='btn'>Add</button> */}
            {/* <h1 style={headerStyles}>{props.text}</h1>   ==>For use with the variable styline method */}
            
        </header>
    
    )

}


// PROPTYPES
//===========
Header.propTypes = {
    text:PropTypes.string,
}

//  SETTING UP DEFAULT PROPS
// =========================
 Header.defaultProps = {
    title:"Event Manager.",
}

//INLINE STYLING
//==================
//<h1 style={{textDecoration:'overline underline',}}>{props.text}</h1> 
//Notice the double brackets & camelCase Notation.
// Variables can also be used to style components.

// STYLING USING VARIABLES
//==========================
// const headerStyles = {
//     textDecoration : 'underline overline',
//     color:'red'
// }
export default Header

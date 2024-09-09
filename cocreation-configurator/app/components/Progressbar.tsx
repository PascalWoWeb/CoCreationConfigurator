import "../css/progressbar.css" 

interface propstype{
    props: string;
}

const Progressbar = ({props}:propstype) => {
  return (
    <>
    <div className="progressbar_container">
    <div className="outer_progressbar">
        <div className="inner_progressbar" style={{width: `${props}%`}}></div>
    </div>
    </div>
    
    </>
  )
}

export default Progressbar

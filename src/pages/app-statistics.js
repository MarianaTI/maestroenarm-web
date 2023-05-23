import Navigation from "../components/Nabvar"
import { StyledCard } from "../styles/Login.style";


function TextCard ({text,span}) {
    return (
      <div className="card">
        <p style={{fontFamily:"Poppins"}}>{text}</p>
        <span style={{fontFamily:"Poppins"}}>{span}</span>
      </div>
    );
};

const AppStatistics = () => {
  return (
   <>
   <Navigation/>
        <StyledCard style={{width:411, height:165}}>
            <TextCard text="Precision" span="hola "/>
        </StyledCard>
        <StyledCard style={{width:411, height:165}}>
            <TextCard text="Numero Rate" span="hola "/>
        </StyledCard>
   </>
  );
};

export default AppStatistics;


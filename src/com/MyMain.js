import '../styles/My.css';
import "../styles/main.css";
import MySection from "./MySection";


const MyMain = () =>{
  return (
    <main>
      <MySection h1="Html" />
      <MySection h1="Css" />
      <MySection h1="JavaScript" />
      <MySection h1="React" />
    </main>
  );
}

export default MyMain;
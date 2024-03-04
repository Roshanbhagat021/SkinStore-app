import Styles from "./HighLight.module.css";
function Highlights({ children }) {
  return (
    <>
      <h1 id={Styles.Highlights_Heading}>Beauty Refresh Sale Top Categories</h1>
      <div id={Styles.Highlights_Container}>
        {children.map((ele, i) => (
          <div key={i} id={Styles.Highlights}>
            <img src={ele.image} alt={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Highlights;

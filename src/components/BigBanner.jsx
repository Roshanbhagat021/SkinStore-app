function BigBanner({ image, link }) {
  return (
    <>
      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
        <a href={link}>
          <img src={image} alt="" />
        </a>
      </div>
    </>
  );
}

export default BigBanner;

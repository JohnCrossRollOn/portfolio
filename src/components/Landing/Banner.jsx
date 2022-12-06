export default () => (
  <div
    className="hero h-screen select-none"
    style={{ backgroundImage: "url(https://placeimg.com/1920/1080/arch)" }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content flex flex-col items-start">
      <h1 className="text-[8rem] font-semibold leading-tight">Juan Rolón</h1>
      <p className="text-xl">Argentinian Full-Stack web Developer.</p>
      <a className="btn btn-primary">Let me see</a>
    </div>
  </div>
);

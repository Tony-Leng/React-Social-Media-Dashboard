
export default function Navbar() {
  const toggleButton = () => {
    // document.querySelector('body').classList.add('.darkmode')
    console.log("clicked!");
  }

  return (
    <div className="navbar">
      <div className="title">
        <h2>Social Media Dashboard</h2>
        <h6>Total Followers: 23,004</h6>
      </div>
      <div className="toggler">
        <h4>Dark Mode</h4>
        <button onClick={toggleButton}>Toggler</button>
      </div>
    </div>
  );
}

export default function AlltimeCard({handle, count, delta}) {
return (
  <section className="card-body">
    <div>
      <img className="fb-icon"/>
      <p>{handle}</p>
    </div>
    <div>
      <h1>{count}</h1>
      <p>FOLLOWERS</p>
    </div>
    <div>
      <img className="deltaicon"/>
      <p>{delta}</p>
      <p>Today</p>
    </div>
  </section>
)
}

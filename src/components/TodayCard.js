export default function TodayCard(metric, channel, count, delta) {
return (
  <section>
    <p>{metric}</p>
    <p>{channel}</p>
    <p>{count}</p>
    <p>{delta}</p>
  </section>
)
}

export default function TodayCard({metric, channel, count, delta}) {
  return (
    <div className="todayCard-body">
      <p>{metric}</p>
      <p>{channel}</p>
      <p>{count}</p>
      <p>{delta}</p>
    </div>
  )
}

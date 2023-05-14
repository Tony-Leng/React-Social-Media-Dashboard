import TodayCard from './TodayCard'

export default function Today() {
  const daily = [
    {
      metric: 'Page Views',
      channel: 'FB',
      count: '87',
      delta: '3%'
    },
    {
      metric: 'Likes',
      channel: 'FB',
      count: '52',
      delta: '2%'
    },
    {
      metric: 'Likes',
      channel: 'IN',
      count: '5462',
      delta: '2257%'
    },
    {
      metric: 'Profile Views',
      channel: 'IN',
      count: '52k',
      delta: '1375%'
    },
    {
      metric: 'Retweets',
      channel: 'TW',
      count: '117',
      delta: '303%'
    },
    {
      metric: 'Likes',
      channel: 'TW',
      count: '507',
      delta: '553%'
    },
    {
      metric: 'Likes',
      channel: 'YT',
      count: '107',
      delta: '19%'
    },
    {
      metric: 'Total Views',
      channel: 'YT',
      count: '1407',
      delta: '12%'
    },
  ]

  return (
    <div className='daily'>
      {
        daily.map((stat, index) => {
          return (
            <TodayCard
            key={index}
            {...stat}
            />
          )
        })
      }
    </div>
  )
}

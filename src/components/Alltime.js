import AlltimeCard from "./AlltimeCard"

export default function Alltime() {
  const stats = [
    {
      // icon:,
      handle: '@nathanf',
      count: '1987',
      // deltaicon:,
      delta: '12',
    },
    {
      // icon:,
      handle: '@nathanf',
      count: '1044',
      // deltaicon:,
      delta: '99',
    },
    {
      // icon:,
      handle: '@nathanf',
      count: '11k',
      // deltaicon:,
      delta: '1099',
    },
    {
      // icon:,
      handle: '@nathanf',
      count: '8293',
      // deltaicon:,
      delta: '144',
    }
  ]

  return (
      <div className="alltime">
        {
        stats.map((stat, index) => {
          return (
            <AlltimeCard
            key={index}
            {...stat}
            />
          )
        })
      }
      </div>
  )
}

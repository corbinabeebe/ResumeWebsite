/// Catch all segments route



export default function CatchAll({params}) {


  return (
    <>
    
    <div>The following page is not available yet: {JSON.stringify(params.id)} </div>
    <div>We can build it, just let us know!</div>
    <div>In the mean time, please navigate back to an active page using the nav panel Above!!!!!</div>

    </>
  )
}
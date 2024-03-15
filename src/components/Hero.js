import Image from "next/image"

export function Hero() {

  return (
    <>
    <div className="hero min-h-full" style={{backgroundImage: 'url(/images/yosemite/yosemiteValley.jpg)'}}>
      <div className="hero-overlay bg-gradient-to-br from bg-red-400 bg-opacity-60"></div>
      <div className="hero-content text-center text-slate-700">

        <div className="max-w-md">
          <div className="grid grid-rows-2">
            <h1 className="mb-5 text-5xl font-bold">Adventure Awaits!</h1>
            <p className="mb-5">If you have landed here, you must have made a wrong turn that will turn out to be so so right!</p>
            <p className="mb-5">This site consists of the professional work of Corbin Beebe, a DevOps engineer who enjoys working with new Tech
              and learning new skills
            </p>
          </div>
          <div className="avatar"> 
            <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"> 
              <Image
                src="/images/siteOwnerReduced.png"
                height={200}
                width={200}
                alt="Image of Corbin Beebe"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
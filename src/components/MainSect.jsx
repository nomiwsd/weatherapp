import { Today, Todayshighlights, thisweek } from "../utils/index";

const MainSect = () => {
  return (
    <main className="w-full lg:w-3/4  bg-mainbg px-4 lg:px-10 py-4 lg:py-10">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-spacegrotesk text-white font-bold">
            Today
          </h2>
          <p className="bg-spanbg p-1 w-7 rounded-full text-white font-spacegrotesk font-normal">
            °C
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 my-2 gap-3">
          {Today &&
            Today.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" bg-sidebarbg text-white rounded-3xl px-4 py-2 flex flex-col justify-center items-center gap-1"
                >
                  <div className="flex justify-center items-center gap-1">
                    <h2 className="text-white text-base font-normal font-spacegrotesk uppercase">
                      {item.Text}
                    </h2>
                    <p className="text-secondary text-sm font-spacegrotesk font-normal uppercase">
                      {item.lighttext}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt="Cloud Img"
                    width="100px"
                    height="89px"
                  />
                  <div className=" flex flex-col justify-center items-center">
                    <p className="text-primary text-sm  font-normal font-spacegrotesk">
                      {item.descr}
                    </p>
                    <p className="text-white text-base font-normal font-spacegrotesk">
                      {item.temp}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <h2 className="text-2xl font-spacegrotesk text-white font-bold">
          Today&apos;s Highlights
        </h2>

        <div  className="grid grid-cols-2 lg:grid-cols-3 my-2 gap-3">
          {Todayshighlights &&
            Todayshighlights.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-sidebarbg text-white rounded-3xl px-2 py-2 flex flex-col justify-center items-center gap-1"
                >
                  {item.id === 3 ? (
                    <div className="flex flex-col justify-center gap-2 items-center">
                      <div className="flex justify-center items-center">
                        <img
                          src={item.image1}
                          alt="Cloud img"
                          width="50px"
                          height="48px"
                        />
                        <div className="flex flex-col">
                        <p className="text-white text-base font-normal font-spacegrotesk">
                            {item.time1}
                          </p>
                          <p className="text-secondary text-sm font-normal font-spacegrotesk">
                            {item.Text1}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src={item.image2}
                          alt="Cloud img"
                          width="50px"
                          height="48px"
                        />
                        <div className="flex flex-col">
                          <p className="text-white text-base font-normal font-spacegrotesk">
                            {item.time2}
                          </p>
                          <p className="text-secondary text-sm font-normal font-spacegrotesk">
                            {item.text2}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex flex-col justify-center items-center">
                        <h2 className="text-white text-base font-normal font-spacegrotesk ">
                          {item.Text}
                        </h2>
                      </div>
                      <img
                        src={item.image}
                        alt="Cloud Img"
                        width="100px"
                      />
                      <div className="flex justify-center items-center">
                        <p className="text-white text-3xl font-normal font-spacegrotesk">
                          {item.temp}
                        </p>
                        <p className="text-primary text-sm  font-normal font-spacegrotesk">
                          {item.sign}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        {/* This Week Section */}
        <h2 className="text-2xl font-spacegrotesk text-white font-bold">
          This Week
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 my-2 gap-3">
          {thisweek &&
            thisweek.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" bg-sidebarbg text-white rounded-3xl px-4 py-2 flex flex-col justify-center items-center gap-1"
                >
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-white text-base font-normal font-spacegrotesk uppercase">
                      {item.day}
                    </h2>
                  </div>
                  <img
                    src={item.image}
                    alt="Cloud Img"
                    width="100px"
                    height="89px"
                  />
                  <div className=" flex flex-col justify-center items-center">
                    <p className="text-primary text-sm  font-normal font-spacegrotesk">
                      {item.descr}
                    </p>
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-white text-base font-normal font-spacegrotesk">
                        {item.hightemp}°
                      </p>
                      <p className="text-secondary text-base font-normal font-spacegrotesk">
                        {item.lowtemp}°
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default MainSect;

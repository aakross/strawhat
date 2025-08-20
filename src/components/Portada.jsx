import portada from "../assets/portada.jpg";
import cards from "../assets/cards.png";

export default function Portada() {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src={portada}
          alt="Portada Alberca"
          className="h-full w-full object-cover"
        />
        <div className="text-white text-4xl font-semibold top-1/3 absolute p-2">
          {/* Straw Hat Hostel */}
          <img src={cards} alt="" className="w-4/5" />
          {/* <div class="flex-grow-0 flex-shrink-0 w-44 h-[230px]">
            <div
              class="flex flex-col justify-start items-center w-44 h-[230px] absolute left-[432px] top-0 gap-2.5 p-2.5 rounded-xl bg-white/80 border-2 border-white"
              style="box-shadow: 64.01844024658203px 76.82212829589844px 80px 0 rgba(0,0,0,0.07), 41.49343490600586px 49.792118072509766px 46.85185241699219px 0 rgba(0,0,0,0.05), 24.658954620361328px 29.59074592590332px 25.481481552124023px 0 rgba(0,0,0,0.04), 12.803688049316406px 15.364425659179688px 13px 0 rgba(0,0,0,0.04), 5.216317176818848px 6.259580612182617px 6.518518447875977px 0 rgba(0,0,0,0.03), 1.1855266094207764px 1.4226319789886475px 3.1481480598449707px 0 rgba(0,0,0,0.02);"
            >
              <img
                src="unsplash:mdttpxglrz8.png"
                class="flex-grow-0 flex-shrink-0 w-[156px] h-[154px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl rounded-br object-none"
              />
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[37px] w-[157px] relative gap-1">
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#023f76]">
                  Trip To Greece
                </p>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-3.5 gap-[11px]">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                      preserveAspectRatio="none"
                    >
                      <g clip-path="url(#clip0_2_62)">
                        <path
                          d="M1.5 11C1.5 9.93913 1.92143 8.92172 2.67157 8.17157C3.42172 7.42143 4.43913 7 5.5 7C6.56087 7 7.57828 7.42143 8.32843 8.17157C9.07857 8.92172 9.5 9.93913 9.5 11H8.5C8.5 10.2043 8.18393 9.44129 7.62132 8.87868C7.05871 8.31607 6.29565 8 5.5 8C4.70435 8 3.94129 8.31607 3.37868 8.87868C2.81607 9.44129 2.5 10.2043 2.5 11H1.5ZM5.5 6.5C3.8425 6.5 2.5 5.1575 2.5 3.5C2.5 1.8425 3.8425 0.5 5.5 0.5C7.1575 0.5 8.5 1.8425 8.5 3.5C8.5 5.1575 7.1575 6.5 5.5 6.5ZM5.5 5.5C6.605 5.5 7.5 4.605 7.5 3.5C7.5 2.395 6.605 1.5 5.5 1.5C4.395 1.5 3.5 2.395 3.5 3.5C3.5 4.605 4.395 5.5 5.5 5.5ZM9.642 7.3515C10.3447 7.66796 10.941 8.18062 11.3593 8.82785C11.7776 9.47509 12.0001 10.2294 12 11H11C11.0001 10.422 10.8333 9.85625 10.5195 9.37079C10.2058 8.88534 9.75854 8.50083 9.2315 8.2635L9.6415 7.3515H9.642ZM9.298 1.7065C9.80176 1.91415 10.2325 2.26677 10.5355 2.71961C10.8385 3.17246 11.0002 3.70512 11 4.25C11.0002 4.93617 10.7438 5.59761 10.2813 6.10441C9.81869 6.61121 9.18334 6.92673 8.5 6.989V5.9825C8.87047 5.92944 9.21418 5.75901 9.48065 5.49623C9.74713 5.23345 9.92235 4.89216 9.98058 4.52247C10.0388 4.15277 9.97699 3.77415 9.80419 3.44218C9.6314 3.1102 9.35672 2.84237 9.0205 2.678L9.298 1.7065V1.7065Z"
                          fill="#023F76"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_62">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#023f76]">
                      20 people going
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

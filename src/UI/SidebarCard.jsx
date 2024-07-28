import logoWhite from "../assets/imgs/unknown.png";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";

  return (
    <div
      className="flex justify-center align-center flex-col relative rounded-[30px]"
      style={{ background: bgColor }}
    >
      <div
        className="flex justify-center mx-auto 
        left-[50%] 
        items-center
        w-[94px]
        h-[94px]
        rounded-[50%]
        bg-[linear-gradient(135deg, #868CFF 0%, #4318FF 100%)]
        top-[47px] 
        border-[5px solidwhite]
       translate-y[-50%] 
       translate-x[0%]  
        absolute"
      >
        <image
          src={logoWhite}
          className=" w-[100%] 
          h-[100%] object-cover rounded-[50%] "
        />
      </div>
      <div className="flex justify-center flex-col mb-[12px] items-center pt-[15px] px-[15px] mb-[12px]">
        <p
          // fontSize={{ base: "lg", xl: "18px" }}

          // lineHeight="150%"

          className=" items-center px-[10px] mt-[10px] mb-[6px] line text-white font-bold font-size-[] "
        >
          Portfolio
        </p>
        <p
          // fontSize="14px"

          className=" items-center items-center font-[500]     text-white capitalize px-[10px] mt-[10px] mb-[6px] "
        >
          See more projects in my portfolio
        </p>
      </div>
      <a href="https://amrsamir.vercel.app">
        <buttone
          // bg=""
          // _hover={{ bg: "whiteAlpha.200" }}
          // _active={{ bg: "whiteAlpha.100" }}
          // mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          // fontWeight="regular"
          // fontSize="sm"

          className="min-w-[185px] mx-auto bg-[whiteAlpha.300] "
        >
          Visit
        </buttone>
      </a>
    </div>
  );
}

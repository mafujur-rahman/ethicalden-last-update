// components/service/ServiceFooter.js
export default function ServiceFooter({ service }) {
  return (
    <section className="w-full bg-[#1e1e1e] text-white px-6 md:px-10 lg:px-12 xl:px-20 py-28">
      {/* Main Image / Background Area */}
      <div
        className="
          relative
          flex
          min-h-[550px]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[16px]
          bg-[#d9d9d9]
        "
      >
        {/* 
          Background image will go here later.

          Example:
          <Image
            src={service.footerImage}
            alt={service.title}
            fill
            className="object-cover"
          />
        */}

        {/* Optional overlay for readability when image is added */}
        {/* <div className="absolute inset-0 bg-black/10" /> */}

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Small Label */}
          <p className="text-[20px] font-normal leading-none tracking-[-0.02em] text-black">
            Next Services
          </p>

          {/* Main Title */}
          <h2
            className="
              mt-[22px]
              text-[48px]
              font-bold
              leading-none
              tracking-[-0.045em]
              text-black
              md:text-[40px]
            "
          >
            {service?.footerTitle || "Digital Marketing"}
          </h2>

          {/* Bottom Text */}
          <p
            className="
              mt-[30px]
              text-[20px]
              font-normal
              leading-none
              tracking-[-0.02em]
              text-black
            "
          >
            Scroll down to continue
          </p>
        </div>
      </div>
    </section>
  );
}
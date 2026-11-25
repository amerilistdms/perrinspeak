import Image from "next/image";
import Link from "next/link";
import { GoldLink } from "@/components/gold-link";

const propertyLines = [
  {
    icon: "/images/houseicon.png",
    title: "A home is more than just a place to live.",
    copy: "We take pride in offering residential rental properties that provide comfort, functionality, and a welcoming environment.",
  },
  {
    icon: "/images/BuildingApartmenticon.png",
    title: "Residential rental opportunities.",
    copy: "From spacious single family homes to other residential rental opportunities, our goal is to connect prospective residents with properties that meet their housing needs.",
  },
  {
    icon: "/images/HandHeart.png",
    title: "We’re here to help.",
    copy: "Whether you’re searching for your next rental or looking for information about one of our available properties, we’re here to help.",
  },
];

const reasons = [
  {
    image: "/images/card1photo.jpg",
    alt: "White and brick apartment buildings with balconies",
    title: "Pride in Our Properties",
    copy: "We believe that maintaining our properties is essential to creating a positive living experience.",
  },
  {
    image: "/images/card2photo.jpg",
    alt: "Lease agreement and pens on a wooden desk",
    title: "Straightforward Leasing",
    copy: "We strive to make the rental inquiry and application process clear, organized, and easy to understand.",
  },
  {
    image: "/images/card3photo.jpg",
    alt: "Two people reviewing paperwork at a laptop",
    title: "Responsive Communication",
    copy: "Good communication matters. We value respectful, professional relationships with our residents.",
  },
  {
    image: "/images/card4photo.jpg",
    alt: "Ladder and maintenance tools outside a home",
    title: "A Commitment to Quality",
    copy: "We take a thoughtful approach to property ownership, improvements, and ongoing maintenance.",
  },
];

function BracketLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase leading-[18.15px] tracking-[0.44px] text-[#aac0c8]">
      <span aria-hidden="true">[</span>
      <span className="text-[#b38a44]">{children}</span>
      <span aria-hidden="true">]</span>
    </p>
  );
}

export default function Page() {
  return (
    <>
      <section className="relative flex min-h-svh items-end overflow-hidden lg:min-h-[900px]">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,12,20,0.88)_0%,rgba(4,12,20,0.58)_48%,rgba(4,12,20,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,12,20,0.72)_0%,rgba(4,12,20,0)_55%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-12 pt-28 sm:px-6 sm:pt-36 lg:px-[50px] lg:pb-[106px] lg:pt-[205px]">
          <h1 className="max-w-[930px] text-[clamp(3.4rem,8.7vw,125.3px)] font-semibold leading-[0.86] tracking-[-0.06em] text-[#f5f7f5]">
            Welcome to
            <br />
            Perrins Peak
            <br />
            Properties
          </h1>
          <p className="mt-8 max-w-[495px] text-[clamp(1.35rem,2.2vw,31.7px)] font-medium leading-[1.24] tracking-[-0.036em] text-[#f5f7f5] lg:mt-[45px]">
            Quality Homes. Comfortable Living. A Place to Call Home.
          </p>
          <div className="mt-12 flex flex-col gap-6 border-t border-[#aac0c8]/45 pt-4 lg:mt-[70px] lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[660px] font-mono text-xs leading-[17.4px] text-[#f5f7f5]">
              We are a privately owned real estate company specializing in residential rental
              properties throughout New York’s Hudson Valley region.
            </p>
            <div className="flex flex-wrap gap-3 lg:w-[330px] lg:justify-between">
              <GoldLink href="#homes">View Available Properties</GoldLink>
              <GoldLink href="#contact" variant="light">
                Contact Us
              </GoldLink>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-[118px]">
        <img
          src="/images/figure.png"
          alt=""
          className="pointer-events-none absolute bottom-0 left-[-8%] hidden w-[min(480px,42vw)] mix-blend-screen md:block"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(140px,433px)_minmax(0,867px)] lg:px-[50px]">
          <BracketLabel>About</BracketLabel>
          <div className="max-w-[867px] text-[clamp(1.35rem,2.2vw,31.7px)] font-medium leading-[1.24] tracking-[-0.036em]">
            <p>
              At <span className="text-[#b38a44]">Perrins Peak Properties</span>, we believe finding
              the right home should be a positive and straightforward experience. We are a privately
              owned real estate company specializing in residential rental properties throughout New
              York’s Hudson Valley region.
            </p>
            <p className="mt-[1.24em]">
              <span className="text-[#b38a44]">Our focus is simple:</span> providing well
              maintained, comfortable homes while building positive, respectful relationships with
              the residents who call our properties home.
            </p>
            <p className="mt-[1.24em]">
              Whether you’re searching for your next rental or looking for information about one of
              our available properties, we’re here to help.
            </p>
            <div className="mt-12 lg:mt-16">
              <GoldLink href="#homes">View Available Properties</GoldLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Hudson Valley homes" className="relative h-[240px] w-full overflow-hidden sm:h-[320px] md:h-[380px] lg:h-[470px]">
        <Image
          src="/images/banner.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <img
            src="/images/logostacked.png"
            alt="Perrins Peak LLC Real Estate Holdings"
            className="h-auto w-full max-w-[280px] mix-blend-screen sm:max-w-[420px] lg:max-w-[619px]"
          />
        </div>
        <button
          type="button"
          className="absolute bottom-[17px] right-3.5 inline-flex min-h-[34px] items-center justify-center rounded border border-[#345063] bg-[#efefef] px-2.5 text-[10px] font-semibold uppercase leading-[16.5px] tracking-[0.25px] text-[#071522] transition-colors hover:bg-[#d3b67d]"
        >
          Play Video
        </button>
      </section>

      <section id="homes" className="py-16 sm:py-20 lg:py-[118px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 sm:px-6 lg:gap-[70px] lg:px-[50px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <h2 className="max-w-full text-[clamp(2.4rem,5.2vw,74.9px)] font-semibold leading-[0.94] tracking-[-0.056em]">
              Find a Home That
              <br />
              Fits Your Lifestyle
            </h2>
            <p className="max-w-[580px] font-mono text-sm leading-[23.1px] text-[#aac0c8] lg:flex-1">
              A home is more than just a place to live. It’s where you relax, spend time with family
              and friends, and create lasting memories.
            </p>
          </div>

          <div className="border-t border-[#345063]">
            {propertyLines.map((line) => (
              <div
                key={line.title}
                className="grid gap-3 border-b border-[#345063] px-1 py-6 transition-[background-color,padding] duration-500 ease-in-out hover:bg-[#132536] hover:pl-4 sm:gap-4 sm:py-7 lg:grid-cols-[72px_minmax(0,491px)_minmax(0,580px)] lg:items-end lg:gap-5"
              >
                <Image src={line.icon} alt="" width={40} height={40} className="size-10" />
                <h3 className="text-[clamp(1.15rem,2vw,23px)] font-semibold leading-[1.15] tracking-[-0.805px]">
                  {line.title}
                </h3>
                <p className="max-w-[580px] font-mono text-[13px] leading-[21.45px] text-[#aac0c8]">
                  {line.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="border-y border-[#345063] bg-[#eee] py-16 text-[#071522] sm:py-20 lg:py-[118px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 sm:px-6 lg:gap-[60px] lg:px-[50px]">
          <h2 className="max-w-[763px] text-[clamp(2.6rem,5vw,72px)] font-semibold leading-[0.94] tracking-[-0.055em]">
            Why Choose
            <br />
            Perrins Peak Properties?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-[60px]">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="group relative overflow-hidden bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,21,34,0.12)] sm:p-6"
              >
                <Image
                  src="/images/card-corner.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="absolute top-0 right-0"
                />
                <p className="font-mono text-[13px] leading-[21.45px] text-[#1e211f]">{reason.copy}</p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-[26px]">
                  <div className="relative h-[142px] w-full max-w-[211px] shrink-0">
                    <Image
                      src={reason.image}
                      alt={reason.alt}
                      fill
                      sizes="211px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[clamp(1.25rem,2vw,25px)] font-semibold leading-7 tracking-[-0.875px] transition-colors group-hover:text-[#b38a44]">
                    {reason.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#345063] bg-[#091b2a] px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-[50px] lg:pt-[110px]">
        <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-14 lg:min-h-[220px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[707px]">
            <h2 className="max-w-[587px] text-[clamp(2.75rem,5.2vw,74.9px)] font-semibold leading-[0.94] tracking-[-0.056em]">
              Your Next Home Could Be Waiting
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <GoldLink href="#homes">View Available Properties</GoldLink>
              <GoldLink href="#contact" variant="light">
                Contact Us
              </GoldLink>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-10 lg:gap-14">
            <img
              src="/images/logo.png"
              alt="Perrins Peak LLC"
              className="h-10 w-auto max-w-full mix-blend-screen sm:h-12"
            />
            <div className="flex flex-wrap gap-8 sm:gap-10 lg:gap-14">
              <div className="flex min-w-[124px] flex-col gap-[11px]">
                <BracketLabel>Explore</BracketLabel>
                <Link href="#homes" className="text-xs font-normal uppercase leading-[19.8px] tracking-[0.42px] transition-colors hover:text-[#b38a44]">
                  Available Rentals
                </Link>
                <Link href="#about" className="text-xs font-normal uppercase leading-[19.8px] tracking-[0.42px] transition-colors hover:text-[#b38a44]">
                  Our Approach
                </Link>
              </div>
              <div className="flex min-w-[96px] flex-col gap-[11px]">
                <BracketLabel>Connect</BracketLabel>
                <Link href="#contact" className="text-xs font-normal uppercase leading-[19.8px] tracking-[0.42px] transition-colors hover:text-[#b38a44]">
                  Contact Us
                </Link>
                <Link href="#top" className="text-xs font-normal uppercase leading-[19.8px] tracking-[0.42px] transition-colors hover:text-[#b38a44]">
                  Back to top
                </Link>
              </div>
              <div className="flex flex-col gap-[11px]">
                <BracketLabel>Social</BracketLabel>
                <div className="flex gap-[11px]">
                  <a href="#contact" aria-label="Facebook" className="transition-opacity hover:opacity-70">
                    <img src="/images/facebook.svg" alt="" width={24} height={24} />
                  </a>
                  <a href="#contact" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                    <img src="/images/instagram.svg" alt="" width={24} height={24} />
                  </a>
                  <a href="#contact" aria-label="TikTok" className="transition-opacity hover:opacity-70">
                    <img src="/images/tiktok.svg" alt="" width={24} height={24} />
                  </a>
                  <a href="#contact" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                    <img src="/images/linkedin.svg" alt="" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-[1340px] flex-col gap-2 border-t border-[#345063] pt-5 font-mono text-[10px] leading-[16.5px] text-[#aac0c8] sm:flex-row sm:justify-between">
          <p>© 2026 Perrins Peak Properties</p>
          <p>Hudson Valley, New York</p>
        </div>
      </section>
    </>
  );
}

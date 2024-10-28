import { Link } from "react-router-dom";
import InfiniteScroll from "./InfiniteSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const differentItems = [
    "Customer service 5 days a week from 10:00 to 18:00",
    "·",
    "Payment 100% secured",
    "·",
    "Orders processed within 1 to 2 working days",
    "·",
    "Returns within 30 days",
    "·",
  ];

  const footerItems = [
    {
      title: "PRODUITS",
      children: [
        { name: 'Clothing', path: '/collections/clothing' },
        { name: 'Footwear', path: '/collections/footwear' },
        { name: 'Launches', path: null },
      ]
    },
    {
      title: "À PROPOS",
      children: [
        { name: 'Starcow', path: '/pages/starcow-paris' },
        { name: 'Editorial', path: '/blogs/blog' },
      ]
    },
    {
      title: "AIDE ET SERVICES",
      children: [
        { name: 'Livraison', path: '/blogs/blog' },
        { name: 'Échange et retours', path: '/pages/aide' },
        { name: 'Contactez-nous', path: '/pages/aide' },
      ]
    }
  ];

  return (
    <div className="bg-black">
      <div className="text-center py-4 bg-black text-white text-sm font-bold">
        <InfiniteScroll items={differentItems} />
      </div>

      <div className="container mx-auto mb-[65px] mt-[60px] bg-black text-white">
        <div className="flex gap-8 lg:flex-row flex-col">
          <div className="lg:w-1/2">
            <div className="w-[80%]">
              <h2 className="text-sm font-black font-prompt mb-4">INSPIRÉ PAR LA CULTURE HIP-HOP ET SKATE DES 90'S...</h2>
              <p className="text-sm mb-4">
                Starcow Paris a toujours eu pour but de proposer une sélection éclectique et pointue.
              </p>
              <p className="text-sm mb-4">
                Fidèle à ses origines, l'équipe travaille depuis plus de vingt ans avec les fournisseurs clés du milieu tels que Nike, Adidas, Stussy, Carhartt USA, The North Face, Patagonia, Converse ou encore New Balance.
              </p>
              <Link to="/pages/starcow-paris" className="text-sm font-black menu-item reverse before:h-[2px] after:h-[2px]">SEE MORE</Link>
            </div>
          </div>

          <div className="lg:grid grid-cols-3 gap-4 flex-1">
            {isDesktop ? (
              footerItems.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-sm font-black font-prompt mb-4">{section.title}</h2>
                  <ul className="text-sm space-y-2">
                    {section.children.map((item, itemIdx) => (
                      <li key={itemIdx} className="menu-item font-prompt before:h-[1px] after:h-[1px] w-fit">
                        {item.path ? (
                          <Link to={item.path}>{item.name}</Link>
                        ) : (
                          <span>{item.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <Accordion type="multiple">
                {footerItems.map((section, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline">{section.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm space-y-2">
                        {section.children.map((item, itemIdx) => (
                          <li key={itemIdx} className="menu-item font-prompt before:h-[1px] after:h-[1px] w-fit">
                            {item.path ? (
                              <Link to={item.path}>{item.name}</Link>
                            ) : (
                              <span>{item.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-black">
            <svg viewBox="0 0 421 74" className="text-white ">
              <path fill="currentColor" d="M420.81 3.56997C420.48 2.75997 419.23 2.57997 418.47 2.53997C418.18 2.52997 417.96 2.53997 417.89 2.53997H417.78C417.56 2.53997 417.34 2.53997 417.11 2.53997H398.86C397.69 2.57997 396.9 3.78997 396.3 5.17997V5.20997L396.26 5.27997L386.02 29.61L383.22 5.78997C383.2 5.59997 383.18 5.40997 383.15 5.22997V5.18997C383 4.03997 382.74 3.05997 382.24 2.71997C382.02 2.56997 381.7 2.50997 381.34 2.49997C381.23 2.49997 381.11 2.49997 380.99 2.49997H363.49C363.37 2.49997 363.19 2.49997 362.98 2.50997C362.85 2.50997 362.75 2.53997 362.67 2.57997H362.65C362.65 2.57997 362.64 2.59997 362.63 2.59997C362.5 2.65997 362.44 2.72997 362.44 2.72997C361.77 3.30997 361.06 4.97997 360.48 6.50997C357.61 13.16 350.77 29.26 350.77 29.26L350.72 28.81L348.12 5.56997V5.45997L348.1 5.38997C347.96 4.19997 347.73 3.18997 347.3 2.83997C346.99 2.58997 346.41 2.48997 345.73 2.45997H345.69C345.31 2.43997 344.9 2.44997 344.49 2.45997L335.9 2.49997L327.29 2.52997C327.29 2.52997 327.26 2.52997 327.24 2.52997H327.02C326.88 2.52997 326.75 2.54997 326.62 2.54997H326.47C325.6 2.59997 324.83 2.74997 324.41 3.16997C323.99 3.58997 323.86 4.52997 323.87 5.67997V5.70997C323.87 6.00997 323.89 6.30997 323.91 6.62997V6.69997C323.96 7.29997 324.02 7.91997 324.1 8.54997L324.5 12.67C324.5 12.67 323.73 11.14 321.83 9.10997L321.81 9.08997C321.63 8.89997 321.44 8.69997 321.24 8.49997C320.73 7.98997 320.19 7.49997 319.62 7.02997C319.55 6.96997 319.47 6.90997 319.4 6.84997C319.21 6.68997 319.01 6.53997 318.82 6.38997C318.66 6.26997 318.49 6.14997 318.33 6.01997C318.19 5.91997 318.06 5.81997 317.92 5.71997C317.89 5.69997 317.87 5.67997 317.84 5.65997C317.79 5.62997 317.75 5.59997 317.71 5.56997C316.75 4.89997 315.75 4.28997 314.76 3.74997C306.16 -0.970025 291.96 -0.680025 282.42 2.89997C282.27 2.94997 282.13 2.99997 281.98 3.05997C281.9 3.08997 281.82 3.11997 281.74 3.14997C281.49 3.24997 281.24 3.35997 280.99 3.46997C280.85 3.52997 280.73 3.56997 280.58 3.63997C280.54 3.65997 280.5 3.67997 280.46 3.69997C280.01 3.89997 279.58 4.10997 279.14 4.32997C279.08 4.35997 279.01 4.38997 278.95 4.41997C278.86 4.46997 278.77 4.50997 278.69 4.55997C271.17 8.41997 267.73 12.95 267.73 12.95C268.12 12.15 269.86 9.28997 269.66 8.34997C269.24 6.26997 266.77 5.06997 265.12 4.14997C260.1 1.32997 249.97 -1.09003 241.84 0.479974C234.61 1.87997 228.61 4.12997 223.69 7.52997C223.69 7.52997 215.12 12.86 210.96 22.96C211.6 13.29 206.54 7.61997 199.89 4.74997C199.65 4.64997 199.41 4.55997 199.16 4.46997C199.12 4.45997 199.09 4.43997 199.05 4.41997C193.26 2.22997 187.18 2.42997 187.18 2.42997H160.34C159.53 2.42997 158.78 2.50997 158.27 2.74997C157.62 3.05997 157.19 4.16997 156.87 5.59997V5.66997C156.67 6.56997 156.52 7.57997 156.39 8.61997L154.98 17.53C154.84 18.31 154.72 19.09 154.61 19.88L149.87 49.77L142.9 4.74997C142.88 4.61997 142.86 4.48997 142.84 4.35997L142.82 4.21997C142.72 3.69997 142.56 3.23997 142.27 2.94997C141.98 2.65997 141.46 2.55997 140.86 2.52997H140.8C140.47 2.50997 140.12 2.50997 139.77 2.52997L125.19 2.47997C123.67 2.44997 121.98 2.41997 120.51 2.45997H120.49C118.77 2.50997 117.35 2.64997 116.87 2.95997C116.3 3.33997 115.89 4.08997 115.54 4.88997L109.15 17.95L111.19 5.99997C111.31 5.37997 111.46 4.16997 111.02 3.41997C110.41 2.38997 107.81 2.46997 107.81 2.46997C107.31 2.44997 106.79 2.45997 106.27 2.46997L61.7402 2.51997C61.2502 2.49997 60.7502 2.49997 60.2802 2.51997H60.2702C60.2202 2.51997 60.1602 2.51997 60.1102 2.52997H60.0902C57.3802 2.52997 57.5902 4.22997 57.5902 4.22997C56.7402 3.88997 55.8902 3.55997 55.0202 3.24997C52.7702 2.04997 50.4502 1.24997 48.1702 0.749974C47.9902 0.709974 47.8202 0.679974 47.6402 0.639974C47.5702 0.629974 47.5102 0.609975 47.4402 0.599975C46.3302 0.389975 45.1402 0.219974 43.8902 0.109974C43.7802 0.109974 43.6802 0.0899745 43.5702 0.0799745C43.3902 0.0699745 43.2202 0.0599745 43.0502 0.0499745C38.0802 -0.240026 33.7602 0.559974 31.3902 1.13997C31.0902 1.21997 30.7902 1.29997 30.4802 1.38997C30.3502 1.41997 30.2102 1.45997 30.0802 1.48997C29.6902 1.59997 29.4702 1.67997 29.4702 1.67997V1.65997C27.3702 2.23997 25.2402 3.00997 23.3202 4.07997C23.1702 4.15997 23.0402 4.23997 22.9002 4.32997C17.8302 6.99997 13.9302 10.69 11.3102 15.93C9.53017 19.49 8.44017 23.16 8.44017 28.67C8.44017 30.39 8.41017 31.88 8.84017 33.21C10.9202 39.67 15.9202 43.46 22.0502 45.88C25.1002 47.09 31.3602 48.16 33.5002 50.14C33.6202 50.29 33.7402 50.57 33.4102 50.93C32.7702 51.54 30.9902 51.64 29.4202 51.53C28.8302 51.48 27.8302 51.33 26.5502 50.95C25.7602 50.67 24.9602 50.38 24.1502 50.06C24.0402 50.01 23.9302 49.97 23.8302 49.93C23.6102 49.84 23.3902 49.75 23.1702 49.66C22.9202 49.55 22.6602 49.43 22.3702 49.31C20.9002 48.65 19.4902 47.91 18.2402 47.08C17.4402 46.51 16.7602 45.96 16.2502 45.51C15.9502 45.21 15.5502 44.78 15.1002 44.39C14.3702 43.74 13.5302 43.2 12.9102 43.5C12.5102 43.69 12.0702 44.23 11.6402 44.86L1.40017 59.77C1.12017 60.13 0.830169 60.54 0.580169 60.97V60.99H0.570169C0.030169 61.93 -0.269831 62.95 0.340169 63.81C1.44017 65.36 4.59017 67.09 6.34017 68.08C13.2302 71.98 23.5902 75.35 34.2202 72.75C37.2902 72 40.2402 71.12 42.9002 69.95V69.97C42.9002 69.97 46.7402 68.55 50.7602 64.93C50.7802 64.91 50.8002 64.89 50.8302 64.87C52.6402 63.23 54.4802 61.15 56.0402 58.54C56.2302 58.25 56.4102 57.97 56.5602 57.67C56.6302 57.53 56.7002 57.38 56.7702 57.23C56.7802 57.2 56.8002 57.18 56.8202 57.15C56.8202 57.15 56.8202 57.15 56.8202 57.14C59.0602 52.52 60.4902 45 58.8302 39C58.1702 36.62 56.7002 34.48 54.9502 32.69C54.9302 32.67 54.9102 32.65 54.8902 32.62C54.2902 31.99 53.6102 31.39 52.8902 30.82C52.2702 30.32 51.6402 29.87 51.0202 29.46C50.5202 29.13 49.9902 28.83 49.4402 28.54C43.6602 25.27 36.9902 23.66 36.9902 23.66C35.9102 23.34 34.7502 23.02 34.2302 22.59C34.1602 22.53 33.7802 22.16 34.2302 21.79C35.9902 20.48 40.3302 21.57 41.9402 22.12C44.6002 23.03 47.2902 24.36 49.4102 25.92C50.2702 26.56 51.5002 28.18 53.1402 27.52C53.3102 27.45 53.5402 27.25 53.7902 26.98H53.8002C54.0902 26.65 54.4102 26.24 54.7402 25.79L56.7102 23.32H69.0802L61.9202 67.89C61.9202 67.89 61.8802 68.09 61.8402 68.37C61.7602 68.64 61.5302 69.64 62.1902 70.39C62.6102 70.87 63.3802 71.23 64.8002 71.23C65.0002 71.23 65.2302 71.23 65.4502 71.23C65.9402 71.25 66.2802 71.23 66.2802 71.23C67.3302 71.27 68.4402 71.25 69.4902 71.23C73.2202 71.23 77.1102 71.22 77.1502 71.22L103.92 71.3C104.34 71.31 104.77 71.33 105.18 71.3H105.3C105.57 71.27 105.83 71.24 106.02 71.15C106.92 70.75 107.18 69.56 107.62 68.68C108.71 66.5 109.8 64.32 110.89 62.14H128.26L128.75 65.15C128.87 65.99 129.01 66.88 129.17 67.71V67.74C129.47 69.33 129.83 70.69 130.16 70.95C130.81 71.46 133.14 71.52 135.43 71.48L166.66 71.3C166.92 71.3 167.17 71.3 167.41 71.3H167.47C168.77 71.28 169.87 71.19 170.37 70.96C171.11 70.62 171.39 69.94 171.55 69.11L171.6 68.83C171.61 68.76 171.63 68.68 171.64 68.61L174.31 52.22C176.58 56.8 178.85 61.38 181.11 65.96C181.75 67.23 182.83 70.44 183.91 71.1C184.24 71.3 184.79 71.37 185.4 71.39H185.66C185.75 71.39 185.84 71.39 185.93 71.39L203.17 71.37H205.52C206.82 71.37 208.42 71.5 208.99 70.77C209.37 70.28 209.23 69.42 208.88 68.46C208.59 67.68 208.17 66.85 207.76 66.1L197.92 45.55C205.71 40.61 207.12 36.01 207.12 36.01C204.78 46.47 208.52 55.68 208.52 55.68C211.83 64.34 218.21 69.53 227.39 72.35C237.44 75.44 249.78 72.54 256.54 68.55C257.91 67.74 261.85 65.47 262.28 64.01L262.15 62.21C262.15 62.21 262.38 62.57 262.84 63.16L262.91 63.24C263.97 64.58 266.15 66.96 269.49 68.9C270.49 69.49 271.54 70.03 272.62 70.53C272.62 70.53 272.89 70.67 273.37 70.87C273.85 71.08 274.33 71.28 274.82 71.48C275.6 71.79 276.42 72.03 277.26 72.24C279.65 72.93 282.78 73.59 286.28 73.69C286.42 73.69 286.56 73.69 286.7 73.69C286.86 73.69 287.02 73.7 287.19 73.7C287.24 73.7 287.29 73.7 287.34 73.7C290.27 73.7 293.44 73.31 296.15 72.76C296.15 72.76 299.94 72.19 304.56 70.28C304.74 70.21 304.92 70.15 305.1 70.07C305.83 69.75 306.54 69.41 307.24 69.06C307.38 68.99 307.51 68.92 307.65 68.85C307.94 68.7 308.23 68.55 308.51 68.39C308.95 68.14 309.4 67.89 309.84 67.62C316.41 63.58 321.38 57.67 324.85 50.67C325.84 48.67 326.54 46.4 327.25 44.2C327.47 43.29 327.68 42.38 327.9 41.47L327.93 41.53L328.63 48.35C328.76 49.88 328.91 51.39 329.09 52.86L330.8 69.43C330.8 69.43 330.91 71.27 333.96 71.27H335.82C336.85 71.3 337.95 71.29 339.03 71.27H352.7C352.88 71.25 353.12 71.21 353.38 71.11C353.71 71.07 353.96 71.01 354.06 70.94C354.54 70.61 355.37 68.73 356.08 66.94C359.1 60.02 366.34 43.29 366.34 43.29L369.39 69.61C369.39 69.61 369.41 71.27 371.37 71.27H390.58C390.58 71.27 391.45 71.32 392.22 70.89C392.24 70.89 392.26 70.88 392.27 70.87C392.29 70.87 392.3 70.85 392.31 70.84C392.42 70.77 392.52 70.69 392.61 70.6C392.64 70.57 392.67 70.55 392.69 70.52C392.78 70.43 392.87 70.32 392.94 70.2C392.98 70.14 393.02 70.08 393.06 70.02C393.08 69.99 393.1 69.97 393.12 69.93H393.13L393.2 69.79C393.2 69.79 393.2 69.78 393.21 69.77V69.73C393.35 69.47 393.47 69.2 393.57 68.91L420.35 6.72997C420.35 6.72997 420.37 6.68997 420.4 6.61997C420.67 6.02997 420.88 5.39997 420.89 4.74997C420.93 4.32997 420.92 3.89997 420.77 3.54997L420.81 3.56997ZM87.9102 61.07L87.6402 61.6C89.6602 48.84 91.6902 36.08 93.7102 23.32H106.55C100.34 35.9 94.1202 48.49 87.9102 61.07ZM120.19 43.26C121.5 40.59 122.81 37.92 124.12 35.26L124.19 35.13C124.61 37.84 125.03 40.55 125.46 43.27H120.19V43.26ZM184.88 25.99C184.44 28.93 181.36 29.28 177.81 29.19C178.1 27.21 178.39 25.23 178.68 23.25C179.37 23.23 180.06 23.21 180.75 23.18C183.09 23.18 185.25 23.52 184.89 25.98L184.88 25.99ZM256.51 43.26C255.78 43.82 255.04 44.37 254.31 44.93C249.1 48.95 237.5 51.87 233.19 45.32C231.21 41.83 231.67 39.66 232.08 36.35C232.33 34.3 232.84 32.81 233.19 31.97C234.51 29.06 236.65 26.71 239.24 25.19C240 24.74 240.97 24.42 241.94 24.14C244.21 23.55 247.98 23.15 252.34 25.01C254.79 26.11 256.73 27.71 258.58 29.46C258.58 29.46 256.53 34.72 256.51 43.27V43.26ZM301.86 38.12C300.54 42.75 295.97 49.54 288.99 47.72C283.79 46.37 282.48 39.94 284.45 34.05C285.6 30.6 287.91 27.92 290.99 26.38C291.18 26.28 291.39 26.21 291.61 26.16C291.63 26.16 291.66 26.15 291.69 26.14C291.94 26.08 292.19 26.03 292.45 25.98C294.27 25.66 298.38 25.34 300.62 28.27C300.65 28.31 300.67 28.35 300.7 28.39C300.84 28.59 300.98 28.8 301.1 29.03C302.46 31.43 302.8 34.78 301.85 38.12H301.86ZM366.34 43.19H366.35H366.34Z">
              </path>
            </svg>
          </div>

          <div className="py-4 bg-black font-prompt text-white text-xm flex flex-col lg:flex-row text-center justify-between container mx-auto">
            <span>©2024 Starcow · Legal mentions · CGV · Personal datas · FAQ · Cookies settings</span>
            <span className="lg:ml-8">Website by Colorz</span>
          </div>
    </div>
  );
};

export default Footer;

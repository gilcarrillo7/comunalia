import React from "react";
import { motion } from "framer-motion";

/** Keyframes del vaivén tipo “viento” */
const sway = {
  rotate: [0, 3.2, -6, 2, 0],
  x: [0, 9, 18, 12, 0],
  y: [0, 2, 6, 3, 0],
  scaleY: [1, 0.985, 1.01, 0.995, 1],
  skewX: [0, 0.6, -1.2, 0.4, 0],
};

export default function WindBranchesFixedLeaves() {
  return (
    <svg
      viewBox="0 0 1080 1080"
      width="100%"
      height="100%"
      role="img"
      aria-label="Ramas con hojas animadas"
    >
      {/* ====== 7 símbolos (1 hoja por símbolo) ====== */}
      <defs>
        <style>
          {`.st0{fill:#FCB713;}
            .st1{fill:#E92200;}
            .st2{fill:#FF671A;}
            .st3{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-miterlimit:10;}
            .st4{fill:none;stroke:#FFFFFF;stroke-width:0.9933;stroke-linecap:round;stroke-miterlimit:10;}
            .st5{fill:none;stroke:#FFFFFF;stroke-width:1.0683;stroke-linecap:round;stroke-miterlimit:10;}
            .st6{fill:none;stroke:#FFFFFF;stroke-width:1.2121;stroke-linecap:round;stroke-miterlimit:10;}
            .st7{fill:none;stroke:#FFFFFF;stroke-width:1.204;stroke-linecap:round;stroke-miterlimit:10;}
            .st8{fill:none;stroke:#FFFFFF;stroke-width:1.2949;stroke-linecap:round;stroke-miterlimit:10;}
            .st9{fill:none;stroke:#780409;stroke-width:1.1032;stroke-linecap:round;stroke-miterlimit:10;}
            .st10{fill:none;stroke:#780409;stroke-width:1.0056;stroke-linecap:round;stroke-miterlimit:10;}
            .st11{fill:none;stroke:#780409;stroke-width:0.9866;stroke-linecap:round;stroke-miterlimit:10;}
            .st12{fill:none;stroke:#780409;stroke-width:1.0187;stroke-linecap:round;stroke-miterlimit:10;}`}
        </style>

        {/* 1. Amarilla lisa (path #1) */}
        <symbol id="leaf1" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st0"
              d="M636.3,415.1c0,0-23.1-85.4,63.9-107.8C700.2,307.3,723.2,385.2,636.3,415.1z"
            />
          </g>
        </symbol>

        {/* 2. Roja lisa (path #2) */}
        <symbol id="leaf2" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st1"
              d="M777.4,805.3c0,0-72-1.1-70-74.2C707.3,731.2,773.5,730.6,777.4,805.3z"
            />
          </g>
        </symbol>

        {/* 3. Naranja lisa (path #3) */}
        <symbol id="leaf3" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st2"
              d="M845.2,493.8c0,0,28.3-35.2,63.8-6C909,487.8,883.7,520.8,845.2,493.8z"
            />
          </g>
        </symbol>

        {/* 4. Amarilla lisa pequeña (path #4) */}
        <symbol id="leaf4" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st0"
              d="M221.2,935.9c0,0,47.5-16,63.2,32.4C284.4,968.3,241.2,984,221.2,935.9z"
            />
          </g>
        </symbol>

        {/* 5. Roja con líneas blancas (grupo #1) */}
        <symbol id="leaf5" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st1"
              d="M951.8,211.8c0,0-25-51.2,27.2-76C979,135.8,1003.1,182.3,951.8,211.8z"
            />
            <path
              className="st3"
              d="M949.9,165.1c0,0,11.1,4.9,10,11.4s-14,4.9-14,4.9"
            />
            <path
              className="st4"
              d="M965.2,144.9c0,0-2.1,9.5,2.3,14.4c4.5,4.9,15.2,18.4,11.7,24.1c-3.5,5.7-4,11.4-14.6,8.1s-16.4-2.7-18.8-2.1"
            />
            <path className="st3" d="M949.3,204.1c0,0,6.5-1,9.6,3.2" />
            <path
              className="st5"
              d="M979,136.6c0,0-0.5,7-2,10.9c-1.4,3.9-4.3,8.4,7.4,18.9"
            />
          </g>
        </symbol>

        {/* 6. Naranja con líneas blancas (grupo #2) */}
        <symbol id="leaf6" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st2"
              d="M486.6,802.2c0,0,65.4-22.1,42.2-88.3C528.7,713.9,468.2,732.8,486.6,802.2z"
            />
            <path
              className="st6"
              d="M528.4,763.9c0,0-13.7-5.4-18.3,1.1s7.8,16.2,7.8,16.2"
            />
            <path
              className="st7"
              d="M532.7,733.5c0,0-6.3,10-14.4,10.3c-8,0.3-28.8,2.6-30.7,10.4c-1.9,7.9-6.4,13.2,5.5,19.4
              c11.9,6.3,16.3,11.8,17.8,14.4"
            />
            <path className="st6" d="M495.3,797.7c0,0-4.7-6.5-10.9-5.5" />
            <path
              className="st8"
              d="M528.1,714.6c0,0-5.6,6.5-7.7,11s-3.5,10.9-22.6,9.8"
            />
          </g>
        </symbol>

        {/* 7. Amarilla con líneas café (grupo #3) */}
        <symbol id="leaf7" viewBox="0 0 1080 1080">
          <g transform="translate(0,0)">
            <path
              className="st0"
              d="M951.2,723.7c0,0-46.2-27.7-17.5-74.3C933.7,649.4,976.7,673.8,951.2,723.7z"
            />
            <path className="st9" d="M934.1,650.3c0,0,0.7,19.8-8.6,35.2" />
            <path
              className="st10"
              d="M942.9,657.4c0,0-8,24-8.2,29.8s-1.3,18.6,22.9,22.5"
            />
            <path className="st11" d="M948.4,663.5c0,0-7.5,36.8,10.1,36.6" />
            <path className="st12" d="M939.7,713.8c0,0,10.2,4.6,14.8,2.5" />
          </g>
        </symbol>
      </defs>

      {/* ===== Ramas fijas (tu SVG) ===== */}
      <g aria-label="Ramas">
        <style>{`.stBranches{fill:none;stroke:#780409;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}`}</style>
        <line
          className="stBranches"
          x1="292.8"
          y1="971.5"
          x2="322.4"
          y2="1001.2"
        />
        <polyline
          className="stBranches"
          points="297.2,884.2 316.2,922 322.4,1001.2 346.8,1081.3 "
        />
        <polyline
          className="stBranches"
          points="374.2,852.8 437.5,1054.5 457.8,1080 "
        />
        <line
          className="stBranches"
          x1="408"
          y1="881.2"
          x2="399.5"
          y2="933.3"
        />
        <path
          className="stBranches"
          d="M376.9,671.1l37.2,83.2c0,0,66,51.4,65.6,52.4c-0.3,1,60.2,96.8,60.2,96.8l4.4,73.8l-13.5,82.2v21.8"
        />
        <line
          className="stBranches"
          x1="376.9"
          y1="768.2"
          x2="414.1"
          y2="754.3"
        />
        <line
          className="stBranches"
          x1="518.7"
          y1="943.1"
          x2="544.4"
          y2="977.3"
        />
        <polyline
          className="stBranches"
          points="455.4,919.4 492,997.9 530.9,1059.5 "
        />
        <polyline
          className="stBranches"
          points="597.2,980 677.4,1045.3 701.4,1080 "
        />
        <line
          className="stBranches"
          x1="674.7"
          y1="985.1"
          x2="677.4"
          y2="1045.3"
        />
        <line
          className="stBranches"
          x1="728.5"
          y1="970.2"
          x2="769.8"
          y2="1078.1"
        />
        <path
          className="stBranches"
          d="M636.8,869l81.9,50.4l89.3,26.7l59.6,59.9c0,0,39.6,50.1,38.9,51.1c-0.7,1,7.8,22.8,7.8,22.8"
        />
        <line
          className="stBranches"
          x1="634.1"
          y1="928.6"
          x2="718.7"
          y2="919.4"
        />
        <line
          className="stBranches"
          x1="886.9"
          y1="963.8"
          x2="906.5"
          y2="1057.2"
        />
        <line className="stBranches" x1="945.1" y1="999" x2="991.8" y2="1080" />
        <line
          className="stBranches"
          x1="1013.4"
          y1="1035.8"
          x2="1080"
          y2="1041.6"
        />
        <polyline
          className="stBranches"
          points="869.9,873.4 995.5,963.8 1081.4,1024.2 "
        />
        <line
          className="stBranches"
          x1="955.9"
          y1="875.4"
          x2="995.5"
          y2="963.8"
        />
        <polyline
          className="stBranches"
          points="1081.4,861.6 985.7,846.3 851.7,807.4 763.3,691 705.5,619 676.4,497.5 593.8,377 544.4,380.7 483.1,347.2 "
        />
        <polyline
          className="stBranches"
          points="513,482.9 584,520.8 659.8,594.9 705.5,619 "
        />
        <polyline
          className="stBranches"
          points="571.1,472.1 584,520.8 540,537.4 "
        />
        <polyline
          className="stBranches"
          points="551,629.1 620.5,671.1 699.7,697.8 763.3,691 763.3,615.9 740,550.9 "
        />
        <line
          className="stBranches"
          x1="686.5"
          y1="459.6"
          x2="676.4"
          y2="497.5"
        />
        <polyline
          className="stBranches"
          points="585.7,735.5 657.2,792.1 740.3,822.7 851.7,807.4 "
        />
        <polyline
          className="stBranches"
          points="652,753 657.2,792.1 599.6,810.5 "
        />
        <polyline
          className="stBranches"
          points="1081.4,779.1 1007.7,761.1 925.5,719.8 875.7,706.6 "
        />
        <line
          className="stBranches"
          x1="959.3"
          y1="765.5"
          x2="1007.7"
          y2="761.1"
        />
        <line
          className="stBranches"
          x1="763.3"
          y1="409.8"
          x2="838.8"
          y2="421.3"
        />
        <polyline
          className="stBranches"
          points="758.9,501.5 834.4,522.2 952.6,623 1017.5,627.4 "
        />
        <path
          className="stBranches"
          d="M1021.5,700.1c-1,0.7,63.6-44.3,63.6-44.3l-67.7-28.4l-20.3-57.5l-80.9-91.4l-77.5-57.2l-40.9-43l-61.9-31.1"
        />
        <line className="stBranches" x1="828" y1="639.3" x2="952.6" y2="623" />
        <polyline
          className="stBranches"
          points="944.4,443.7 1015.8,488.3 1058.1,496.1 "
        />
        <polyline
          className="stBranches"
          points="1081.4,512.7 1058.1,496.1 1033.4,421.3 1006.3,292.4 903.4,257.9 820.2,162.1 "
        />
        <line
          className="stBranches"
          x1="838.8"
          y1="261.3"
          x2="903.4"
          y2="257.9"
        />
        <line
          className="stBranches"
          x1="952.9"
          y1="225.1"
          x2="957.4"
          y2="276"
        />
        <line
          className="stBranches"
          x1="1013.7"
          y1="204"
          x2="1006.3"
          y2="292.4"
        />
        <polyline
          className="stBranches"
          points="815.1,317.5 896,339.1 980,376 1033.4,421.3 "
        />
        <line className="stBranches" x1="965.2" y1="329.3" x2="980" y2="376" />
      </g>

      {/* ===== 7 hojas (una por símbolo) con animación ===== */}
      {[
        { id: "leaf4", x: 95, y: 960, r: -15, s: 0.55, d: 3.6, delay: 0.3 }, // amarilla pequeña abajo-izq
        { id: "leaf6", x: 300, y: 760, r: -25, s: 0.8, d: 4.2, delay: 0.6 }, // naranja con líneas
        { id: "leaf1", x: 520, y: 330, r: -20, s: 1.0, d: 5.0, delay: 0.1 }, // amarilla grande
        { id: "leaf3", x: 790, y: 430, r: 15, s: 0.6, d: 3.4, delay: 0.4 }, // naranja pequeña
        { id: "leaf7", x: 910, y: 620, r: 10, s: 0.7, d: 3.8, delay: 0.2 }, // amarilla con líneas café
        { id: "leaf2", x: 560, y: 760, r: 10, s: 0.9, d: 4.6, delay: 0.5 }, // roja lisa
        { id: "leaf5", x: 980, y: 140, r: 25, s: 0.8, d: 4.0, delay: 0.0 }, // roja con patrón arriba-dcha
      ].map((p) => (
        <motion.g
          key={p.id}
          transform={`translate(${p.x} ${p.y}) rotate(${p.r}) scale(${p.s})`}
          style={{ transformOrigin: "20% 80%" }}
          animate={sway}
          transition={{
            duration: p.d,
            delay: p.delay,
            ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut"],
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {/* Cada símbolo ya contiene SOLO UNA hoja, centrada con translate(0,0) */}
          <use href={`#${p.id}`} />
        </motion.g>
      ))}
    </svg>
  );
}

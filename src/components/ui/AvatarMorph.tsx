import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./AvatarMorph.module.css";

type AvatarMorphProps = {
  src: string;
  alt: string;
  /** Libellé affiché pendant la phase « Eau & Environnement » */
  waterLabel?: string;
  /** Libellé affiché pendant la phase « Data » */
  dataLabel?: string;
};

/** Badges technos qui orbitent pendant la phase Data. */
const techBadges = [
  { src: "/icons/python.svg", angle: 0 },
  { src: "/icons/powerbi.svg", angle: 72 },
  { src: "/icons/excel.svg", angle: 144 },
  { src: "/icons/sql-server.png", angle: 216 },
];

/** Hauteur (en px) des barres du mini graphique de la phase Data. */
const bars = [20, 32, 26, 40, 32];

const angle = (deg: number) => ({ "--a": `${deg}deg` }) as CSSProperties;

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.8c3.4 4 6 7.1 6 10.2a6 6 0 0 1-12 0c0-3.1 2.6-6.2 6-10.2z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14z" />
      <path d="M5 19l7-7" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9c2.5-3 5-3 7.5 0s5 3 7.5 0 3-2 5-1" />
      <path d="M2 16c2.5-3 5-3 7.5 0s5 3 7.5 0 3-2 5-1" />
    </svg>
  );
}

const waterBadges = [
  { icon: <DropIcon />, angle: 40 },
  { icon: <LeafIcon />, angle: 160 },
  { icon: <WaveIcon />, angle: 280 },
];

/**
 * Photo de profil animée : boucle de 14 s qui fait passer le visuel de
 * « Génie de l'Eau et de l'Environnement » (vagues, bulles) à « Data »
 * (grille, graphique, badges technos), avec une ligne de balayage qui
 * « convertit » la photo de haut en bas, puis revient en sens inverse.
 *
 * Composant serveur : 100 % CSS, aucune dépendance, aucun JavaScript client.
 * Respecte prefers-reduced-motion (état final « Data » figé).
 */
export default function AvatarMorph({
  src,
  alt,
  waterLabel = "Génie de l'Eau et de l'Environnement",
  dataLabel = "Data Analytics",
}: AvatarMorphProps) {
  return (
    <div className={styles.root}>
      <div className={styles.stage}>
        {/* Anneaux qui se relaient entre les deux phases */}
        <div className={`${styles.ring} ${styles.ringData}`} aria-hidden="true" />
        <div className={`${styles.ring} ${styles.ringWater}`} aria-hidden="true" />

        {/* Orbites décoratives */}
        <div className={`${styles.orbit} ${styles.orbitWater}`} aria-hidden="true">
          {waterBadges.map(({ icon, angle: a }) => (
            <div key={a} className={styles.orbitItem} style={angle(a)}>
              <span className={`${styles.badge} ${styles.badgeWater}`} style={angle(a)}>
                {icon}
              </span>
            </div>
          ))}
        </div>
        <div className={`${styles.orbit} ${styles.orbitData}`} aria-hidden="true">
          <div className={styles.orbitItem} style={angle(288)}>
            <span className={`${styles.badge} ${styles.badgeMl}`} style={angle(288)}>
              ML
            </span>
          </div>
          {techBadges.map(({ src: iconSrc, angle: a }) => (
            <div key={iconSrc} className={styles.orbitItem} style={angle(a)}>
              <span className={styles.badge} style={angle(a)}>
                <Image src={iconSrc} alt="" width={16} height={16} className={styles.badgeImg} />
              </span>
            </div>
          ))}
        </div>

        {/* Cadre photo */}
        <div className={styles.frame}>
          <Image
            src={src}
            alt={alt}
            width={160}
            height={160}
            priority
            className={styles.photo}
          />

          {/* Phase Eau & Environnement */}
          <div className={styles.water} aria-hidden="true">
            <div className={styles.waterTint} />
            <span className={styles.bubble} style={{ left: "18%", ["--d" as string]: "0s" }} />
            <span className={styles.bubble} style={{ left: "38%", ["--d" as string]: "1.2s" }} />
            <span className={styles.bubble} style={{ left: "60%", ["--d" as string]: "0.6s" }} />
            <span className={styles.bubble} style={{ left: "79%", ["--d" as string]: "1.8s" }} />
            <div className={`${styles.wave} ${styles.waveBack}`} />
            <div className={`${styles.wave} ${styles.waveFront}`} />
          </div>

          {/* Phase Data */}
          <div className={styles.data} aria-hidden="true">
            <div className={styles.dataTint} />
            <div className={styles.grid} />
            <div className={styles.bars}>
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={styles.bar}
                  style={{ height: `${h}px`, ["--d" as string]: `${i * 0.18}s` }}
                />
              ))}
            </div>
            <svg className={styles.trend} viewBox="0 0 160 160" fill="none">
              <polyline points="34,132 46,122 63,110 80,116 97,102 114,110 128,98" pathLength="1" />
            </svg>
          </div>

          {/* Ligne de balayage qui « convertit » la photo */}
          <div className={styles.scan} aria-hidden="true" />
        </div>
      </div>

      {/* Légende animée (décorative : le titre et la description portent le sens) */}
      <div className={styles.caption} aria-hidden="true">
        <span className={styles.capWater}>
          <i className={`${styles.dot} ${styles.dotWater}`} />
          {waterLabel}
        </span>
        <span className={styles.capData}>
          <i className={`${styles.dot} ${styles.dotData}`} />
          {dataLabel}
        </span>
      </div>
    </div>
  );
}
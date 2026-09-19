"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const phone = "tel:+15026928014";
export const text = "sms:+15026928014";
const links = [["Services","/services"],["Approach","/approach"],["About","/about"],["Contact","/contact"]] as const;

export function SiteHeader(){const pathname=usePathname();return <header className="nav nav-page"><Link className="logo" href="/" aria-label="The Ciprians Tree Service home"><Image src="/images/team-work.jpg" alt="The Ciprians Tree Service logo" width={991} height={1054} priority unoptimized/><span className="logo-lockup">The Ciprians<small>Tree Service · Shelbyville</small></span></Link><nav className="desktop">{links.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?"page":undefined}>{label}</Link>)}</nav><a className="call" href={phone}>Call for an estimate</a><details className="mobile"><summary>Menu</summary><div>{links.map(([label,href])=><Link key={href} href={href} aria-current={pathname===href?"page":undefined}>{label}</Link>)}<a href={phone}>Call now</a><a href={text}>Text the crew</a></div></details></header>}
export function SiteFooter(){return <footer><Link className="footer-logo" href="/"><Image src="/images/team-work.jpg" alt="The Ciprians Tree Service official logo" width={991} height={1054} unoptimized/><span className="logo-lockup">The Ciprians<small>Tree Service</small></span></Link><p>Tree service · lawn mowing · landscape care</p><div>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<a href={phone}>Call</a><a href={text}>Text</a></div><a className="powered" href="https://syncedupsolutions.com">Powered by SyncedUp</a></footer>}

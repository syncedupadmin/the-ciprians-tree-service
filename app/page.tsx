import Image from "next/image";
import Link from "next/link";
import {phone, text, SiteFooter, SiteHeader} from "./site-chrome";
const services=[
  {n:"01",title:"Tree removal",copy:"Planned removal for hazardous trees, land-clearing needs and spaces that need to open up safely."},
  {n:"02",title:"Pruning & care",copy:"Focused pruning and ongoing tree care to improve clearance, form, health and the way your property feels."},
  {n:"03",title:"Lawn mowing",copy:"Consistent mowing for homes, businesses and outdoor spaces that need a clean, maintained finish."}
];
export default function Home(){return <main>
  <a className="skip" href="#content">Skip to content</a>
  <SiteHeader />
  <section className="hero" id="top"><div className="hero-left"><p className="eyebrow">Over 20 years of hands-on experience</p><h1>Clear the risk.<br/><span>Keep the beauty.</span></h1><p>Tree removal, pruning, tree care and lawn mowing for properties in and around Shelbyville, Kentucky.</p><div className="actions"><a className="button primary" href={phone}>Request a free estimate</a><a className="button line" href={text}>Text the crew</a></div><div className="hero-meta"><span>904 Bland Ave<br/>Shelbyville, KY 40065</span><span>Tree care<br/>Lawn care</span></div></div><div className="hero-photo"><Image src="/images/tree-hero.jpg" alt="Mature green trees lining a quiet road" fill priority unoptimized sizes="(max-width:900px) 100vw, 48vw"/><span className="photo-tag">Built around the land you live on.</span></div></section>
  <div id="content">
    <section className="statement"><p>THE WORK</p><h2>Make the property safer.<br/>Leave it worth being proud of.</h2></section>
    <section className="services" id="services">{services.map((service)=><article key={service.title}><span>{service.n}</span><h3>{service.title}</h3><p>{service.copy}</p><Link href="/services">Explore service <b aria-hidden="true">→</b></Link></article>)}</section>
    <section className="feature" id="approach"><div className="feature-photo"><Image src="/images/landscape.jpg" alt="Dense green woodland seen from above" fill unoptimized sizes="(max-width:900px) 100vw, 52vw"/></div><div className="feature-copy"><p className="eyebrow">A practiced approach</p><h2>Decades teach you where to start.</h2><p>The Ciprians has more than 20 years of experience in tree felling, pruning and landscape care. Every job begins with the property in front of you: what needs attention, what needs protection and what a successful finish should look like.</p><ul><li>Assess the space and the work</li><li>Plan the safest practical approach</li><li>Complete the service with care for the property</li></ul><a className="text-link" href={phone}>Talk through the job <span aria-hidden="true">→</span></a></div></section>
    <section className="experience"><div className="rings" aria-hidden="true"><i/><i/><i/><i/></div><div><p className="eyebrow">Established experience</p><strong>20+</strong><span>years caring for trees and landscapes</span></div><blockquote>“A place to be proud of” begins with work that respects the whole property—not just the branch, trunk or patch of lawn in front of the crew.</blockquote></section>
    <section className="steps"><p className="eyebrow">How to begin</p><div><article><b>01</b><h3>Call or text</h3><p>Tell the crew what you are seeing and what you need handled.</p></article><article><b>02</b><h3>Review the property</h3><p>Scope the tree, lawn or clearing work before the plan is set.</p></article><article><b>03</b><h3>Schedule the work</h3><p>Choose the next practical time and keep the communication direct.</p></article></div></section>
    <section className="contact" id="contact"><div><p className="eyebrow">Shelbyville, Kentucky</p><h2>Let’s take care<br/>of the property.</h2></div><div className="contact-panel"><a href={phone}>Call <strong>502-692-8014</strong></a><a href={text}>Text <strong>502-692-8014</strong></a><a href="mailto:loscipriantree@gmail.com">Email <strong>loscipriantree@gmail.com</strong></a><a href="https://www.instagram.com/the_ciprians/">Instagram <strong>@the_ciprians</strong></a><address>904 Bland Ave<br/>Shelbyville, KY 40065</address></div></section>
  </div>
  <SiteFooter />
</main>}

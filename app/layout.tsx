import type { Metadata, Viewport } from "next";
import { Archivo_Black, Libre_Franklin } from "next/font/google";
import "./globals.css";
const display = Archivo_Black({ weight:"400", subsets:["latin"], variable:"--font-display" });
const body = Libre_Franklin({ subsets:["latin"], variable:"--font-body" });
const siteUrl = "https://the-ciprians-tree-service.vercel.app";
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#1d2c20"};
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:"The Ciprians Tree Service | Shelbyville, KY",description:"Tree removal, pruning, tree care and lawn mowing from a team with more than 20 years of experience in Shelbyville, Kentucky.",alternates:{canonical:siteUrl},robots:{index:false,follow:false,nocache:true},openGraph:{title:"The Ciprians Tree Service",description:"Clear the risk. Keep the beauty.",url:siteUrl,siteName:"The Ciprians Tree Service",type:"website",images:[{url:"/opengraph-image",width:1200,height:630,alt:"The Ciprians Tree Service in Shelbyville, Kentucky"}]},twitter:{card:"summary_large_image",images:["/opengraph-image"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>}

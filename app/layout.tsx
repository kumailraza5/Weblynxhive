import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Weblynx Hive — Digital Agency & Software House',description:'Video editing, custom software, SaaS, Shopify, WordPress, Webflow and digital marketing. A connected creative and development agency founded by Kumail Raza.',icons:{icon:{url:'/weblynx-hive-favicon.png',type:'image/png'},shortcut:'/weblynx-hive-favicon.png',apple:'/weblynx-hive-favicon.png'},openGraph:{title:'Weblynx Hive — Ideas into digital impact',description:'Creative agency. Software house. Your next digital partner.',images:['/logo.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

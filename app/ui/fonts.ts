import {Inter, Lusitana} from 'next/font/google'; //Inter font from this module (primary font)
export const inter = Inter({ subsets: ['latin'] }); //subset of Inter
export const lusitana = Lusitana({ 
    subsets: ['latin'],
    weight: ['400', '700'] 
});

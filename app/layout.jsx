import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';


export const metadata = {
    title: 'PropertyPulse | Find the Pertfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties, rent apartment',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <Navbar />
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default MainLayout
export const Footer = () =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14
        bg-gray-100 text-gray-600">
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">ABOUT</h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>


                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">COMMUNITY</h5>
                    <p>Accessibility</p>
                    <p>This is not a real site</p>
                    <p>Clone</p>
                    <p>Github</p>
                    <p>Travel</p>
                </div>
                
                
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">HOST</h5>
                    <p>Local</p>
                    <p>International</p>
                    <p>Become a host</p>
                    <p>New features</p>
                    <p>Hotels</p>
                </div>
                
                
                <div className="space-y-4 text-xs text-gray-800">
                    <h5 className="font-bold">SUPPORT</h5>
                    <p>Help center</p>
                    <p>Trust & Safety</p>
                    <p>Get in touch</p>
                    <p>Track you application</p>
                    <p>Location</p>
                </div>
                
        </div>
    )
}
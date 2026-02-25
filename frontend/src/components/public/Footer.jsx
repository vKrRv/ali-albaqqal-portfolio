const CopyRight = () => {
    // const currentYear = new Date().getFullYear(); // Will be used when the year 2026 pass.
    return (
        <p>
            &copy; Copyright 2026{/*-{currentYear}*/} Ali Albaqqal.
            All rights reserved.
        </p>
    );
};

const Footer = () => {

    return (
        <footer className="flex justify-between items-center p-6 px-8 bg-gray-900 text-white">
            <CopyRight />
            <div className="flex gap-4">
                <a href="https://LinkedIn.com/in/AliAlbaqqal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/vKrRv" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>  
    );
};

export default Footer;
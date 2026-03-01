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
        <footer className="flex flex-col gap-2 md:flex-row justify-between items-center md:px-6 p-4 bg-gray-900 text-white text-xs md:text-lg">
            <CopyRight />
            <div className="flex md:gap-4">
                <a
                href="https://LinkedIn.com/in/AliAlbaqqal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-base text-blue-50"
                >
                    Linked<span className="text-blue-500">In</span>
                </a>
                <a
                href="https://github.com/vKrRv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-base"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
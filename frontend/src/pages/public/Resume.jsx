const Resume = () => {

    const resumeUrl = "https://res.cloudinary.com/dhrfdi95u/image/upload/v1773631359/Ali_Albaqqal_CV_bi9iqh.pdf";
    const downloadUrl = resumeUrl.replace('/upload/', '/upload/fl_attachment:Ali_Albaqqal_Resume/');

    return (
        <div className="max-w-5xl mx-auto px-4 py-20 font-sans">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-white">My Resume</h1>
                
                {/* Fallback download button just in case their browser doesn't support iframes */}
                <a 
                    href={downloadUrl} 
                    download="Ali_Albaqqal_CV.pdf"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                    Download PDF
                </a>
            </div>

            {/* The actual PDF viewer container */}
            <div className="w-full h-[142vh] min-h-[600px] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                <iframe 
                    src={`${resumeUrl}#toolbar=0`} // #toolbar=0 hides the default browser PDF header for a cleaner look
                    title="Resume"
                    className="w-full h-full border-none"
                />
            </div>
        </div>
    );
};

export default Resume;
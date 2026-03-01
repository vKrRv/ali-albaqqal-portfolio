import { motion } from "framer-motion";

const LoadingCircleSpinner = () => {
    return (
        <div className="flex justify-center items-center p-10 rounded-lg min-h-[70vh]">
            <motion.div
                className="w-12 h-12 rounded-full border-4 border-slate-700 border-t-blue-500"
                animate={{ rotate: 360 }} // Framer Motion shorthand for transform: rotate(360deg)
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default LoadingCircleSpinner;
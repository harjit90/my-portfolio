import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";

const ImageViewerModal = ({ projects = [], currentId, onClose }) => {

    // SAFETY CHECK
    if (!projects.length) return null;

    const startIndex = projects.findIndex(
        (p) => String(p.id) === String(currentId)
    );

    const [index, setIndex] = useState(startIndex !== -1 ? startIndex : 0);
    const [scale, setScale] = useState(1);
    const imageRef = useRef(null);

    useEffect(() => {
        setScale(1);
    }, [index]);

    const zoomIn = () => setScale((prev) => Math.min(prev + 3, 6));
    const zoomOut = () => setScale((prev) => Math.max(prev - 3, 1));

    const next = () =>
        setIndex((prev) => (prev + 1) % projects.length);

    const prev = () =>
        setIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );


    useEffect(() => {
        const container = imageRef.current?.parentElement;
        if (!container) return;

        let isDragging = false;
        let startX, startY, scrollLeft, scrollTop;

        const mouseDown = (e) => {
            if (!e.code && !e.buttons) return;
            isDragging = true;
            startX = e.pageX - container.offsetLeft;
            startY = e.pageY - container.offsetTop;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
        };

        const mouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const y = e.pageY - container.offsetTop;
            container.scrollLeft = scrollLeft - (x - startX);
            container.scrollTop = scrollTop - (y - startY);
        };

        const mouseUp = () => (isDragging = false);

        container.addEventListener("mousedown", mouseDown);
        container.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);

        return () => {
            container.removeEventListener("mousedown", mouseDown);
            container.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        };
    }, []);



    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-6 text-white text-3xl"
            >
                ×
            </button>

            {/* Controls */}

            <div className="absolute bottom-1/2 top-1/2 z-40 w-full mx-auto flex gap-3 justify-center text-2xl text-white">
                <button onClick={prev} className="btn absolute left-5 max-md:left-2 cursor-pointer"><FaAngleLeft /></button>
                <button onClick={next} className="btn absolute right-5 max-md:right-2 cursor-pointer"><FaAngleRight /></button>
            </div>

            <div className="absolute bottom-6 z-30 bg-[#0F172A]/85 left-0 right-0 w-20 py-1.5 text-white rounded-full mx-auto flex gap-3 justify-center text-2xl">
                <button onClick={zoomIn} className="btn cursor-pointer"><FiZoomIn /></button>
                <button onClick={zoomOut} className="btn cursor-pointer"><FiZoomOut /></button>
            </div>

            {/* Image container */}
            <div className="w-[90vw] h-[95vh] max-md:w-[80vw] max-md:h-[80vh] overflow-auto cursor-grab flex justify-center no-scrollbar overflow-y-scroll" style={{ scrollbarWidth: 0 }}>
                <img
                    ref={imageRef}
                    src={projects[index]?.projectImg}
                    alt=""
                    draggable={false}
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "top",
                        scrollbarColor: "red"
                    }}
                    className="transition-transform duration-200 select-none "
                />
            </div>
        </div>
    );
};

export default ImageViewerModal;

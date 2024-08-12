import { useEffect, useRef } from 'react';

const useScrollIn = (options = { root: null, rootMargin: '0px', threshold: 0.5 }) => {
    const elementsRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    useEffect(() => {
        const currentElements = elementsRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("slide-right")) {
                        entry.target.classList.add("slide-right-appear")

                    }
                    if (entry.target.classList.contains("slide-in")) {
                        entry.target.classList.add("slide-in-appear")
                    }
                    if (entry.target.classList.contains("slide-left")) {
                        entry.target.classList.add("slide-left-appear")
                    }
                    observer.observe(entry.target)
                }
            });
        }, options);

        currentElements.forEach((element) => {
            if (element) observer.observe(element);
        });

        return () => {
            currentElements.forEach((element) => {
                if (element) observer.unobserve(element);
            });
        };
    }, [options]);

    return addToRefs;
};

export default useScrollIn;

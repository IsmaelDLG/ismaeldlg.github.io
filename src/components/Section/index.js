function Section({ id, className, children }) {
    return (
        <section id={id} className={`w-3/5 min-h-[calc(100dvh-64px)] mx-auto md:flex md:flex-row items-center ${className}`}>
            {children}
        </section>
    );
}

export default Section;
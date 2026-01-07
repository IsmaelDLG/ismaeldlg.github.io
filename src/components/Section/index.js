function Section({ id, className, children }) {
    return (
        <section id={id} className={`w-3/5 h-dvh mx-auto md:flex md:flex-row items-center ${className}`}>
            {children}
        </section>
    );
}

export default Section;
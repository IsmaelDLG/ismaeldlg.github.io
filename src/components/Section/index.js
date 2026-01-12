function Section({ id, className, children }) {
    return (
        <section id={id} className={`w-3/5 min-h-screen mx-auto flex md:flex-row items-center justify-center ${className ?? ""} pt-20 pb-20`}>
            {children}
        </section>
    );
}

export default Section;
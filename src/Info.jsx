
function Info(props) {
    return(
        <section className="more-info">
            <h2>{props.title}</h2>
            <p>
                {props.text}
            </p>
        </section>
    )
};

export default Info
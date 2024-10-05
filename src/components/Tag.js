function Tag(props) {
    return (
        <div className={`tag ${props.color}`}>
            {props.tagName}
        </div>
    );
}
export default Tag;
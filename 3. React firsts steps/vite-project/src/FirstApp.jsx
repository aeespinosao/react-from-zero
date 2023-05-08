import PropTypes from 'prop-types';

export const FirstApp = ({title = "Hi, how you doing?", subTitle}) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    subTitle: 'No hay subtitulo'
}
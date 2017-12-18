import React from 'react';
import Image from './ImageStyle';

class Img extends React.Component {
    render() {

        const {
            src,
            alt,
            style,
            className
        } = this.props;

        return (
            <Image src={src}
                   alt={alt}
                   style={style}
                   className={className}
                   {...this.props}
            />
        )
    }
}


export default Img;

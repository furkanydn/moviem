import React from "react";
import LazyLoad from "vanilla-lazyload";
import lazyconfig from "./config/lazyconfig";

if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad(lazyconfig);
}
export class LazyImage extends React.Component {
    componentDidMount() {
        document.lazyLoadInstance.update();
    }
    componentDidUpdate() {
        document.lazyLoadInstance.update();
    }

    render(){
        const { alt, src, srcset, sizes, width, height } = this.props;
        return (
            <img
                alt={alt}
                className="lazy"
                data-src={src}
                data-srcset={srcset}
                data-sizes={sizes}
                width={width}
                height={height}
            />
        );
    }
}

export default LazyImage

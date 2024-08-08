import React from "react";

export default function Carousel({children: slides}) {
    return (
        <div>
            <div>
                {slides}
            </div>
        </div> 
    );
};

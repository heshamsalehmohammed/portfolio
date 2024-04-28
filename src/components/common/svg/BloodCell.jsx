import React, { Component } from 'react';
import "./BloodCell.scss";

class BloodCell extends Component {
    render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="polylion"
                viewBox="0 0 300 300"
            >
                <defs>
                    <filter id="polycleaner" colorInterpolationFilters="sRGB">
                        <feComponentTransfer>
                            <feFuncA tableValues="0 0.5 1 1" type="table"></feFuncA>
                        </feComponentTransfer>
                    </filter>
                </defs>
                <g filter="url(#polycleaner)">
                    <path
                        fill="#B32222"
                        d="M82.473 195.104L127.299 223.921 136.905 195.104z"
                    ></path>
                    <path
                        fill="#B21C1D"
                        d="M127.299 223.921L159.318 259.142 178.53 220.719z"
                    ></path>
                    <path
                        fill="#A42D2E"
                        d="M111.29 60.624L72.867 86.239 120.896 102.248z"
                    ></path>
                    <path
                        fill="#C02626"
                        d="M111.29 150.277L82.473 195.104 136.905 195.104z"
                    ></path>
                    <path
                        fill="#B12E32"
                        d="M178.53 220.719L200.943 246.334 213.751 220.719z"
                    ></path>
                    <path
                        fill="#B31F20"
                        d="M69.665 153.479L82.473 195.104 111.29 150.277z"
                    ></path>
                    <path
                        fill="#B72F33"
                        d="M120.896 102.248L53.656 121.46 111.29 150.277z"
                    ></path>
                    <path
                        fill="#BD3535"
                        d="M72.867 86.239L53.656 121.46 120.896 102.248z"
                    ></path>
                    <path
                        fill="#CD3738"
                        d="M53.656 121.46L69.665 153.479 111.29 150.277z"
                    ></path>
                    <path
                        fill="#961D1C"
                        d="M159.318 259.142L200.943 246.334 178.53 220.719z"
                    ></path>
                    <path
                        fill="#B52A2D"
                        d="M293.798 166.286L284.192 127.864 280.991 169.488z"
                    ></path>
                    <path
                        fill="#DA4344"
                        d="M252.173 147.075L268.183 102.248 220.154 127.864z"
                    ></path>
                    <path
                        fill="#AB3035"
                        d="M297 211.113L293.798 166.286 280.991 169.488z"
                    ></path>
                    <path
                        fill="#C73132"
                        d="M284.192 127.864L268.183 102.248 252.173 147.075z"
                    ></path>
                    <path
                        fill="#BB2D2F"
                        d="M236.164 239.93L264.981 211.113 213.751 220.719z"
                    ></path>
                    <path
                        fill="#D23E3D"
                        d="M213.751 220.719L264.981 211.113 207.347 179.094z"
                    ></path>
                    <path
                        fill="#A32727"
                        d="M200.943 246.334L236.164 239.93 213.751 220.719z"
                    ></path>
                    <path
                        fill="#D94444"
                        d="M207.347 179.094L264.981 211.113 248.972 166.286z"
                    ></path>
                    <path
                        fill="#CB3233"
                        d="M248.972 166.286L264.981 211.113 280.991 169.488z"
                    ></path>
                    <path
                        fill="#C73132"
                        d="M280.991 169.488L284.192 127.864 252.173 147.075z"
                    ></path>
                    <path
                        fill="#B12F31"
                        d="M178.53 131.066L120.896 102.248 140.107 140.671z"
                    ></path>
                    <path
                        fill="#BC2D2E"
                        d="M178.53 220.719L207.347 179.094 136.905 195.104z"
                    ></path>
                    <path
                        fill="#BA282A"
                        d="M213.751 220.719L207.347 179.094 178.53 220.719z"
                    ></path>
                    <path
                        fill="#B33132"
                        d="M120.896 102.248L111.29 150.277 140.107 140.671z"
                    ></path>
                    <path
                        fill="#A53335"
                        d="M274.587 239.93L297 211.113 264.981 211.113z"
                    ></path>
                    <path
                        fill="#CE3535"
                        d="M280.991 169.488L252.173 147.075 248.972 166.286z"
                    ></path>
                    <path
                        fill="#B52F30"
                        d="M111.29 150.277L136.905 195.104 140.107 140.671z"
                    ></path>
                    <path
                        fill="#D23C3D"
                        d="M252.173 147.075L220.154 127.864 207.347 179.094z"
                    ></path>
                    <path
                        fill="#D23D3D"
                        d="M248.972 166.286L252.173 147.075 207.347 179.094z"
                    ></path>
                    <path
                        fill="#C23636"
                        d="M207.347 179.094L220.154 127.864 178.53 131.066z"
                    ></path>
                    <path
                        fill="#A52E2F"
                        d="M120.896 102.248L168.924 67.028 111.29 60.624z"
                    ></path>
                    <path
                        fill="#AD2C2D"
                        d="M178.53 131.066L168.924 67.028 120.896 102.248z"
                    ></path>
                    <path
                        fill="#A12E31"
                        d="M168.924 67.028L133.703 28.605 111.29 60.624z"
                    ></path>
                    <path
                        fill="#A13233"
                        d="M133.703 28.605L92.079 38.211 111.29 60.624z"
                    ></path>
                    <path
                        fill="#B82C2F"
                        d="M220.154 127.864L226.558 73.431 178.53 131.066z"
                    ></path>
                    <path
                        fill="#B53334"
                        d="M53.656 63.826L72.867 86.239 111.29 60.624z"
                    ></path>
                    <path
                        fill="#B82D2F"
                        d="M140.107 140.671L207.347 179.094 178.53 131.066z"
                    ></path>
                    <path
                        fill="#BE3333"
                        d="M136.905 195.104L207.347 179.094 140.107 140.671z"
                    ></path>
                    <path
                        fill="#B32E2F"
                        d="M191.337 70.23L168.924 67.028 178.53 131.066z"
                    ></path>
                    <path
                        fill="#A9191A"
                        d="M136.905 195.104L127.299 223.921 178.53 220.719z"
                    ></path>
                    <path
                        fill="#B62B2B"
                        d="M82.473 195.104L95.28 259.142 127.299 223.921z"
                    ></path>
                    <path
                        fill="#B02626"
                        d="M127.299 223.921L95.28 259.142 159.318 259.142z"
                    ></path>
                    <path
                        fill="#B94848"
                        d="M95.28 259.142L136.905 281.555 159.318 259.142z"
                    ></path>
                    <path
                        fill="#BD2B2A"
                        d="M50.454 220.719L95.28 259.142 82.473 195.104z"
                    ></path>
                    <path
                        fill="#CB3131"
                        d="M12.031 156.681L28.041 188.7 50.454 220.719 82.473 195.104z"
                    ></path>
                    <path
                        fill="#D53837"
                        d="M5.627 121.46L12.031 156.681 53.656 121.46z"
                    ></path>
                    <path
                        fill="#D23D3C"
                        d="M53.656 121.46L12.031 156.681 69.665 153.479z"
                    ></path>
                    <path
                        fill="#BF3030"
                        d="M69.665 153.479L12.031 156.681 82.473 195.104z"
                    ></path>
                    <path
                        fill="#A53A3A"
                        d="M136.905 281.555L165.722 291.16 159.318 259.142z"
                    ></path>
                    <path
                        fill="#8E3839"
                        d="M248.972 284.757L271.385 268.747 274.587 239.93z"
                    ></path>
                    <path
                        fill="#902728"
                        d="M274.587 239.93L290.596 243.132 297 211.113z"
                    ></path>
                    <path
                        fill="#93302F"
                        d="M271.385 268.747L290.596 243.132 274.587 239.93z"
                    ></path>
                    <path
                        fill="#DE3F3E"
                        d="M72.867 86.239L5.627 92.643 53.656 121.46z"
                    ></path>
                    <path
                        fill="#A03838"
                        d="M165.722 291.16L200.943 294.362 159.318 259.142z"
                    ></path>
                    <path
                        fill="#9D272A"
                        d="M236.164 239.93L248.972 284.757 264.981 211.113z"
                    ></path>
                    <path
                        fill="#8F3131"
                        d="M200.943 294.362L248.972 284.757 200.943 246.334z"
                    >
                    </path>
                    <path
                        fill="#922625"
                        d="M159.318 259.142L200.943 294.362 200.943 246.334z"
                    ></path>
                    <path
                        fill="#902324"
                        d="M200.943 246.334L248.972 284.757 236.164 239.93z"
                    ></path>
                    <path
                        fill="#C33D3E"
                        d="M133.703 28.605L63.261 9.393 92.079 38.211z"
                    ></path>
                    <path
                        fill="#AD292D"
                        d="M191.337 70.23L200.943 35.009 168.924 67.028z"
                    ></path>
                    <path
                        fill="#A92D31"
                        d="M200.943 35.009L165.722 15.797 168.924 67.028z"
                    ></path>
                    <path
                        fill="#B42C30"
                        d="M226.558 73.431L200.943 35.009 191.337 70.23z"
                    ></path>
                    <path
                        fill="#C54344"
                        d="M136.905 6.192L95.28 2.99 133.703 28.605z"
                    ></path>
                    <path
                        fill="#AD3031"
                        d="M168.924 67.028L165.722 15.797 133.703 28.605z"
                    ></path>
                    <path
                        fill="#B42829"
                        d="M220.154 127.864L245.77 73.431 226.558 73.431z"
                    ></path>
                    <path
                        fill="#BF3E40"
                        d="M245.77 73.431L223.356 51.018 226.558 73.431z"
                    ></path>
                    <path
                        fill="#BC4041"
                        d="M223.356 51.018L200.943 35.009 226.558 73.431z"
                    ></path>
                    <path
                        fill="#D44747"
                        d="M92.079 38.211L47.252 18.999 53.656 63.826z"
                    ></path>
                    <path
                        fill="#ED4949"
                        d="M47.252 18.999L24.839 38.211 53.656 63.826z"
                    ></path>
                    <path
                        fill="#DA3D3F"
                        d="M53.656 63.826L12.031 60.624 72.867 86.239z"
                    ></path>
                    <path
                        fill="#DD4040"
                        d="M5.627 92.643L5.627 121.46 53.656 121.46z"
                    ></path>
                    <path
                        fill="#E74443"
                        d="M12.031 60.624L5.627 92.643 72.867 86.239z"
                    ></path>
                    <path
                        fill="#F04748"
                        d="M24.839 38.211L12.031 60.624 53.656 63.826z"
                    ></path>
                    <path
                        fill="#B03434"
                        d="M92.079 38.211L53.656 63.826 111.29 60.624z"
                    ></path>
                    <path
                        fill="#D74F4F"
                        d="M63.261 9.393L47.252 18.999 92.079 38.211z"
                    ></path>
                    <path
                        fill="#D85C5B"
                        d="M95.28 2.99L63.261 9.393 133.703 28.605z"
                    ></path>
                    <path
                        fill="#BA393B"
                        d="M165.722 15.797L136.905 6.192 133.703 28.605z"
                    ></path>
                    <path
                        fill="#B22D2E"
                        d="M226.558 73.431L191.337 70.23 178.53 131.066z"
                    ></path>
                    <path
                        fill="#C73233"
                        d="M268.183 102.248L245.77 73.431 220.154 127.864z"
                    ></path>
                    <path
                        fill="#BB2F31"
                        d="M264.981 211.113L297 211.113 280.991 169.488z"
                    ></path>
                    <path
                        fill="#952524"
                        d="M264.981 211.113L248.972 284.757 274.587 239.93z"
                    ></path>
                </g>
            </svg>
        );
    }
}

export default BloodCell;

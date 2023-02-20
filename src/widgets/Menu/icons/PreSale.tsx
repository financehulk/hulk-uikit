import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M21.8946 9.89L20.8446 5.52C20.6246 4.62 19.8446 4 18.9346 4H16.7246H14.7146H12.9946H10.9946H9.27464H7.25464H5.04464C4.14464 4 3.35464 4.63 3.14464 5.52L2.09464 9.89C1.85464 10.91 2.07464 11.95 2.71464 12.77C2.79464 12.88 2.90464 12.96 2.99464 13.06V20C2.99464 21.1 3.89464 22 4.99464 22H18.9946C20.0946 22 20.9946 21.1 20.9946 20V13.06C21.0846 12.97 21.1946 12.88 21.2746 12.78C21.9146 11.96 22.1446 10.91 21.8946 9.89ZM7.01464 6L6.43464 10.86C6.35464 11.51 5.83464 12 5.22464 12C4.73464 12 4.42464 11.71 4.29464 11.53C4.03464 11.2 3.94464 10.77 4.04464 10.36L5.04464 6H7.01464ZM18.9046 5.99L19.9546 10.36C20.0546 10.78 19.9646 11.2 19.7046 11.53C19.5646 11.71 19.2646 12 18.7646 12C18.1546 12 17.6246 11.51 17.5546 10.86L16.9746 6L18.9046 5.99ZM15.5046 10.52C15.5546 10.91 15.4346 11.3 15.1746 11.59C14.9446 11.85 14.6246 12 14.2146 12C13.5446 12 12.9946 11.41 12.9946 10.69V6H14.9546L15.5046 10.52ZM10.9946 10.69C10.9946 11.41 10.4446 12 9.70464 12C9.36463 12 9.05464 11.85 8.81464 11.59C8.56464 11.3 8.44464 10.91 8.48464 10.52L9.03464 6H10.9946V10.69ZM17.9946 20H5.99464C5.44464 20 4.99464 19.55 4.99464 19V13.97C5.07464 13.98 5.14464 14 5.22464 14C6.09464 14 6.88464 13.64 7.46464 13.05C8.06464 13.65 8.86464 14 9.77464 14C10.6446 14 11.4246 13.64 12.0046 13.07C12.5946 13.64 13.3946 14 14.2946 14C15.1346 14 15.9346 13.65 16.5346 13.05C17.1146 13.64 17.9046 14 18.7746 14C18.8546 14 18.9246 13.98 19.0046 13.97V19C18.9946 19.55 18.5446 20 17.9946 20Z" fill="#3CBD0E"/>
    </Svg>
  );
};

export default Icon;

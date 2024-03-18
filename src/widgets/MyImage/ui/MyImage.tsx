import { FC, ImgHTMLAttributes, useEffect, useState } from 'react';

interface IMyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc: string;
  className: string;
}

export const MyImage: FC<IMyImageProps> = ({
  src,
  placeholderSrc,
  className,
  ...otherProps
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <img
      className={className}
      src={imageSrc}
      alt={otherProps.alt}
      {...otherProps}
    />
  );
};

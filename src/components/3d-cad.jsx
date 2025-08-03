import { cn } from '../lib/utils';
import React from 'react';
import PropTypes from 'prop-types';

const MouseEnterContext = React.createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = React.useRef(null);
  const [isMouseEntered, setIsMouseEntered] = React.useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return React.createElement(
    MouseEnterContext.Provider,
    { value: [isMouseEntered, setIsMouseEntered] },
    React.createElement(
      'div',
      {
        className: cn('flex items-center justify-center', containerClassName),
        style: { perspective: '1000px' }
      },
      React.createElement(
        'div',
        {
          ref: containerRef,
          onMouseEnter: handleMouseEnter,
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
          className: cn(
            'flex items-center justify-center relative transition-all duration-200 ease-linear',
            className
          ),
          style: { transformStyle: 'preserve-3d' }
        },
        children
      )
    )
  );
};

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string
};

export const CardBody = ({ children, className }) => {
  return React.createElement(
    'div',
    {
      className: cn(
        'h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
        className
      )
    },
    children
  );
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = React.useRef(null);
  const [isMouseEntered] = useMouseEnter();

  const handleAnimations = React.useCallback(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  React.useEffect(() => {
    handleAnimations();
  }, [handleAnimations]);

  return React.createElement(
    Tag,
    {
      ref: ref,
      className: cn('w-fit transition duration-200 ease-linear', className),
      ...rest
    },
    children
  );
};

CardItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  translateZ: PropTypes.number,
  rotateX: PropTypes.number,
  rotateY: PropTypes.number,
  rotateZ: PropTypes.number
};

export const useMouseEnter = () => {
  const context = React.useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};

// Add display names for better debugging
CardContainer.displayName = 'CardContainer';
CardBody.displayName = 'CardBody';
CardItem.displayName = 'CardItem';
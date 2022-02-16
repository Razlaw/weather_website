import {useEffect, useRef, useState} from "react";

export function utcTimeFromUTCUnix(unixUTCTimeInSeconds) {
    const dateUTC = new Date(unixUTCTimeInSeconds * 1000);
    const hoursUTC = dateUTC.getUTCHours();
    let minutesUTC = dateUTC.getUTCMinutes().toString();
    minutesUTC = minutesUTC.length === 1 ? "0" + minutesUTC : minutesUTC;
    let secondsUTC = dateUTC.getUTCSeconds().toString();
    secondsUTC = secondsUTC.length === 1 ? "0" + secondsUTC : secondsUTC;

    return hoursUTC + ':' + minutesUTC + ':' + secondsUTC;
}

export function localTimeFromUTCUnix(unixUTCTimeInSeconds) {
    const date = new Date(unixUTCTimeInSeconds * 1000);
    const hours = date.getHours();
    let minutes = date.getMinutes().toString();
    minutes = minutes.length === 1 ? "0" + minutes : minutes;
    let seconds = date.getSeconds().toString();
    seconds = seconds.length === 1 ? "0" + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

export function utcDateFromUTCUnix(unixUTCTimeInSeconds) {
    const dateUTC = new Date(unixUTCTimeInSeconds * 1000);
    return {"day": dateUTC.getUTCDate(), "weekday": dateUTC.getUTCDay(), "month": dateUTC.getUTCMonth() + 1};
}

/**
 * Provides the basic functionality for a 2D scroll snap for touch swipe scrolls.
 *
 * Maintains a state for the currentSlidePosition being updated on touch scroll swipes in a range from [0, 0]
 * to [numberOfHorizontalSlides, numberOfVerticalSlides].
 *
 * Example usage within a react functional component:
 *
 * const [currentSlidePosition, handleTouchStart, scrollOnSwipe] = ScrollSnap2D(0, 2);
 *
 * return (
 *   <div className="slideContainer"
 *     onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
 *     onTouchMove={touchMoveEvent => scrollOnSwipe(touchMoveEvent)}
 *   >
 *     <div className="slide" style={{transform: `translateY(-${currentSlidePosition.y * 100}%)`}}>
 *       <h1>Content of first slide.</h1>
 *     </div>
 *     <div className="slide" style={{transform: `translateY(${(1 - currentSlidePosition.y) * 100}%)`}}>
 *       <h1>Content of second slide.</h1>
 *     </div>
 *   </div>
 * );
 *
 * @param {number} numberOfHorizontalSlides - The number of horizontal slides in x direction you want to scroll through.
 * @param {number} numberOfVerticalSlides - The number of vertical slides in y direction you want to scroll through.
 * @returns {Array} The current slide position, a function to call onTouchStart, and a function to call on onTouchMove.
 */
export function ScrollSnap2D(numberOfHorizontalSlides, numberOfVerticalSlides) {
    const minSlidePosition = {x: 0, y: 0};
    const maxSlidePosition = {x: Math.max(0, numberOfHorizontalSlides - 1),
        y: Math.max(0, numberOfVerticalSlides - 1)};
    const [currentSlidePosition, setCurrentSlide] = useState(minSlidePosition);

    const touchStartPosition = useRef([0, 0]);
    const isAwaitingScroll = useRef(false);

    /* Saves starting point of touch to check for a vertical scroll on swipe. */
    function handleTouchStart(e) {
        e.preventDefault();
        touchStartPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
        isAwaitingScroll.current = true;
    }

    /**
    * Checks for a swipe and scrolls into according direction.
    *
    * isAwaitingScroll is used to block further scrolling if swipe continues longer than scroll animation.
    */
    function scrollOnSwipe(e) {
        e.preventDefault();
        if (isAwaitingScroll.current) {
            const touchCurrentPosition = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
            const swipeVectorX = touchCurrentPosition[0] - touchStartPosition.current[0];
            const swipeVectorY = touchCurrentPosition[1] - touchStartPosition.current[1];
            const isSwipingHorizontally = Math.abs(swipeVectorX) > Math.abs(swipeVectorY);

            if (isSwipingHorizontally) {
                const isSwipingRight = swipeVectorX > 0;
                const isSwipingLeft = swipeVectorX < 0;

                if (isSwipingRight) {
                    const newHorizontalSlidePosition = currentSlidePosition.x > minSlidePosition.x ? currentSlidePosition.x - 1 : currentSlidePosition.x;
                    setCurrentSlide({x: newHorizontalSlidePosition, y: currentSlidePosition.y})
                }
                if (isSwipingLeft) {
                    const newHorizontalSlidePosition = currentSlidePosition.x < maxSlidePosition.x ? currentSlidePosition.x + 1 : currentSlidePosition.x;
                    setCurrentSlide({x: newHorizontalSlidePosition, y: currentSlidePosition.y});
                }
                isAwaitingScroll.current = false;
            }
            else {
                const isSwipingDown = swipeVectorY > 0;
                const isSwipingUp = swipeVectorY < 0;

                if (isSwipingDown) {
                    const newVerticalSlidePosition = currentSlidePosition.y > minSlidePosition.y ? currentSlidePosition.y - 1 : currentSlidePosition.y;
                    setCurrentSlide({x: minSlidePosition.x, y: newVerticalSlidePosition})
                }
                if (isSwipingUp) {
                    const newVerticalSlidePosition = currentSlidePosition.y < maxSlidePosition.y ? currentSlidePosition.y + 1 : currentSlidePosition.y;
                    setCurrentSlide({x: minSlidePosition.x, y: newVerticalSlidePosition});
                }
                isAwaitingScroll.current = false;
            }

        }
    }

    return [currentSlidePosition, handleTouchStart, scrollOnSwipe];
}

function getWindowInnerHeight() {
    const {innerHeight: height} = window;
    return height;
}

/**
 * Tracks the maximal inner height of the window.
 *
 * @returns {number} A state consisting of the maximal inner height of the window.
 */
export function MaxWindowInnerHeight() {
    const [maxWindowInnerHeight, setMaxWindowInnerHeight] = useState(getWindowInnerHeight());

    useEffect(() => {
        function handleResize() {
            const currentWindowInnerHeight = getWindowInnerHeight();
            if (currentWindowInnerHeight > maxWindowInnerHeight) {
                setMaxWindowInnerHeight(currentWindowInnerHeight);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },);

    return maxWindowInnerHeight;
}
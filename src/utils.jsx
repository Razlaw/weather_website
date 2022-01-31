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

/**
 * Provides the basic functionality for a vertical scroll snap for touch swipe scrolls.
 *
 * Maintains a state for the currentSlideId being updated on vertical touch scroll swipes in a range from zero
 * to numberOfSlides.
 *
 * Example usage within a react functional component:
 *
 * const [currentSlideId, handleTouchStart, scrollOnVerticalSwipe] = VerticalScrollSnap(2);
 *
 * return (
 *   <div className="slideContainer"
 *     onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
 *     onTouchMove={touchMoveEvent => scrollOnVerticalSwipe(touchMoveEvent)}
 *   >
 *     <div className="slide" style={{transform: `translateY(-${currentSlideId * 100}%)`}}>
 *       <h1>Content of first slide.</h1>
 *     </div>
 *     <div className="slide" style={{transform: `translateY(${(1 - currentSlideId) * 100}%)`}}>
 *       <h1>Content of second slide.</h1>
 *     </div>
 *   </div>
 * );
 *
 * @param {number} numberOfSlides - The number of slides you want to scroll through.
 * @returns {Array} The current slide ID, a function to call onTouchStart, and a function to call on onTouchMove.
 */
export function VerticalScrollSnap(numberOfSlides) {
    const minSlideId = 0;
    const maxSlideId = Math.max(0, numberOfSlides - 1);
    const [currentSlideId, setCurrentSlide] = useState(minSlideId);

    const touchStartPosition = useRef([0, 0]);
    const isAwaitingScroll = useRef(false);

    /* Saves starting point of touch to check for a vertical scroll on swipe. */
    function handleTouchStart(e) {
        touchStartPosition.current = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
        isAwaitingScroll.current = true;
    }

    /**
    * Checks for a vertical swipe and scrolls into according direction.
    *
    * isAwaitingScroll is used to block further scrolling if swipe continues longer than scroll animation.
    */
    function scrollOnVerticalSwipe(e) {
        if (isAwaitingScroll.current) {
            const touchCurrentPosition = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
            const swipeVectorX = touchCurrentPosition[0] - touchStartPosition.current[0];
            const swipeVectorY = touchCurrentPosition[1] - touchStartPosition.current[1];
            const isSwipingVertically = Math.abs(swipeVectorX) < Math.abs(swipeVectorY);
            const isSwipingDown = swipeVectorY > 0 && isSwipingVertically;
            const isSwipingUp = swipeVectorY < 0 && isSwipingVertically;

            if (isSwipingUp) {
                setCurrentSlide(currentSlideId < maxSlideId ? currentSlideId + 1 : currentSlideId);
                isAwaitingScroll.current = false;
            }

            if (isSwipingDown) {
                setCurrentSlide(currentSlideId > minSlideId ? currentSlideId - 1 : currentSlideId)
                isAwaitingScroll.current = false;
            }
        }
    }

    return [currentSlideId, handleTouchStart, scrollOnVerticalSwipe];
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
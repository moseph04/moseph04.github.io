(function(window, _) {
    window.claudius = window.claudius || {
      numz: {
        /**
         * 
         * @param {object} pointA 
         * @param {object} pointB 
         * @param {number} degrees
         * @param {number} radians
         * @param {number} distanceX
         * @param {number} distanceY
         * @param {number} pointB.x 
         * @param {number} pointB.y 
         * @param {number} pointA.x 
         * @param {number} pointA.y
         * @return {number} degrees
         * @return {number} radians
         */
        getAngleDegrees(pointA, pointB) {
          const
            distanceX = pointB.x - pointA.x,
            distanceY = pointB.y - pointA.y,
            radians = Math.atan2(distanceY, distanceX),
            degrees = radians * 180 / Math.PI;
            return degrees;
        }, 

          degreesToRadians(degrees) {
            return degrees * Math.PI / 180;
          },

          radiansToDegrees(radians) {
            return radians * 180 / Math.PI;
          },
      },
      phyz: {
        /**
         * 
         * @param {object} pointA
         * @param {object} pointB
         * @param {number} distanceX
         * @param {number} distanceY
         * @return {number} distance
         * @param {number} pointB.x 
         * @param {number} pointB.y 
         * @param {number} pointA.x 
         * @param {number} pointA.y
         */
        getDistance(pointA, pointB) {
          const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          return distance;
        },
      },
    };
  }(window, window._));

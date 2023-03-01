(function(window, _) {
    window.claudius = window.claudius || {
      numz: {},
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

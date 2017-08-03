(function (w) {
    'use strict';

    w.grafjs = w.grafjs || {};

    /**
     * the Graf class is the main class object that will be used for the drawing engine this 
     *      will keep all the data that is associate with the graph such as the calculations
     * 
     * @class Graf
     * @param {string} canvas is a canvas DOM element that is inteneded be used for drawing our map to
     * @param {number} grafType the type of graph that is expected to be drawn and have data for
     * @param {grafConfig} grafConfig takes a graphConfig class for the configuration of the graph itself
     */
    grafjs.Graf = function (canvas, grafType, grafConfig) {
        this.type = grafType;
        this.config = grafConfig;
    };

    /**
     * @name setDraw this function will set the draw function that will exection on each redraw depending on the type of graph that was setup to be drawn
     * @function
     * @return {void}
     */
    grafjs.Graf.prototype.draw = function () {
        switch (this.type) {
            case grafjs.GRAF_TYPE.Bar:
                drawBar();
            case grafjs.GRAF_TYPE.Pie:
                drawPie();
        }
    }

    /**
     * @private
     * @function
     */
    let drawBar = function () {
        //using the canvas draw what is needed
    }

    /**
     * this will draw a pie graph of the data that is provded by the Graf obj
     * @private
     * @function
     */
    let drawPie = function () {
        //using the canvas draw what is needed
    }

    /**
     * @enum {number}
     */
    grafjs.GRAF_TYPE = {
        Bar: 0,
        Pie: 1,
    };


    /**
     * GrafConfig is the configuration class that is to be injected into the Graf class
     *  
     * 
     * @class GrafConfig
     * @param {Point []} points the (x,y) array of positions for the current graph
     * @param {string} xDescription the title for the x axis to be displayed
     * @param {string} yDescription the title for the y axis to be displayed
     * @param {string} title the title for the graph that will be displayed at the top     
     */
    grafjs.GrafConfig = function (points, xDescription, yDescription, title) {}

    /**
     * Coordiante of the position for a value to be represented, a value x pair to a value y
     * 
     * @class Coordiante
     * @param {number} x value for the x position
     * @param {number} y value for the y position
     */
    grafjs.Point = function (x, y) {}

    // let graphBucket = [new Point(2, 3), new Point(5, 3), new Point(5, 9)];
    // var grafConf = new GrafConfig(graphBucket, "Years old", "daily Income", "age vs income chart");

    // var simpleFinance = new Graf(null, null, null);
    // simpleFinance.draw();

})(window);
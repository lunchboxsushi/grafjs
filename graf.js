/**
 * the Graf class is the main class object that will be used for the drawing engine this will keep all the data that is associate with the graph such as the calculations
 * 
 * @class Graf
 * @param {string} canvas is a canvas DOM element that is inteneded be used for drawing our map to
 * @param {number} grafType the type of graph that is expected to be drawn and have data for
 * @param {grafConfig} grafConfig takes a graphConfig class for the configuration of the graph itself
 */
var Graf = function (canvas, grafType, grafConfig) {
    let config = grafConfig;
};


/**
 * GrafConfig is the configuration class that is to be injected into the Graf class
 * 
 * @class GrafConfig
 * @param {coordiante} coordinate the (x,y) position for the current value
 * @param {string} xDescription the title for the x axis to be displayed
 * @param {string} yDescription the title for the y axis to be displayed
 * @param {string} title the title for the graph that will be displayed at the top
 * @param { }
 */
var GrapfConfig = function (coordiante, xDescription, yDescription, title) {}

/**
 * Coordiante of the position for a value to be represented, a value x pair to a value y
 * 
 * @class Coordiante
 * @param {number} x value for the x position
 * @param {number} y value for the y position
 */
var Coordiante = function (x, y) {}


/**
 * @enum {number}
 */
Graf.prototype.GRAF_TYPE = {
    Bar: 0,
    Pie: 1
};


var simpleFinance = new Graf(null, )




/**
 * @author Ray
 */

/**
 * @description Is Array
 * @param {*} target
 */
export default function isArray(target) {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Array';
}

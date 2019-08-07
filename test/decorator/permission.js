/**
 * @description test permission
 */
import permission from '../../src/decorator/permission';

it('class wrappered by permission should have a to toString function', () => {
    @permission()
    class Man {
        walk() {
            return 'walk';
        }
    }

    let tony = new Man();

    expect(tony.toString() === 'toString');
});

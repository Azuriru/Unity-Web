import ui from 'dorui';
import '../css/coming-soon.css';

export default ui.div({
    class: 'coming-soon',
    children: [
        ui.div({
            class: 'header',
            text: 'Prepare Yourself'
        }),
        ui.div({
            class: 'sub',
            text: 'Something kickass is coming soon'
        }),
        ui.div({
            class: 'footer',
            text: '- R'
        })
    ]
});
import moment from 'moment';
export default [{
    id: '1',
    description: 'Gas',
    note: '',
    amount: 30000,
    createdAt: 0
}, {
    id: '2',
    description: 'Hey',
    note: '',
    amount: 100,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {    
    id: '3',
    description: 'Oh',
    note: '',
    amount: 10900,
    createdAt: moment(0).add(4, 'days').valueOf()
}];